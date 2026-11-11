# ServiceLevelAgreementResults

Describes time and completion data related to service level events tracked for a service level agreement associated with a ticket. Service level agreements track preset goals and the resources associated with those goals to provide information on the company's success in responding to customer's issues.

- **Entity path:** `/atservicesrest/v1.0/ServiceLevelAgreementResults`
- **Capabilities:** create — · update — · query ✓ · delete —
- **Parent:** ServiceLevelAgreements

## Access URLs

- `ServiceLevelAgreementResults/query (GET, POST)`
- `ServiceLevelAgreementResults/{id} (GET)`
- `ServiceLevelAgreementResults/query/count (GET, POST)`
- `ServiceLevelAgreementResults/entityInformation (GET)`
- `ServiceLevelAgreementResults/entityInformation/fields (GET)`
- `ServiceLevelAgreementResults/entityInformation/userDefinedFields (GET)`

## Fields (14)

| Field | Type | Notes |
|---|---|---|
| `firstResponseElapsedHours` | decimal |  |
| `firstResponseInitiatingResourceID` | integer | Resources |
| `firstResponseResourceID` | integer | Resources |
| `isFirstResponseMet` | boolean |  |
| `isResolutionMet` | boolean |  |
| `isResolutionPlanMet` | boolean |  |
| `resolutionElapsedHours` | decimal |  |
| `resolutionPlanElapsedHours` | decimal |  |
| `resolutionPlanResourceID` | integer | Resources |
| `resolutionResourceID` | integer | Resources |
| `resourceID` | integer |  |
| `serviceCallTicketID` | integer | Resources |
| `serviceLevelAgreementName` | string (100) |  |
| `ticketID` | integer | Tickets |

