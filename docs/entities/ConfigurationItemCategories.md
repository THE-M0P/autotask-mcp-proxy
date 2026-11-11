# ConfigurationItemCategories

Describes an asset category.

- **Entity path:** `/atservicesrest/v1.0/ConfigurationItemCategories`
- **Capabilities:** create ✓ · update ✓ · query ✓ · delete —
- **Parent:** None
- **Children:** ConfigurationItemCategoryUdfAssociations

## Access URLs

- `ConfigurationItemCategories/query (GET, POST)`
- `ConfigurationItemCategories/{id} (GET)`
- `ConfigurationItemCategories/query/count (GET, POST)`
- `ConfigurationItemCategories (PUT, POST, PATCH)`
- `ConfigurationItemCategories/entityInformation (GET)`
- `ConfigurationItemCategories/entityInformation/fields (GET)`
- `ConfigurationItemCategories/entityInformation/userDefinedFields (GET)`

## Fields (6)

| Field | Type | Notes |
|---|---|---|
| `displayColorRGB` | integer | Asset categories have colored badges. The color is selected when the category is created or edited. The integers on the picklist represent the available colors. There is no impact other than the selection of the badge color. |
| `isActive` | boolean |  |
| `isClientPortalDefault` | boolean |  |
| `isGlobalDefault` | boolean |  |
| `name` | string (100) |  |
| `nickname` | string (3) |  |

