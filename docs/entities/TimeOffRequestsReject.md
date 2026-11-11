# TimeOffRequestsReject

An API user has the ability to reject time off requests. This entity describes the rejection action of a specific time off request (vacation, sick time, floating holiday, personal time) submitted by an Autotask resource.

- **Capabilities:** create ✓ · update — · query — · delete —

## Fields (2)

| Field | Type | Notes |
|---|---|---|
| `timeOffRequestID` | integer | The ID of the time off request being rejected |
| `reason` | string (500) | The reason the time off request was rejected |

