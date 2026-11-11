# TicketHistory

Describes the Ticket History, which tracks changes to the fields of the ticket entity, as well as the fields of any Service Level Agreement associated with the ticket. For the specific actions tracked in the Ticket History entity, refer to View the Ticket History .

- **Entity path:** `/atservicesrest/v1.0/TicketHistory`
- **Capabilities:** create — · update — · query ✓ · delete —

## Fields (5)

| Field | Type |
|---|---|
| `action` | string (100) |
| `date` | datetime |
| `detail` | string (1800) |
| `resourceID` | integer |
| `ticketID` | integer |

