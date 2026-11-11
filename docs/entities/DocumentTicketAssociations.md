# DocumentTicketAssociations

This entity contains ticket associations for documents in Autotask.

- **Entity path:** `/atservicesrest/v1.0/DocumentTicketAssociations`
- **Capabilities:** create ✓ · update — · query ✓ · delete ✓
- **Parent:** Documents

## Access URLs

- `DocumentTicketAssociations/{id} (GET)`
- `DocumentTicketAssociations/query (GET, POST)`
- `DocumentTicketAssociations/query/count (GET, POST)`
- `DocumentTicketAssociations/entityInformation (GET)`
- `DocumentTicketAssociations/entityInformation/fields (GET)`

## Fields (2)

| Field | Type | Notes |
|---|---|---|
| `documentID` | integer | Documents |
| `tagID` | integer | Tags |

