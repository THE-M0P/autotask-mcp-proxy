# CompanyAttachments

This entity contains the attachments for the Companies entity. For more information about attachments, including call syntax, thresholds and limits, and a full list of attachment entities, refer to Working with attachments in the REST API .

- **Entity path:** `/atservicesrest/v1.0/CompanyAttachments`
- **Capabilities:** create ✓ · update — · query ✓ · delete ✓

## Fields (15)

| Field | Type | Notes |
|---|---|---|
| `attachDate` | datetime |  |
| `attachedByContactID` | long | Contacts |
| `attachedByResourceID` | long | Resources |
| `attachmentType` | string |  |
| `companyID` | integer | Companies |
| `companyNoteID` | integer | CompanyNotes |
| `contentType` | string |  |
| `fullPath` | string |  |
| `impersonatorCreatorResourceID` | integer | Resources |
| `opportunityID` | long | Opportunities |
| `parentAttachmentID` | integer | Multiple; varies based on parent. |
| `parentID` | long |  |
| `publish` | integer |  |
| `salesOrderID` | integer | SalesOrders |
| `title` | string |  |

