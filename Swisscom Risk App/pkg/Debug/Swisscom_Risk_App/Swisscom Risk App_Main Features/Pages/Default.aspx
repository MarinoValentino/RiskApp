<%-- The following 4 lines are ASP.NET directives needed when using SharePoint components --%>

<%@ Page Inherits="Microsoft.SharePoint.WebPartPages.WebPartPage, Microsoft.SharePoint, Version=15.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" MasterPageFile="~masterurl/default.master" Language="C#" %>

<%@ Register TagPrefix="Utilities" Namespace="Microsoft.SharePoint.Utilities" Assembly="Microsoft.SharePoint, Version=15.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %>
<%@ Register TagPrefix="WebPartPages" Namespace="Microsoft.SharePoint.WebPartPages" Assembly="Microsoft.SharePoint, Version=15.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %>
<%@ Register TagPrefix="SharePoint" Namespace="Microsoft.SharePoint.WebControls" Assembly="Microsoft.SharePoint, Version=15.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %>

<%-- The markup and script in the following Content element will be placed in the <head> of the page --%>
<asp:Content ContentPlaceHolderID="PlaceHolderAdditionalPageHead" runat="server">
    <!-- HTML meta tags -->
    <meta name="WebPartPageExpansion" content="full" />
    <meta http-equiv="X-UA-Compatible" content="IE=11; IE=10; IE=9; IE=8; IE=7; IE=EDGE" />
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=no, minimal-ui">

    <!-- Stylesheets -->
    <link rel="Stylesheet" type="text/css" href="../Content/App.css" />

    <!-- Javascripts -->
    <SharePoint:ScriptLink Name="sp.js" runat="server" OnDemand="true" LoadAfterUI="true" Localizable="false" />
    <script type="text/javascript" src="../Scripts/vendor/jquery-2.2.3.min.js"></script>
    <script type="text/javascript" src="../Scripts/vendor/promise-polyfill.js"></script>
    <script type="text/javascript" src="../Scripts/App.js"></script>
</asp:Content>
<asp:Content ContentPlaceHolderID="PlaceHolderMain" runat="server">
    <h1>List Overview</h1>
    <div class="listInfos">
        <div class="listInfoWrapper">
            <h2>ChangeRequestLog</h2>
            <div class="listStateIndicator" data-listname="ChangeRequestLog"></div>
        </div>
        <div class="listInfoWrapper">
            <h2>Risks</h2>
            <div class="listStateIndicator" data-listname="Risks"></div>
        </div>
        <div class="listInfoWrapper">
            <h2>PendingItems</h2>
            <div class="listStateIndicator" data-listname="PendingItems"></div>
        </div>
    </div>
    <hr />
    <div id="legendContainer">
        <h3>Legend:</h3>
        <div class="legendWrapper">
            <p>List is not available</p>
            <div class="listStateIndicator listStateUnavailable"></div>
        </div>
        <div class="legendWrapper">
            <p>List is setting up</p>
            <div class="listStateIndicator listStateInProgress"></div>
        </div>
        <div class="legendWrapper">
            <p>List is available</p>
            <div class="listStateIndicator listStateAvailable"></div>
        </div>
    </div>
    <div id="errorLogContainer">
        <h3>Oh snap!</h3>
        <p id="errorLogMsg"><span>Error: </span>There occured an error while trying to set up the list.</p>
    </div>
</asp:Content>
