# ConfigurationItemNoteAttachments

This entity contains the attachments for the ConfigurationItemNotes entity. For more information about attachments, including call syntax, thresholds and limits, and a full list of attachment entities, refer to Working with attachments in the REST API .

- **Entity path:** `/atservicesrest/v1.0/ConfigurationItemNoteAttachments`
- **Capabilities:** create ✓ · update — · query ✓ · delete ✓
- **Parent:** ConfigurationItemNotes

## Access URLs

- `ConfigurationItemNoteAttachments/entityInformation (GET)`
- `ConfigurationItemNoteAttachments/entityInformation/fields (GET)`
- `ConfigurationItemNoteAttachments/query (GET, POST)`
- `ConfigurationItemNoteAttachments/{id} (GET)`
- `ConfigurationItemNoteAttachments/query/count (GET, POST)`

## Fields (13)

| Field | Type |
|---|---|
| `attachDate` | datetime |
| `attachedByContactID` | long |
| `attachedByResourceID` | long |
| `attachmentType` | string (30) |
| `configurationItemID` | integer |
| `configurationItemNoteID` | integer |
| `contentType` | string (100) |
| `fullPath` | string (255) |
| `impersonatorCreatorResourceID` | integer |
| `opportunityID` | long |
| `parentID` | long |
| `publish` | integer |
| `title` | string (255) |

