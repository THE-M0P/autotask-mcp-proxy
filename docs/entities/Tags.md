# Tags

This entity represents ticket and article tags in Autotask.

- **Entity path:** `/atservicesrest/v1.0/Tags`
- **Capabilities:** create ✓ · update ✓ · query ✓ · delete ✓
- **Parent:** None
- **Children:** TagAliases

## Access URLs

- `Tags/{id} (GET, DELETE)`
- `Tags/query (GET, POST)`
- `Tags/query/count (GET, POST)`
- `Tags/ (POST, PUT, PATCH)`
- `Tags/entityInformation (GET)`
- `Tags/entityInformation/fields (GET)`

## Fields (7)

| Field | Type | Notes |
|---|---|---|
| `createDateTime` | datetime |  |
| `isActive` | boolean |  |
| `isExcludedFromAutomaticTagging` | boolean |  |
| `isSystem` | boolean |  |
| `label` | string (50) |  |
| `lastModifiedDateTime` | datetime |  |
| `tagGroupID` | integer | TagGroups |

