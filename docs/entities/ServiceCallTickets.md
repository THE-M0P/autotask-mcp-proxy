# ServiceCallTickets

NOTE This entity works in combination with the Service Call and Service Call-related entities. Before working with this entity, review the topic ServiceCall .

- **Entity path:** `/atservicesrest/v1.0/ServiceCallTickets`
- **Capabilities:** create ✓ · update — · query ✓ · delete ✓
- **Parent:** ServiceCalls

## Access URLs

- `ServiceCallTickets/query (GET, POST)`
- `ServiceCallTickets/{id} (GET)`
- `ServiceCallTickets/query/count (GET, POST)`
- `ServiceCallTickets/entityInformation (GET)`
- `ServiceCallTickets/entityInformation/fields (GET)`
- `ServiceCallTickets/entityInformation/userDefinedFields (GET)`

## Fields (2)

| Field | Type | Notes |
|---|---|---|
| `serviceCallID` | integer | ServiceCalls |
| `ticketID` | integer | Tickets |

