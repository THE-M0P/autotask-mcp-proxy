# CompanyCategories

This entity represents company (account) categories in Autotask. A company's category determines the layout of the entity's pages, which fields are visible, and which picklist options are available.

- **Entity path:** `/atservicesrest/v1.0/CompanyCategories`
- **Capabilities:** create — · update ✓ · query ✓ · delete —
- **Parent:** None

## Access URLs

- `CompanyCategories/{id} (GET, PUT, PATCH)`
- `CompanyCategories/query (GET, POST)`
- `CompanyCategories/query/count (GET, POST)`
- `CompanyCategories/entityInformation (GET)`
- `CompanyCategories/entityInformation/fields (GET)`

## Fields (6)

| Field | Type |
|---|---|
| `displayColorRGB` | integer |
| `isActive` | boolean |
| `isApiOnly` | boolean |
| `isGlobalDefault` | boolean |
| `name` | string (30) |
| `nickname` | (3) |

