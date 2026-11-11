# TicketAdditionalContacts

Describes one or more account contacts assigned to a Ticket, other than the Ticket Contact (Ticket.contactID). Contacts must be associated with the ticket's Company (ticket.companyID). A ticket can have additional contacts even if there is no Ticket Contact.

- **Entity path:** `/atservicesrest/v1.0/TicketAdditionalContacts`
- **Capabilities:** create ✓ · update — · query ✓ · delete ✓

## Fields (2)

| Field | Type | Notes |
|---|---|---|
| `contactID` | integer | Contacts |
| `ticketID` | integer | Tickets |

