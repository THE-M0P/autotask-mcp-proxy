# DocumentToArticleAssociations

This entity represents documents associated with Knowledgebase articles in Autotask.

- **Entity path:** `/atservicesrest/v1.0/DocumentArticleAssociations`
- **Capabilities:** create ✓ · update — · query ✓ · delete ✓
- **Parent:** Documents

## Access URLs

- `DocumentArticleAssociations/{id} (GET)`
- `DocumentArticleAssociations/query (GET, POST)`
- `DocumentArticleAssociations/query/count (GET, POST)`
- `DocumentArticleAssociations/entityInformation (GET)`
- `DocumentArticleAssociations/entityInformation/fields (GET)`

## Fields (2)

| Field | Type | Notes |
|---|---|---|
| `associatedArticleID` | integer | KnowledgeBaseArticles |
| `documentID` | integer | Documents |

