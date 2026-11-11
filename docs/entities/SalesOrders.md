# SalesOrders

Describes an Autotask Sales Order. In Autotask, a sales order is associated with an Opportunity and provides an option to track cost items generated from an Autotask Quote.

- **Entity path:** `/atservicesrest/v1.0/SalesOrders`
- **Capabilities:** create — · update ✓ · query ✓ · delete —

## Fields (24)

| Field | Type | Notes |
|---|---|---|
| `additionalBillToAddressInformation` | string (100) |  |
| `additionalShipToAddressInformation` | string (100) |  |
| `billingAddress1` | string (150) |  |
| `billingAddress2` | string (150) |  |
| `billToCity` | string (50) |  |
| `billToCountryID` | integer | Countries |
| `billToPostalCode` | string (50) |  |
| `billToState` | string (50) |  |
| `companyID` | integer | Companies |
| `contactID` | integer | Contacts |
| `impersonatorCreatorResourceID` | integer | Resources |
| `opportunityID` | integer | Opportunities |
| `organizationalLevelAssociationID` | integer | OrganizationalLevelAssociations |
| `ownerResourceID` | integer | Resources |
| `promisedFulfillmentDate` | datetime |  |
| `salesOrderDate` | datetime |  |
| `shipToAddress1` | string (150) |  |
| `shipToAddress2` | string (150) |  |
| `shipToCity` | string (50) |  |
| `shipToCountryID` | integer | Countries |
| `shipToPostalCode` | string (50) |  |
| `shipToState` | string (50) |  |
| `status` | integer |  |
| `title` | string (128) |  |

