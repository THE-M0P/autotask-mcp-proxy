# DocumentCategories

This entity represents the categories for documents in Autotask.

- **Entity path:** `/atservicesrest/v1.0/DocumentCategories`
- **Capabilities:** create ✓ · update ✓ · query ✓ · delete ✓
- **Parent:** None
- **Children:** Documents

## Access URLs

- `DocumentCategories/{id} (GET, DELETE)`
- `DocumentCategories/query (GET, POST)`
- `DocumentCategories/query/count (GET, POST)`
- `DocumentCategories/ (POST, PUT, PATCH)`
- `DocumentCategories/entityInformation (GET)`
- `DocumentCategories/entityInformation/fields (GET)`

## Fields (3)

| Field | Type |
|---|---|
| `description` | string (1000) |
| `name` | string (50) |
| `parentCategoryID` | integer |

