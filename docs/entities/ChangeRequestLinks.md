# ChangeRequestLinks

Describes the associations between Change Request tickets and both Incidents and Problems. Change request tickets are part of the Autotask Change Management feature set. Change management features are only available in the Autotask UI when the Change Management module is enabled.

- **Entity path:** `/atservicesrest/v1.0/ChangeRequestLinks`
- **Capabilities:** create ✓ · update — · query ✓ · delete ✓

## Fields (2)

| Field | Type | Notes |
|---|---|---|
| `changeRequestTicketID` | integer | changeRequestTicketID must be a valid ID for a ticket with ticketType = Change Request. |
| `problemOrIncidentTicketID` | integer | problemOrIncidentTicketID must be a valid ID for a ticket with ticketType = Problem ticket or Incident ticket |

