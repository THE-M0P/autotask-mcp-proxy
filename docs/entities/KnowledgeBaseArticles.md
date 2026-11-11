# KnowledgeBaseArticles

This entity represents articles created by Knowledgebase users in Autotask.

- **Entity path:** `/atservicesrest/v1.0/KnowledgeBaseArticle`
- **Capabilities:** create ✓ · update ✓ · query ✓ · delete ✓
- **Parent:** KnowledgeBaseCategories
- **Children:** ArticlePlainTextContent, ArticleAttachments, ArticleTagAssociations, ArticleTicketAssociations, ArticleToArticleAssociations, ArticleToDocumentAssociations, ArticleConfigurationItemCategoryAssociations, ArticleNotes

## Access URLs

- `KnowledgeBaseArticles/{id} (GET)`
- `KnowledgeBaseArticles/query (GET, POST) KnowledgeBaseArticles/query/count (GET, POST)`
- `KnowledgeBaseArticles/entityInformation (GET)`
- `KnowledgeBaseArticles/entityInformation/fields (GET)`

## Fields (12)

| Field | Type | Notes |
|---|---|---|
| `content` |  | IMPORTANT Updates to the content field will remove any Rich Text formatting and embedded images that it contains. |
| `articleCategoryID` | integer | KnowledgeBaseCategories |
| `createdByResourceID` | integer | Resources |
| `createdDateTime` | datetime |  |
| `errorCodes` | string (200) |  |
| `isActive` | boolean |  |
| `keywords` | string (300) |  |
| `lastModifiedByResourceID` | integer | Resources |
| `lastModifiedDateTime` | datetime |  |
| `publish` | integer |  |
| `referenceLink` | string (500) |  |
| `title` | string (200) |  |

