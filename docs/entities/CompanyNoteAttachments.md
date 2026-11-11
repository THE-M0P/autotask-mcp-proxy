# CompanyNoteAttachments

This entity contains the attachments for the CompanyNotes entity. For more information about attachments, including call syntax, thresholds and limits, and a full list of attachment entities, refer to Working with attachments in the REST API .

- **Entity path:** `/atservicesrest/v1.0/CompanyNoteAttachments`
- **Capabilities:** create ✓ · update — · query ✓ · delete ✓
- **Parent:** CompanyNotes

## Access URLs

- `CompanyNoteAttachments/entityInformation (GET)`
- `CompanyNoteAttachments/entityInformation/fields (GET)`
- `CompanyNoteAttachments/query (GET, POST)`
- `CompanyNoteAttachments/{id} (GET)`
- `CompanyNoteAttachments/query/count (GET, POST)`

## Fields (14)

| Field | Type | Notes |
|---|---|---|
| `attachDate` | datetime |  |
| `attachedByContactID` | long | Contacts |
| `attachedByResourceID` | long | Resources |
| `attachmentType` | string (30) |  |
| `companyID` | integer | Companies |
| `companyNoteID` | integer | CompanyNotes |
| `contentType` | string (100) |  |
| `fullPath` | string (255) |  |
| `impersonatorCreatorResourceID` | integer | Resources |
| `opportunityID` | integer | Opportunities |
| `parentID` | long |  |
| `publish` | integer |  |
| `salesOrderID` | integer | SalesOrders |
| `title` | string (255) |  |

