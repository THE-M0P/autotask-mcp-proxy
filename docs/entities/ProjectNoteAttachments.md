# ProjectNoteAttachments

This entity contains the attachments for the ProjectNotes entity. For more information about attachments, including call syntax, thresholds and limits, and a full list of attachment entities, refer to Working with attachments in the REST API .

- **Entity path:** `/atservicesrest/v1.0/ProjectNoteAttachments`
- **Capabilities:** create ✓ · update — · query ✓ · delete ✓
- **Parent:** ProjectNotes

## Access URLs

- `ProjectNoteAttachments/entityInformation (GET)`
- `ProjectNoteAttachments/entityInformation/fields (GET)`
- `ProjectNoteAttachments/query (GET, POST)`
- `ProjectNoteAttachments/{id} (GET)`
- `ProjectNoteAttachments/query/count (GET, POST)`

## Fields (17)

| Field | Type |
|---|---|
| `attachDate` | datetime |
| `attachedByContactID` | long |
| `attachedByResourceID` | long |
| `attachmentType` | string (30) |
| `contentType` | string (100) |
| `creatorType` | integer |
| `data` | byte |
| `fileSize` | long |
| `fullPath` | string (255) |
| `impersonatorCreatorResourceID` | integer |
| `opportunityID` | long |
| `parentAttachmentID` | integer |
| `parentID` | long |
| `projectID` | integer |
| `projectNoteID` | integer |
| `publish` | integer |
| `title` | string (255) |

