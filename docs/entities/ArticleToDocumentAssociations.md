# ArticleToDocumentAssociations

This entity represents articles associated with Knowledgebase documents in Autotask.

- **Entity path:** `/atservicesrest/v1.0/ArticleToDocumentAssociations`
- **Capabilities:** create ✓ · update — · query ✓ · delete ✓
- **Parent:** Documents

## Access URLs

- `ArticleToDocumentAssociations/{id} (GET)`
- `ArticleToDocumentAssociations/query (GET, POST)`
- `ArticleToDocumentAssociations/query/count (GET, POST)`
- `ArticleToDocumentAssociations/entityInformation (GET)`
- `ArticleToDocumentAssociations/entityInformation/fields (GET)`

## Fields (2)

| Field | Type | Notes |
|---|---|---|
| `articleID` | integer | KnowledgeBaseArticles |
| `associatedDocumentID` | integer | Documents |

