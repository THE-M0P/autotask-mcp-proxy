# TicketTagAssociations

This entity manages the tags associated with tickets in Autotask.

- **Entity path:** `/atservicesrest/v1.0/TicketTagAssociations`
- **Capabilities:** create ✓ · update — · query ✓ · delete ✓
- **Parent:** Tickets

## Access URLs

- `TicketTagAssociations/{id} (GET)`
- `TicketTagAssociations/query (GET, POST)`
- `TicketTagAssociations/query/count (GET, POST)`
- `TicketTagAssociations/entityInformation (GET)`
- `TicketTagAssociations/entityInformation/fields (GET)`

## Fields (2)

| Field | Type | Notes |
|---|---|---|
| `tagID` | integer | Tags |
| `ticketID` | integer | Tickets |

