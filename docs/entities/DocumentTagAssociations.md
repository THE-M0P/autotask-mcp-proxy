# DocumentTagAssociations

This entity contains tag associations for documents in Autotask.

- **Entity path:** `/atservicesrest/v1.0/DocumentTagAssociations`
- **Capabilities:** create ✓ · update — · query ✓ · delete ✓
- **Parent:** Documents

## Access URLs

- `DocumentTagAssociations/{id} (GET)`
- `DocumentTagAssociations/query (GET, POST)`
- `DocumentTagAssociations/query/count (GET, POST)`
- `DocumentTagAssociations/entityInformation (GET)`
- `DocumentTagAssociations/entityInformation/fields (GET)`

## Fields (2)

| Field | Type | Notes |
|---|---|---|
| `documentID` | integer | Documents |
| `tagID` | integer | Tags |

