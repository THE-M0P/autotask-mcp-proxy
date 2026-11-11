# TicketCategories

Describes a ticket category applied to tickets in Autotask to specify features and fields that appear on the ticket detail.

- **Entity path:** `/atservicesrest/v1.0/TicketCategories`
- **Capabilities:** create — · update ✓ · query ✓ · delete —
- **Parent:** None
- **Children:** TicketCategoryFieldDefaults

## Access URLs

- `TicketCategories/query (GET, POST)`
- `TicketCategories/{id} (GET)`
- `TicketCategories/query/count (GET, POST)`
- `TicketCategories (PUT, PATCH)`
- `TicketCategories/entityInformation (GET)`
- `TicketCategories/entityInformation/fields (GET)`
- `TicketCategories/entityInformation/userDefinedFields (GET)`

## Fields (6)

| Field | Type |
|---|---|
| `displayColorRGB` | integer |
| `isActive` | boolean |
| `isApiOnly` | boolean |
| `isGlobalDefault` | boolean |
| `name` | string (30) |
| `nickname` | string (3) |

