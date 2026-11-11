# ConfigurationItemRelatedItems

This entity enables you to view, add, and remove related child or parent Assets in Autotask.

- **Entity path:** `/atservicesrest/v1.0/ConfigurationItemRelatedItems`
- **Capabilities:** create ✓ · update — · query ✓ · delete ✓
- **Parent:** ConfigurationItems

## Access URLs

- `ConfigurationItemRelatedItems/{id} (GET)`
- `ConfigurationItemRelatedItems/query (GET, POST)`
- `ConfigurationItemRelatedItems/query/count (GET, POST)`
- `ConfigurationItemRelatedItems/entityInformation (GET)`
- `ConfigurationItemRelatedItems/entityInformation/fields (GET)`
- `ConfigurationItems ConfigurationItems/{parentId}/RelatedItems(GET, POST)`
- `ConfigurationItems/{parentId}/RelatedItems/{id} (GET, DELETE)`
- `ConfigurationItems/{parentId}/RelatedItems/entityInformation (GET)`
- `ConfigurationItems/{parentId}/RelatedItems/entityInformation/fields (GET)`

## Fields (3)

| Field | Type | Notes |
|---|---|---|
| `relatedConfigurationItemID` | integer | must belong to an active account. must be active. |
| `configurationItemID` | integer | configurationItemID & RelatedConfigurationItemID cannot match |
| `relationship` | integer |  |

