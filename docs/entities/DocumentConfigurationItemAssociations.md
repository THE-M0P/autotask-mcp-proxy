# DocumentConfigurationItemAssociations

This entity represents associations between assets and documents in Autotask.

- **Entity path:** `/atservicesrest/v1.0/DocumentConfigurationItemAssociations`
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
| `documentID` | integer | Documents |
| `installedProductID` | integer | ConfigurationItems |

