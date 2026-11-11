# TicketAdditionalConfigurationItems

Describes one or more Autotask Assets (previously known as Configuration Items) assigned to a Ticket beyond the primary asset(ticket.configurationItemID). Assets are products that are associated with a Company entity. Autotask users manage assets through the CRM Module ( CRM > Assets , or CRM > Companies > Assets tab). A ticket can have additional assets even if there is no primary asset.

- **Entity path:** `/atservicesrest/v1.0/TicketAdditionalConfigurationItems`
- **Capabilities:** create ✓ · update — · query ✓ · delete ✓

## Fields (2)

| Field | Type | Notes |
|---|---|---|
| `configurationItemID` | integer | ConfigurationItems |
| `ticketID` | integer | Tickets |

