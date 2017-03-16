'use strict';
var riskapp = riskapp || {};

$(document).ready(function () {

    /* ---------- Main app control flow ---------- */

    //Self executing (updates on load and when called)
    function updateListState() {
        //Remove anchors if already available
        $(".listInfoWrapper a").remove();
        //check list status/existence and show the according anchors
        var lists = ["ChangeRequestLog", "Risks", "PendingItems"];
        $.each(lists, function (i, listName) {
            riskapp.listHandling.checkListExistence(listName, function (listExists) {
                var $statusIndicator = $("[data-listName=" + listName + "]");
                if (listExists) {
                    $statusIndicator.addClass("listStateAvailable");
                    $statusIndicator.before("<a href='" + _spPageContextInfo.siteAbsoluteUrl + "/Lists/" + listName + "' target='_blank'>go to list</a>");
                } else {
                    $statusIndicator.addClass("listStateUnavailable");
                    $statusIndicator.before("<a class='createListBtn' data-list='" + listName + "'>create list</a>");
                }
            });
        });
    }

    //Get the list states on load
    updateListState();

    //Click handler for creating lists
    $(".listInfoWrapper").on("click", ".createListBtn", function () {
        var $this = $(this);
        var listName = $this.data("list");

        //Indicate running task in view
        $this.siblings(".listStateIndicator").addClass("listStateInProgress");

        //Check if listconfigs are already loaded and get them if not, then start the list creation
        if (typeof listConfigs === "undefined") {
            $.getScript("../Scripts/listConfigs.js", function () {
                initListCreation();
            });
        } else {
            initListCreation();
        }

        //Load SP.RequestExecutor, set active listconfig and initialize list creation
        function initListCreation() {
            $.getScript(riskapp.utils.getSpHostUrl() + "/_layouts/15/SP.RequestExecutor.js", function () {
                var activeListConfig = listConfigs[listName + "ListConfig"];
                riskapp.listHandling.setupList(activeListConfig, function () {
                    //Success handler
                    $this.siblings(".listStateIndicator").addClass("listStateAvailable");
                    updateListState();
                });
            });
        }
    });
});

//No dependencies
riskapp.utils = (function () {
    function getUrlParam(paramName) {
        return decodeURIComponent((new RegExp('[#|?|&]' + paramName + '=' + '([^&;]+?)(&|#|;|$)').exec(location.search) || [, ""])[1].replace(/\+/g, '%20')) || null;
    }
    return {
        getUrlParam: getUrlParam,
        getSpHostUrl: function () {
            return this.getUrlParam("SPHostUrl");
        }
    }
})();

