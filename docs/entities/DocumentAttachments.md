# DocumentAttachments

This entity contains attachments for documents in Autotask.

- **Entity path:** `/atservicesrest/v1.0/DocumentAttachments`
- **Capabilities:** create ✓ · update — · query ✓ · delete ✓
- **Parent:** Documents

## Access URLs

- `DocumentAttachments/{id} (GET, DELETE)`
- `DocumentAttachments/query (GET, POST)`
- `DocumentAttachments/query/count (GET, POST)`
- `DocumentAttachments/ (POST, PUT, PATCH)`
- `DocumentAttachments/entityInformation (GET)`
- `DocumentAttachments/entityInformation/fields (GET)`
- `Documents/{parentId}/Attachments(GET, POST)`
- `Documents/{parentId}/Attachments/{id} (GET, DELETE)`
- `Documents/{parentId}/Attachments/entityInformation (GET)`
- `Documents/{parentId}/Attachments/entityInformation/fields (GET)`

## Fields (13)

| Field | Type | Notes |
|---|---|---|
| `attachDate` | datetime |  |
| `attachedByContactID` | long | Contacts |
| `attachedByResourceID` | long | Resources |
| `attachmentType` | string (30) |  |
| `contentType` | string (100) |  |
| `documentID` | integer | Documents |
| `errorCodes` | string (200) |  |
| `fullPath` | string (255) |  |
| `impersonatorCreatorResourceID` | integer | Resources |
| `opportunityID` | long | Opportunities |
| `parentAttachmentID` | integer | AttachmentInfo (REST API) |
| `parentID` | long |  |
| `title` | string (255) |  |

