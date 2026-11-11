# TicketChecklistItems

Describes list items added to a check list on an Autotask ticket. A checklist is an optional feature on the ticket detail page. It displays a numbered list of items to complete as work is done. The check list is visible only when items are added to it. This entity allows check list items to be added, deleted, and updated via the API. A checklist can have no more than 40 checklist items.

- **Entity path:** `/atservicesrest/v1.0/TicketChecklistItems`
- **Capabilities:** create ✓ · update ✓ · query ✓ · delete ✓

## Fields (8)

| Field | Type | Notes |
|---|---|---|
| `completedByResourceID` | integer | Resources |
| `completedDateTime` | datetime |  |
| `isCompleted` | boolean |  |
| `isImportant` | boolean |  |
| `itemName` | string (600) |  |
| `knowledgebaseArticleID` | integer |  |
| `position` | integer |  |
| `ticketID` | integer | Tickets |

