# ArticleAttachments

This entity contains attachments for Knowledgebase articles in Autotask.

- **Entity path:** `/atservicesrest/v1.0/ArticleAttachments`
- **Capabilities:** create ✓ · update — · query ✓ · delete ✓
- **Parent:** KnowledgeBaseArticles

## Access URLs

- `ArticleAttachments/{id} (GET)`
- `ArticleAttachments/query (GET, POST)`
- `ArticleAttachments/query/count (GET, POST)`
- `ArticleAttachments/entityInformation (GET)`
- `ArticleBaseAttachments/entityInformation/fields (GET)`

## Fields (13)

| Field | Type | Notes |
|---|---|---|
| `articleID` | integer | KnowledgeBaseArticles |
| `attachDate` | datetime |  |
| `attachedByContactID` | long | Contacts |
| `attachedByResourceID` | long | Resources |
| `attachmentType` | string (30) |  |
| `contentType` | string (100) |  |
| `errorCodes` | string (200) |  |
| `fullPath` | string (255) |  |
| `impersonatorCreatorResourceID` | integer | Resources |
| `opportunityID` | long | Opportunities |
| `parentAttachmentID` | integer | AttachmentInfo (REST API) |
| `parentID` | long |  |
| `title` | string (255) |  |

