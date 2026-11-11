# DeletedTicketActivityLogs

This entity contains the records for the Deleted Ticket Activity journal located in the Autotask application at Left Navigation Menu > Admin > Features and Settings > Projects & Tasks > Deleted Task Activity Log . The Deleted Ticket Activity log provides a list of ticket time entries, notes, and attachments that were deleted from your system.

- **Entity path:** `/atservicesrest/v1.0/DeletedTicketActivityLogs`
- **Capabilities:** create — · update — · query ✓ · delete —

## Fields (11)

| Field | Type |
|---|---|
| `activityDateTime` | datetime |
| `createdByResourceID` | integer |
| `deletedByResourceID` | integer |
| `deletedDateTime` | datetime |
| `endDateTime` | datetime |
| `hoursWorked` | decimal |
| `noteOrAttachmentTitle` | string (255) |
| `startDateTime` | datetime |
| `ticketID` | integer |
| `ticketNumber` | string (50) |
| `typeID` | integer |

