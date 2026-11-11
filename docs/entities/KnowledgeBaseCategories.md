# KnowledgeBaseCategories

This entity contains the categories that hold Knowledgebase articles in Autotask.

- **Entity path:** `/atservicesrest/v1.0/KnowledgeBaseCategories`
- **Capabilities:** create ✓ · update ✓ · query ✓ · delete ✓
- **Parent:** None
- **Children:** KnowledgeBaseArticles

## Access URLs

- `KnowledgeBaseCategories/{id} (GET, DELETE)`
- `KnowledgeBaseCategories/query (GET, POST)`
- `KnowledgeBaseCategories/query/count (GET, POST)`
- `KnowledgeBaseCategories/ (GET, POST, PUT, PATCH)`
- `KnowledgeBaseCategories/entityInformation (GET)`
- `KnowledgeBaseCategories/entityInformation/fields (GET)`

## Fields (3)

| Field | Type | Notes |
|---|---|---|
| `description` | string (1000) |  |
| `name` | string (50) |  |
| `parentCategoryID` | integer | KnowledgeBaseCategories |

