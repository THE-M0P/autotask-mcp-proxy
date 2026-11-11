# ResourceAttachments

This entity contains the attachments for the Resources entity. For more information about attachments, including call syntax, thresholds and limits, and a full list of attachment entities, refer to Working with attachments in the REST API .

- **Entity path:** `/atservicesrest/v1.0/ResourceAttachments`
- **Capabilities:** create ✓ · update — · query ✓ · delete ✓
- **Parent:** Resources

## Access URLs

- `ResourceAttachments/entityInformation (GET)`
- `ResourceAttachments/entityInformation/fields (GET)`
- `ResourceAttachments/query (GET, POST)`
- `ResourceAttachments/{id} (GET)`
- `ResourceAttachments/query/count (GET, POST)`

## Fields (12)

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
| `resourceID` | integer |
| `title` | string (255) |