//dependencies: utils
riskapp.listHandling = (function () {

    //Log error in console and show erro to user
    function _handleError(err) {
        var errStatusCode = err.status;
        var errStatusText = err.statusText;

        //Fallback for malformed/empty/bad sp error responses
        var errStatusMsg = null;
        err.responseJSON && (errStatusMsg = err.responseJSON.error.message.value);

        if (errStatusMsg) {
            console.log(errStatusCode + " - " + errStatusText + ": " + errStatusMsg);
        } else {
            console.log(err);
        }

        $("#errorLogContainer").show(300);
    }

    //Create list with given listname
    function _createList(listName, callback) {
        var hostWebUrl = riskapp.utils.getSpHostUrl();
        var appWebUrl = _spPageContextInfo.siteAbsoluteUrl;
        var spExecutor = new SP.RequestExecutor(appWebUrl);
        var requestUrl = appWebUrl + "/_api/SP.AppContextSite(@target)/web/Lists?@target='" + hostWebUrl + "'&siteUrl='" + hostWebUrl + "'";
        spExecutor.executeAsync({
            url: requestUrl,
            method: "POST",
            body: JSON.stringify({ '__metadata': { 'type': 'SP.List' }, 'AllowContentTypes': true, 'BaseTemplate': 100, 'ContentTypesEnabled': true, 'Description': listName, 'Title': listName }),
            headers: {
                "content-type": "application/json; odata=verbose"
            },
            success: callback,
            error: _handleError
        });
    }

    //function to make serial SP calls with sp request executor
    function _executeSpRequest(callConfig) {
        return function () {
            return new Promise(function (resolve, reject) {
                var spExecutor = new SP.RequestExecutor(_spPageContextInfo.siteAbsoluteUrl);
                //Add success and error handler to callConfig
                $.extend(callConfig, {
                    'success': resolve,
                    'error': reject
                })
                spExecutor.executeAsync(callConfig);
            });
        }
    }

    //Add fields to list according to config
    function _addFieldsToList(listConfig, callback) {

        //Prepare empty/resolved promise to iterate later
        var promise = Promise.resolve(null);

        //Loop through every field 
        $.each(listConfig.fields, function (i, fieldConfig) {
            //The column "ID" has to be in the view but already exists in the list --> fallback for this case
            if (fieldConfig.addToList === false) {
                return;
            } else {
                var requestUrl = _spPageContextInfo.siteAbsoluteUrl + "/_api/SP.AppContextSite(@target)/web/Lists/getbytitle('" + listConfig.listName + "')/fields?@target='" + riskapp.utils.getSpHostUrl() + "'";
                var callConfig = {
                    url: requestUrl,
                    method: "POST",
                    body: JSON.stringify(fieldConfig),
                    headers: {
                        "accept": "application/json;odata=verbose",
                        "content-type": "application/json; odata=verbose"
                    }
                }

                promise = promise.then(_executeSpRequest(callConfig), _handleError);
            }
        });

        //execute callback when all fields are created
        promise.then(callback);
    }

    //Get the id of the given list
    function _getDefaultViewId(listName, callback) {
        $.ajax({
            url: _spPageContextInfo.siteAbsoluteUrl + "/_api/web/Lists/getbytitle('" + listName + "')/DefaultView",
            type: "GET",
            headers: {
                "accept": "application/json;odata=verbose"
            },
            success: function (data) {
                var defaultViewId = data.d.Id;
                callback(defaultViewId);
            },
            error: _handleError
        });
    }

    //Add the fields to the given view accroding to the config
    function _addFieldsToView(viewId, listConfig, callback) {
        //Prepare empty/resolved promise to iterate later
        var promise = Promise.resolve(null);

        //Loop through every field
        $.each(listConfig.fields, function (i, fieldConfig) {
            var requestUrl = _spPageContextInfo.siteAbsoluteUrl + "/_api/SP.AppContextSite(@target)/web/Lists/getbytitle('" + listConfig.listName + "')/views('" + viewId + "')/viewfields/addviewfield('" + fieldConfig.InternalName + "')?@target='" + riskapp.utils.getSpHostUrl() + "'";
            var callConfig = {
                url: requestUrl,
                method: "POST",
                headers: {
                    "content-type": "application/json; charset=utf-8"
                }
            }
            promise = promise.then(_executeSpRequest(callConfig), _handleError);
        });

        //execute callback when all fields are added in list view
        promise.then(callback);
    }

    //Check if the list with the given name exists --> globally available
    function checkListExistence(listName, callback) {
        $.ajax({
            url: _spPageContextInfo.siteAbsoluteUrl + "/_api/web/Lists?$filter=title eq '" + listName + "'",
            type: "GET",
            async: false,
            headers: {
                "accept": "application/json;odata=verbose"
            },
            success: function (data) {
                var listExists = false;
                //Set listExists to true if length of results is > 0
                if (data.d.results.length > 0) { listExists = true }
                callback(listExists);
            },
            error: _handleError
        });
    }

    //Handles the main control flow for creating lists --> globally available
    function setupList(listConfig, successCallback) {
        //create list
        _createList(listConfig.listName, function () {
            //Add fields
            _addFieldsToList(listConfig, function () {
                //get the id of the default view
                _getDefaultViewId(listConfig.listName, function (defaultViewId) {
                    //add fields to view
                    _addFieldsToView(defaultViewId, listConfig, function () {
                        successCallback();
                    });
                });
            });
        });
    }
    return {
        checkListExistence: checkListExistence,
        setupList: setupList
    }
})();