# ExpenseReportAttachments

This entity contains the attachments for the ExpenseReports entity. For more information about attachments, including call syntax, thresholds and limits, and a full list of attachment entities, refer to Working with attachments in the REST API .

- **Entity path:** `/atservicesrest/v1.0/ExpenseReportAttachments`
- **Capabilities:** create ✓ · update — · query ✓ · delete ✓
- **Parent:** ExpenseReports

## Access URLs

- `ExpenseReportAttachments/entityInformation (GET)`
- `ExpenseReportAttachments/entityInformation/fields (GET)`
- `ExpenseReportAttachments/query (GET, POST)`
- `ExpenseReportAttachments/{id} (GET)`
- `ExpenseReportAttachments/query/count (GET, POST)`

## Fields (13)

| Field | Type | Notes |
|---|---|---|
| `expenseItemID` | integer | Query results will include attachments parented to ExpenseItems that are, themselves, parented to ExpenseReports with expenseReportID values referenced in the query. |
| `attachDate` | datetime |  |
| `attachedByContactID` | long | Contacts |
| `attachedByResourceID` | long | Resources |
| `attachmentType` | string (30) |  |
| `contentType` | string (100) |  |
| `expenseReportID` | integer | ExpenseReports |
| `fullPath` | string (255) |  |
| `impersonatorCreatorResourceID` | integer | Resources |
| `opportunityID` | long | Opportunities |
| `parentID` | long |  |
| `publish` | integer |  |
| `title` | string (255) |  |

