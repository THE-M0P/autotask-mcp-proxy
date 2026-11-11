# ArticleNotes

This entity contains notes for Knowledgebase articles in Autotask.

- **Entity path:** `/atservicesrest/v1.0/ArticleNotes`
- **Capabilities:** create ✓ · update ✓ · query ✓ · delete ✓
- **Parent:** KnowledgeBaseArticles

## Access URLs

- `ArticleNotes/{id} (GET)`
- `ArticleNotes/query (GET, POST)`
- `ArticleNotes/query/count (GET, POST)`
- `ArticleNotes/entityInformation (GET)`
- `ArticleNotes/entityInformation/fields (GET)`

## Fields (7)

| Field | Type |
|---|---|
| `articleID` | integer |
| `createdByResourceID` | integer |
| `createdDateTime` | datetime |
| `description` | string (32000) |
| `lastModifiedByResourceID` | integer |
| `lastModifiedDateTime` | datetime |
| `title` | string (250) |

