# Services

Describes a deliverable item that represents a pre-defined unit of work performed for a set price, for example, a "Disk Backup" or "Virus Check" performed for one computer. Services are billed at regular intervals. In Autotask, a Service can be added as a component of a recurring service type contract. The customer is billed for each unit of service associated with the contract instead of billing separately for labor and parts each time the service is provided.

- **Entity path:** `/atservicesrest/v1.0/Services`
- **Capabilities:** create ✓ · update ✓ · query ✓ · delete —

## Fields (22)

| Field | Type | Notes |
|---|---|---|
| `unitCost` | decimal | This entity field will return no information if the user account making the query does not have sufficient privileges to view cost data in the Autotask UI. Additionally, if an update request does not have the necessary permissions, the API will ignore the call's values for the field even if they are blank or would be otherwise required. |
| `billingCodeID` | integer |  |
| `catalogNumberPartNumber` | string (50) |  |
| `createDate` | datetime |  |
| `creatorResourceID` | integer |  |
| `description` | string (400) |  |
| `externalID` | string (50) |  |
| `internalID` | string (50) |  |
| `invoiceDescription` | string (1000) |  |
| `isActive` | boolean |  |
| `lastModifiedDate` | datetime |  |
| `manufacturerServiceProvider` | string (100) |  |
| `manufacturerServiceProviderProductNumber` | string (50) |  |
| `markupRate` | decimal |  |
| `name` | string (150) |  |
| `periodType` | integer |  |
| `serviceLevelAgreementID` | long |  |
| `sku` | string (50) |  |
| `unitPrice` | decimal |  |
| `updateResourceID` | integer |  |
| `url` | string (500) |  |
| `vendorCompanyID` | integer |  |

