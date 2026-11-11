# DocumentChecklistItems

This entity contains checklist items related to documents in Autotask.

- **Entity path:** `/atservicesrest/v1.0/DocumentChecklistItems`
- **Capabilities:** create ✓ · update ✓ · query ✓ · delete ✓
- **Parent:** Documents

## Access URLs

- `DocumentChecklistItems/query (GET) DocumentChecklistItems/query (POST)`
- `DocumentChecklistItems/{id} (GET) DocumentChecklistItems/query/count (GET) DocumentChecklistItems/query/count (POST) DocumentChecklistItems/entityInformation (GET) DocumentChecklistItems/entityInformation/fields (GET) DocumentChecklistItems/entityInformation/userDefinedFields (GET)`

## Fields (4)

| Field | Type |
|---|---|
| `documentID` | integer |
| `isImportant` | boolean |
| `itemName` | string (600) |
| `position` | integer |

