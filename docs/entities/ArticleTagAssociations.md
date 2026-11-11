# ArticleTagAssociations

This entity records existing associations between tags and Knowledgebase articles in Autotask.

- **Entity path:** `/atservicesrest/v1.0/ArticleTagAssociations`
- **Capabilities:** create ✓ · update — · query ✓ · delete ✓
- **Parent:** KnowledgeBaseArticles

## Access URLs

- `ArticleTagAssociations/{id} (GET)`
- `ArticleTagAssociations/query (GET, POST)`
- `ArticleTagAssociations/query/count (GET, POST)`
- `ArticleTagAssociations/entityInformation (GET)`
- `ArticleTagAssociations/entityInformation/fields (GET)`

## Fields (4)

| Field | Type | Notes |
|---|---|---|
| `articleID` | integer | KnowledgeBaseArticles |
| `createDateTime` | datetime |  |
| `createdByResourceID` | integer | Resources |
| `tagID` | integer | Tags |

