# TicketNotes

Describes notes created by an Autotask user and associated with a Ticket entity. Autotask users manage ticket notes on Service Desk tickets. Users can add notes to a new or existing ticket.

- **Entity path:** `/atservicesrest/v1.0/TicketNotes`
- **Capabilities:** create ✓ · update ✓ · query ✓ · delete —

## Fields (11)

| Field | Type | Notes |
|---|---|---|
| `description` | string (32000) | When you use the API to update this field, the REST API will return the text-only version of its content. If you send the content back, the Rich Text and all images that it contains will be lost . You cannot use the API to create items that contain Rich Text, but you can add Rich Text later via a supported method. To learn more, refer to The Rich Text editor . |
| `title` | string (250) | Whether ticket note titles are required is determined by the Require titles on ticket notes Ticket Category setting. The API will respect this option and enforce it accordingly. |
| `createDateTime` | datetime |  |
| `createdByContactID` | integer | Contacts |
| `creatorResourceID` | integer | Resources |
| `impersonatorCreatorResourceID` | integer | Resources |
| `impersonatorUpdaterResourceID` | integer | Resources |
| `lastActivityDate` | datetime |  |
| `noteType` | integer |  |
| `publish` | integer |  |
| `ticketID` | integer | Tickets |

