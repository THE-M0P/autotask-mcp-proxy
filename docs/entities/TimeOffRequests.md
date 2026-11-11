# TimeOffRequests

Autotask includes a time off policy management feature that enables your company to track employee time off benefits. This entity describes a time off request (vacation, sick time, floating holiday, personal time) for an Autotask resource.

- **Capabilities:** create ✓ · update ✓ · query ✓ · delete —

## Fields (15)

| Field | Type | Notes |
|---|---|---|
| `approvedDateTime` | datetime | The date and time the time off request was approved |
| `approveRejectResourceID` | integer | The resource ID of the timesheet approver |
| `createDateTime` | datetime | The date and time the time off request was created |
| `createdByResourceID` | integer | The resource ID of the resource who created the request, either the resource creating a proxy time off entry or the resource requesting time off |
| `endTime` | datetime | Time off is tracked in decimal hours (example: 1.25 hours). Start and end times will be ignored. |
| `hours` | decimal | The number of hours requested in the time off request, entered in decimal hours (example: 1.25 hours). Valid ranges are -24 to 24 hours. Hours are not computed from start and end times. |
| `lastApprovedLevel` | integer | Autotask supports up to three levels of timesheet approvers. A request is approved if the highest assigned level approver has given approval. The API user can query the last approval level to determine the next approval level and the associated approvers they need to impersonate. |
| `lastModifiedByResourceID` | integer | The resource ID of the timesheet approver or the API user who last modified the time off request |
| `lastModifiedDateTime` | datetime | The date and time the request was last modified |
| `reason` | string (500) | The reason given by the timesheet approver or the API user impersonating them for rejecting the time off request |
| `requestDate` | datetime | The date time off is requested for. Each request can only be for a single day. |
| `resourceID` | integer | The ID of the resource who would like to take time off |
| `startTime` | datetime | Time off is tracked in decimal hours (example: 1.25 hours). Start and end times will be ignored. |
| `status` | integer | On Create, the only status value that the API will accept is Submitted . On Update, the API will only allow a status change to Canceled . Queries will include canceled requests unless you explicitly filter them out. |
| `timeOffRequestType` | integer | The API will only display time off request types that have the Display Code for > Time Off Requests option enabled in the UI. Refer to Internal Time Codes . |

