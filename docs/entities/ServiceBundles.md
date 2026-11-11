# ServiceBundles

Describes a group of Service items that are priced and billed as one component of Recurring Service type contract. The group usually consists of Services that are performed together or at the same interval. The customer is billed for each service bundle associated with the contract instead of billing separately for each service in the bundle. The price for the bundle may offer a discount.

- **Entity path:** `/atservicesrest/v1.0/ServiceBundles`
- **Capabilities:** create ✓ · update ✓ · query ✓ · delete ✓

## Fields (22)

| Field | Type | Notes |
|---|---|---|
| `unitCost` | decimal | This entity field will return no information if the user account making the query does not have sufficient privileges to view cost data in the Autotask UI. Additionally, if an update request does not have the necessary permissions, the API will ignore the call's values for the field even if they are blank or would be otherwise required. |
| `billingCodeID` | integer |  |
| `catalogNumberPartNumber` | string (50) |  |
| `createDate` | datetime |  |
| `creatorResourceID` | integer |  |
| `description` | string (200) |  |
| `externalID` | string (50) |  |
| `internalID` | string (50) |  |
| `invoiceDescription` | string (1000) |  |
| `isActive` | boolean |  |
| `lastModifiedDate` | datetime |  |
| `manufacturerServiceProvider` | string (100) |  |
| `manufacturerServiceProviderProductNumber` | string (50) |  |
| `name` | string (150) |  |
| `percentageDiscount` | decimal |  |
| `periodType` | integer |  |
| `serviceLevelAgreementID` | long |  |
| `sku` | string (50) |  |
| `unitDiscount` | decimal |  |
| `unitPrice` | decimal |  |
| `updateResourceID` | integer |  |
| `url` | string (500) |  |

