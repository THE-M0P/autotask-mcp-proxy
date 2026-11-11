# SalesOrderAttachments

This entity contains the attachments for the SalesOrders entity. For more information about attachments, including call syntax, thresholds and limits, and a full list of attachment entities, refer to Working with attachments in the REST API .

- **Entity path:** `/atservicesrest/v1.0/SalesOrderAttachments`
- **Capabilities:** create ✓ · update — · query ✓ · delete ✓
- **Parent:** SalesOrders

## Access URLs

- `SalesOrders/query (GET, POST)`
- `SalesOrders/{id} (GET)`
- `SalesOrders/query/count (GET, POST) SalesOrders (PUT, PATCH) SalesOrders/entityInformation (GET) SalesOrders/entityInformation/fields (GET)`
- `SalesOrders/entityInformation/userDefinedFields (GET)`

## Fields (12)

| Field | Type |
|---|---|
| `attachDate` | datetime |
| `attachedByContactID` | long |
| `attachedByResourceID` | long |
| `attachmentType` | string (30) |
| `contentType` | string (100) |
| `fullPath` | string (255) |
| `impersonatorCreatorResourceID` | integer |
| `opportunityID` | long |
| `parentID` | long |
| `publish` | integer |
| `salesOrderID` | integer |
| `title` | string (255) |

