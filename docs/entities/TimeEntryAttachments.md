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

| Field | Type |
|---|---|
| `attachDate` | datetime |
| `attachedByContactID` | long |
| `attachedByResourceID` | long |
| `attachmentType` | string (30) |
| `contentType` | string (100) |
| `fullPath` | string (255) |
| `impersonatorCreatorResourceID` | integer |
| `opportunityID` | long |
| `parentID` | long |
| `publish` | integer |
| `taskID` | integer |
| `taskNoteID` | integer |
| `timeEntryID` | integer |
| `parentAttachmentID` | integer |
| `title` | string (255) |

