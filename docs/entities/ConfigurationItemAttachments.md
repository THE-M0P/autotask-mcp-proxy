# ConfigurationItemAttachments

This entity contains the attachments for the ConfigurationItems entity. For more information about attachments, including call syntax, thresholds and limits, and a full list of attachment entities, refer to Working with attachments in the REST API .

- **Entity path:** `/atservicesrest/v1.0/ConfigurationItemAttachment`
- **Capabilities:** create ✓ · update — · query ✓ · delete ✓
- **Parent:** ConfigurationItems

## Access URLs

- `ConfigurationItemAttachments/entityInformation (GET)`
- `ConfigurationItemAttachments/entityInformation/fields (GET)`
- `ConfigurationItemAttachments/query (GET, POST)`
- `ConfigurationItemAttachments/{id} (GET)`
- `ConfigurationItemAttachments/query/count (GET, POST)`

## Fields (14)

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
| `parentAttachmentID` | integer |
| `parentID` | long |
| `publish` | integer |
| `title` | string (255) |

