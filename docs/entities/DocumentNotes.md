# DocumentNotes

This entity contains notes for documents in Autotask.

- **Entity path:** `/atservicesrest/v1.0/DocumentNotes`
- **Capabilities:** create ✓ · update ✓ · query ✓ · delete ✓
- **Parent:** Documents

## Access URLs

- `DocumentNotes/{id} (GET)`
- `DocumentNotes/query (GET, POST)`
- `DocumentNotes/query/count (GET, POST)`
- `DocumentNotes/entityInformation (GET)`
- `DocumentNotes/entityInformation/fields (GET)`

## Fields (7)

| Field | Type | Notes |
|---|---|---|
| `createdByResourceID` | integer | Resources |
| `createdDateTime` | datetime |  |
| `description` | string (32000) |  |
| `documentID` | integer | Documents |
| `lastModifiedByResourceID` | integer | Resources |
| `lastModifiedDateTime` | datetime |  |
| `title` | string (250) |  |

