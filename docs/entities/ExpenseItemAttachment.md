# ExpenseItemAttachment

This entity contains the attachments for the ExpenseItems entity. For more information about attachments, including call syntax, thresholds and limits, and a full list of attachment entities, refer to Working with attachments in the REST API .

- **Entity path:** `/atservicesrest/v1.0/ExpenseItemAttachment`
- **Capabilities:** create ✓ · update — · query ✓ · delete ✓
- **Parent:** ExpenseItems

## Access URLs

- `ExpenseItemAttachments/entityInformation (GET)`
- `ExpenseItemAttachments/entityInformation/fields (GET)`
- `ExpenseItemAttachments/query (GET, POST)`
- `ExpenseItemAttachments/{id} (GET)`
- `ExpenseItemAttachments/query/count (GET, POST)`

## Fields (14)

| Field | Type |
|---|---|
| `attachDate` | datetime |
| `attachedByContactID` | long |
| `attachedByResourceID` | long |
| `attachmentType` | string (30) |
| `contentType` | string (100) |
| `creatorType` | integer |
| `expenseItemID` | integer |
| `expenseReportID` | integer |
| `fullPath` | string (255) |
| `impersonatorCreatorResourceID` | integer |
| `opportunityID` | long |
| `parentID` | long |
| `publish` | integer |
| `title` | string (255) |

