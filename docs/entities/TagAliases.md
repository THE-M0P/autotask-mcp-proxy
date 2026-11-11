# TagAliases

This entity represents aliases for ticket and article tags in Autotask.

- **Entity path:** `/atservicesrest/v1.0/TagAliases`
- **Capabilities:** create ✓ · update — · query ✓ · delete ✓
- **Parent:** Tags

## Access URLs

- `TagAliases/{id} (GET)`
- `TagAliases/query (GET, POST)`
- `TagAliases/query/count (GET, POST)`
- `TagAliases/entityInformation (GET)`
- `TagAliases/entityInformation/fields (GET)`

## Fields (2)

| Field | Type | Notes |
|---|---|---|
| `alias` | string (50) |  |
| `tagID` | integer | Tags |

