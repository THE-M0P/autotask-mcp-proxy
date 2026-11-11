# DocumentConfigurationItemCategoryAssociations

This entity represents associations between asset categories and documents in Autotask.

- **Entity path:** `/atservicesrest/v1.0/DocumentConfigurationItemCategoryAssociations`
- **Capabilities:** create ✓ · update — · query ✓ · delete ✓
- **Parent:** Documents

## Access URLs

- `DocumentConfigurationItemCategoryAssociations/{id} (GET)`
- `DocumentConfigurationItemCategoryAssociations/query (GET, POST) DocumentConfigurationItemCategoryAssociations/query/count (GET, POST)`
- `DocumentConfigurationItemCategoryAssociations/entityInformation (GET)`
- `DocumentConfigurationItemCategoryAssociations/entityInformation/fields (GET)`

## Fields (2)

| Field | Type | Notes |
|---|---|---|
| `documentID` | integer | Documents |
| `installedProductID` | integer | ConfigurationItems |

