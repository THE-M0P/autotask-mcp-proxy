# ArticleToArticleAssociations

This entity represents associations between Knowledgebase articles within Autotask.

- **Entity path:** `/atservicesrest/v1.0/ArticleToArticleAssociations`
- **Capabilities:** create ✓ · update — · query ✓ · delete ✓
- **Parent:** KnowledgeBaseArticles

## Access URLs

- `ArticleToArticleAssociations/{id} (GET)`
- `ArticleToArticleAssociations/query (GET, POST)`
- `ArticleToArticleAssociations/query/count (GET, POST)`
- `ArticleToArticleAssociations/entityInformation (GET)`
- `ArticleToArticleAssociations/entityInformation/fields (GET)`

## Fields (2)

| Field | Type | Notes |
|---|---|---|
| `articleID` | integer | KnowledgeBaseArticles |
| `associatedArticleID` | integer | KnowledgeBaseArticles |

