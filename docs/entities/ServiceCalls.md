# ServiceCalls

ServiceCalls entity relationships The REST API presents five service call related entities: ServiceCalls, ServiceCallTickets, ServiceCallTasks, ServiceCallTicketResources, and ServiceCallTaskResources. The following diagram illustrates the relationship between these entities.

- **Entity path:** `/atservicesrest/v1.0/ServiceCalls`
- **Capabilities:** create ✓ · update ✓ · query ✓ · delete ✓
- **Parent:** None
- **Children:** ServiceCallTasks, ServiceCallTickets

## Access URLs

- `ServiceCalls/query (GET, POST)`
- `ServiceCalls/{id} (GET, DELETE)`
- `ServiceCalls/query/count (GET, POST)`
- `ServiceCalls (PUT, POST, PATCH)`
- `ServiceCalls/entityInformation (GET)`
- `ServiceCalls/entityInformation/fields (GET)`
- `ServiceCalls/entityInformation/userDefinedFields (GET)`

## Fields (15)

| Field | Type |
|---|---|
| `cancelationNoticeHours` | decimal |
| `canceledByResourceID` | integer |
| `canceledDateTime` | datetime |
| `companyID` | integer |
| `companylocationID` | integer |
| `createDateTime` | datetime |
| `creatorResourceID` | integer |
| `description` | string (2000) |
| `duration` | decimal |
| `endDateTime` | datetime |
| `impersonatorCreatorResourceID` | integer |
| `isComplete` | short |
| `lastModifiedDateTime` | datetime |
| `startDateTime` | datetime |
| `status` | integer |

