var listConfigs = {
    ChangeRequestLogListConfig: {
        listName: 'ChangeRequestLog',
        fields: [
            { 'InternalName': 'ID', 'addToList': false },
            { '__metadata': { 'type': 'SP.Field' }, 'FieldTypeKind': 8, 'Title': 'STC Relevant', 'InternalName': 'STCrelevant', 'StaticName': 'STCrelevant' },
            { '__metadata': { 'type': 'SP.Field' }, 'FieldTypeKind': 3, 'Title': 'Description/Reason', 'InternalName': 'DescriptionReason', 'StaticName': 'DescriptionReason' },
            { '__metadata': { 'type': 'SP.FieldChoice' }, 'FieldTypeKind': 6, 'Title': 'Source of Change', 'InternalName': 'SourceOfChange', 'StaticName': 'SourceOfChange', 'Choices': { 'results': ['customer', 'internal'] } },
            { '__metadata': { 'type': 'SP.FieldDateTime' }, 'FieldTypeKind': 4, 'Title': 'Date of receipt', 'InternalName': 'DateOfReceipt', 'StaticName': 'DateOfReceipt', 'DisplayFormat': 0 },
            { '__metadata': { 'type': 'SP.FieldChoice' }, 'FieldTypeKind': 6, 'Title': 'Urgency', 'InternalName': 'Urgency', 'StaticName': 'Urgency', 'Choices': { 'results': ['low', 'medium', 'high'] } },
            { '__metadata': { 'type': 'SP.Field' }, 'FieldTypeKind': 20, 'Title': 'Responsible', 'InternalName': 'Responsible', 'SchemaXml': '<Field Type=\"UserMulti\" Required=\"TRUE\" DisplayName=\"Responsible\" UserSelectionMode=\"PeopleAndGroups\" UserSelectionScope=\"0\" Mult=\"FALSE\" />' },
            { '__metadata': { 'type': 'SP.Field' }, 'FieldTypeKind': 2, 'Title': 'Description of impact scope', 'InternalName': 'DescriptionScope', 'StaticName': 'DescriptionScope' },
            { '__metadata': { 'type': 'SP.Field' }, 'FieldTypeKind': 2, 'Title': 'Description of impact cost', 'InternalName': 'DescriptionCost', 'StaticName': 'DescriptionCost' },
            { '__metadata': { 'type': 'SP.Field' }, 'FieldTypeKind': 2, 'Title': 'Description of impact schedule', 'InternalName': 'DescriptionSchedule', 'StaticName': 'DescriptionSchedule' },
            { '__metadata': { 'type': 'SP.Field' }, 'FieldTypeKind': 9, 'Title': 'Cost kCHF Project', 'InternalName': 'CostProject', 'Description': '(CHF)', 'StaticName': 'CostProject' },
            { '__metadata': { 'type': 'SP.Field' }, 'FieldTypeKind': 9, 'Title': 'Cost kCHF Operation p.a.', 'InternalName': 'CostOperation', 'Description': '(CHF)', 'StaticName': 'CostOperation' },
            { '__metadata': { 'type': 'SP.Field' }, 'FieldTypeKind': 9, 'Title': 'Price to customer kCHF Project', 'InternalName': 'PriceProject', 'StaticName': 'PriceProject' },
            { '__metadata': { 'type': 'SP.Field' }, 'FieldTypeKind': 2, 'Title': 'Price to customer kCHF Operation p.a.', 'InternalName': 'PriceOperation', 'StaticName': 'PriceOperation' },
            { '__metadata': { 'type': 'SP.FieldChoice' }, 'FieldTypeKind': 6, 'Title': 'Status', 'InternalName': 'Status', 'StaticName': 'Status', 'Choices': { 'results': ['undefined', 'query internal', 'query at customer', 'accepted', 'rejected'] } },
            { '__metadata': { 'type': 'SP.FieldDateTime' }, 'FieldTypeKind': 4, 'Title': 'DecisionDate', 'InternalName': 'DecisionDate', 'StaticName': 'DecisionDate', 'DisplayFormat': 0 }
        ]
    },
    PendingItemsListConfig: {
        listName: 'PendingItems',
        fields: [
            { 'InternalName': 'ID', 'addToList': false },
            { '__metadata': { 'type': 'SP.Field' }, 'FieldTypeKind': 8, 'Title': 'STC relevant', 'InternalName': 'STCrelevant', 'StaticName': 'STCrelevant' },
            { '__metadata': { 'type': 'SP.Field' }, 'FieldTypeKind': 3, 'Title': 'Description', 'InternalName': 'Description', 'StaticName': 'Description' },
            { '__metadata': { 'type': 'SP.FieldDateTime' }, 'FieldTypeKind': 4, 'Title': 'Date of receipt', 'InternalName': 'DateOfReceipt', 'StaticName': 'DateOfReceipt', 'DisplayFormat': 0 },
            { '__metadata': { 'type': 'SP.Field' }, 'FieldTypeKind': 20, 'Title': 'RequestedBy', 'InternalName': 'RequestedBy', 'SchemaXml': '<Field Type=\"UserMulti\" DisplayName=\"RequestedBy\" UserSelectionMode=\"PeopleAndGroups\" UserSelectionScope=\"0\" Mult=\"FALSE\" />' },
            { '__metadata': { 'type': 'SP.Field' }, 'FieldTypeKind': 20, 'Title': 'Responsible', 'InternalName': 'Responsible', 'SchemaXml': '<Field Type=\"UserMulti\" Required=\"TRUE\" DisplayName=\"Responsible\" UserSelectionMode=\"PeopleAndGroups\" UserSelectionScope=\"0\" Mult=\"FALSE\" />' },
            { '__metadata': { 'type': 'SP.FieldDateTime' }, 'FieldTypeKind': 4, 'Title': 'Date planned', 'InternalName': 'DatePlanned', 'StaticName': 'DatePlanned', 'DisplayFormat': 0 },
            { '__metadata': { 'type': 'SP.FieldDateTime' }, 'FieldTypeKind': 4, 'Title': 'Date finalized', 'InternalName': 'DateFinal', 'StaticName': 'DateFinal', 'DisplayFormat': 0 },
            { '__metadata': { 'type': 'SP.FieldChoice' }, 'FieldTypeKind': 6, 'Title': 'Status', 'InternalName': 'Status', 'StaticName': 'Status', 'Choices': { 'results': ['not started', 'work in progress', 'completed'] } },
            { '__metadata': { 'type': 'SP.Field' }, 'FieldTypeKind': 3, 'Title': 'Remark/Progress', 'InternalName': 'RemarkProgress', 'StaticName': 'RemarkProgress' }
        ]
    },
    RisksListConfig: {
        listName: 'Risks',
        fields: [
            { '__metadata': { 'type': 'SP.Field' }, 'FieldTypeKind': 2, 'Title': 'Description', 'InternalName': 'Description', 'StaticName': 'Description' },
            { '__metadata': { 'type': 'SP.Field' }, 'FieldTypeKind': 8, 'Title': 'Risk is Active', 'InternalName': 'RiskIsActive', 'StaticName': 'RiskIsActive' },
            { '__metadata': { 'type': 'SP.FieldChoice' }, 'FieldTypeKind': 6, 'Title': 'Risk Type', 'InternalName': 'RiskType', 'StaticName': 'RiskType', 'Choices': { 'results': ['Schedule', 'CostResources', 'Scope'] } },
            { '__metadata': { 'type': 'SP.FieldChoice' }, 'FieldTypeKind': 6, 'Title': 'Probability', 'InternalName': 'Probability', 'Description': '0 = na(0%); 1 = low(20%); 2 = medium(40%); 3 = high(60%); 4 = very high(80%)', 'StaticName': 'Probability', 'Choices': { 'results': ['0', '1', '2', '3', '4'] } },
            { '__metadata': { 'type': 'SP.FieldChoice' }, 'FieldTypeKind': 6, 'Title': 'Impact/Damage', 'InternalName': 'ImpactDamage', 'Description': '1 = marginal, 2 = low, 3 = critical, 4 = catastrophic', 'StaticName': 'ImpactDamage', 'Choices': { 'results': ['1', '2', '3', '4'] } },
            { '__metadata': { 'type': 'SP.Field' }, 'FieldTypeKind': 2, 'Title': 'Impact / Damage calc', 'InternalName': 'ImpactDamageCalc', 'StaticName': 'ImpactDamageCalc', 'Hidden': 'true' },
            { '__metadata': { 'type': 'SP.FieldCalculated' }, 'FieldTypeKind': 17, 'Title': 'Risk Value', 'InternalName': 'RiskValue', 'StaticName': 'RiskValue', 'Formula': '=[Impact/Damage]*Probability', 'OutputType': 2 },
            { '__metadata': { 'type': 'SP.FieldCalculated' }, 'FieldTypeKind': 17, 'Title': 'Risk Category', 'InternalName': 'RiskCategory', 'StaticName': 'RiskCategory', 'Formula': '=IF([Risk Value]>10,\"High\",IF([Risk Value]<5, \"Low\",\"Medium\"))', 'OutputType': 2 },
            { '__metadata': { 'type': 'SP.Field' }, 'FieldTypeKind': 3, 'Title': 'Measures', 'InternalName': 'Measures', 'StaticName': 'Measures' },
            { '__metadata': { 'type': 'SP.Field' }, 'FieldTypeKind': 2, 'Title': 'Costs for Measures in place', 'InternalName': 'CostsForMeasuresInPlace', 'Description': '(CHF)', 'StaticName': 'CostsForMeasuresInPlace' },
            { '__metadata': { 'type': 'SP.Field' }, 'FieldTypeKind': 20, 'Title': 'Responsible', 'InternalName': 'Responsible', 'SchemaXml': '<Field Type=\"UserMulti\" Required=\"TRUE\"  DisplayName=\"Responsible\" UserSelectionMode=\"PeopleAndGroups\" UserSelectionScope=\"0\" Mult=\"FALSE\" />' },
            { '__metadata': { 'type': 'SP.Field' }, 'FieldTypeKind': 2, 'Title': 'Costs on Occurrence', 'InternalName': 'CostsOnOccurrence', 'Description': '(CHF)', 'StaticName': 'CostsOnOccurrence' },
            { '__metadata': { 'type': 'SP.Field' }, 'FieldTypeKind': 8, 'Title': 'Main Risk', 'InternalName': 'MainRisk', 'StaticName': 'MainRisk' },
            { '__metadata': { 'type': 'SP.FieldCalculated' }, 'FieldTypeKind': 17, 'Title': 'Report Relevant', 'InternalName': 'ReportRelevant', 'StaticName': 'ReportRelevant', 'Formula': '=IF([Risk is Active]=TRUE,IF([Main Risk]=TRUE,TRUE,FALSE),FALSE)', 'OutputType': 2 }
        ]
    }
}