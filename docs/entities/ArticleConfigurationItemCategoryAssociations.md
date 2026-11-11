# ArticleConfigurationItemCategoryAssociations

This entity contains existing associations between Knowledgebase articles and assets.

- **Entity path:** `/atservicesrest/v1.0/ArticleConfigurationItemCategoryAssociations`
- **Capabilities:** create ✓ · update — · query ✓ · delete ✓
- **Parent:** KnowledgeBaseArticles

## Access URLs

- `ArticleConfigurationItemCategoryAssociations/{id} (GET)`
- `ArticleConfigurationItemCategoryAssociations/query (GET, POST)`
- `ArticleConfigurationItemCategoryAssociations/query/count (GET, POST)`
- `ArticleConfigurationItemCategoryAssociations/entityInformation (GET)`
- `ArticleConfigurationItemCategoryAssociations/entityInformation/fields (GET)`

## Fields (2)

| Field | Type | Notes |
|---|---|---|
| `articleID` | integer | KnowledgeBaseArticles |
| `installedProductCategoryID` | integer | ConfigurationItemCategories |

