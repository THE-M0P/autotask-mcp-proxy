# TaskNoteAttachments

This entity contains the attachments for the TaskNotes entity. For more information about attachments, including call syntax, thresholds and limits, and a full list of attachment entities, refer to Working with attachments in the REST API .

- **Entity path:** `/atservicesrest/v1.0/TaskNoteAttachments`
- **Capabilities:** create ✓ · update — · query ✓ · delete ✓
- **Parent:** TaskNotes

## Access URLs

- `TaskNotes/query (GET, POST)`
- `TaskNotes/{id} (GET)`
- `TaskNotes/query/count (GET, POST)`
- `TaskNotes (PUT, POST, PATCH)`
- `TaskNotes/entityInformation (GET)`
- `TaskNotes/entityInformation/fields (GET)`
- `TaskNotes/entityInformation/userDefinedFields (GET)`

## Fields (13)

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
| `title` | string (255) |

