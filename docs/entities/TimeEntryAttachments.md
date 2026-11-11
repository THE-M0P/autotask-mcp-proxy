# TimeEntryAttachments

This entity contains the attachments for the TimeEntries entity. For more information about attachments, including call syntax, thresholds and limits, and a full list of attachment entities, refer to Working with attachments in the REST API .

- **Entity path:** `/atservicesrest/v1.0/TimeEntryAttachments`
- **Capabilities:** create ✓ · update — · query ✓ · delete ✓
- **Parent:** TimeEntries

## Access URLs

- `TimeEntryAttachments/entityInformation (GET)`
- `TimeEntryAttachments/entityInformation/fields (GET)`
- `TimeEntryAttachments/query (GET, POST)`
- `TimeEntryAttachments/{id} (GET) TimeEntryAttachments/query/count (GET, POST)`

## Fields (15)

| Field | Type | Notes |
|---|---|---|
| `attachDate` | datetime |  |
| `attachedByContactID` | long | Contacts |
| `attachedByResourceID` | long | Resources |
| `attachmentType` | string (30) |  |
| `contentType` | string (100) |  |
| `fullPath` | string (255) |  |
| `impersonatorCreatorResourceID` | integer | Resources |
| `opportunityID` | long | Opportunities |
| `parentID` | long |  |
| `publish` | integer |  |
| `taskID` | integer | TaskAttachments |
| `taskNoteID` | integer | TaskNotes |
| `timeEntryID` | integer | TimeEntries |
| `parentAttachmentID` | integer | Multiple; varies based on parent. |
| `title` | string (255) |  |

