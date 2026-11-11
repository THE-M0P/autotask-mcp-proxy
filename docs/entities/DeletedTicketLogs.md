# DeletedTicketLogs

This entity contains the records for the Deleted Ticket log located in the Autotask application at Left Navigation Menu > Admin > Features and Settings > Service Desk (Tickets) > Deleted Ticket Log . The Deleted Ticket log enables you to view a listing of tickets that have been deleted from your system.

- **Entity path:** `/atservicesrest/v1.0/DeletedTicketLogs`
- **Capabilities:** create — · update — · query ✓ · delete —

## Fields (5)

| Field | Type |
|---|---|
| `deletedByResourceID` | integer |
| `deletedDateTime` | datetime |
| `ticketID` | integer |
| `ticketNumber` | string (50) |
| `ticketTitle` | string (255) |

