# TicketChangeRequestApprovals

Describes a record of approval for a ticket change request. The change request approval process is part of the Autotask Change Management feature set. Change Management features are only available in the Autotask UI when the Change Management module is enabled.

- **Entity path:** `/atservicesrest/v1.0/TicketChangeRequestApprovals`
- **Capabilities:** create ✓ · update — · query ✓ · delete ✓

## Fields (6)

| Field | Type |
|---|---|
| `approveRejectDateTime` | datetime |
| `approveRejectNote` | string (2000) |
| `contactID` | integer |
| `isApproved` | boolean |
| `resourceID` | integer |
| `ticketID` | integer |

