# TicketNoteAttachments

This entity contains the attachments for the TicketNotes entity. For more information about attachments, including call syntax, thresholds and limits, and a full list of attachment entities, refer to Working with attachments in the REST API .

- **Entity path:** `/atservicesrest/v1.0/TicketNoteAttachments`
- **Capabilities:** create ✓ · update — · query ✓ · delete ✓
- **Parent:** TicketNotes

## Access URLs

- `TicketNoteAttachments/entityInformation (GET)`
- `TicketNoteAttachments/entityInformation/fields (GET)`
- `TicketNoteAttachments/query (GET, POST)`
- `TicketNoteAttachments/{id} (GET)`
- `TicketNoteAttachments/query/count (GET, POST)`

## Fields (13)

| Field | Type |
|---|---|
| `attachDate` | datetime |
| `attachedByContactID` | long |
| `attachedByResourceID` | long |
| `attachmentType` | string (30) |
| `contentType` | string (100) |
| `fullPath` | string (255) |
| `impersonatorCreatorResourceID` | integer |
| `opportunityID` | long |
| `parentID` | long |
| `publish` | integer |
| `ticketID` | integer |
| `ticketNoteID` | integer |
| `title` | string (255) |

