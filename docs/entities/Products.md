# Products

Describes an instance of hardware, software, or a material item in Autotask that a company sells or supports for customers. You can "install" Products to customer Companies and once installed, users can support Products through Service Desk tickets, bill for products, and manage the products through the customer Company. With the Autotask Inventory module, Products can be added to inventory as Inventory Items.

- **Entity path:** `/atservicesrest/v1.0/Products`
- **Capabilities:** create ✓ · update ✓ · query ✓ · delete —
- **Parent:** None
- **Children:** ProductNotes, ProductTiers, ProductVendors

## Access URLs

- `Products/query (GET, POST)`
- `Products/{id} (GET)`
- `Products/query/count (GET, POST)`
- `Products (PUT, POST, PATCH)`
- `Products/entityInformation (GET)`
- `Products/entityInformation/fields (GET)`
- `Products/entityInformation/userDefinedFields (GET)`

## Fields (27)

| Field | Type | Notes |
|---|---|---|
| `billingType` | integer | If no value is provided, this field will default to Standard. You cannot create more than 100 products with a billing type of "Per Contact" or 100 products with a billing type of "Per Asset." periodType must be Monthly if supplying a billingType not equal to Standard. priceCostMethod must be equal to Standard (Flat) if the billingType is equal to Standard. |
| `doesNotRequireProcurement` | boolean | The default value for doesNotRequireProcurement = False. doesNotRequireProcurement must be equal to true if billingType is not equal to standard. |
| `isSerialized` | boolean | isSerialized must be equal to false if billingType is not equal to Standard. The API will return an error if it receives a request to change this value when there is existing inventory. |
| `priceCostMethod` | integer | If no value is provided, this field will default to Standard. If the product's Price/Cost Method is Standard, Product Tiers cannot be created. |
| `productBillingCodeID` | integer | This field has been deprecated. chargeBillingCodeID needs to be used in place of productBillingCodeID. |
| `unitCost` | decimal | This entity field will return no information if the user account making the query does not have sufficient privileges to view cost data in the Autotask UI. Additionally, if an update request does not have the necessary permissions, the API will ignore the call's values for the field even if they are blank or would be otherwise required. |
| `chargeBillingCodeID` | integer |  |
| `createdByResourceID` | integer |  |
| `createdTime` | datetime |  |
| `defaultInstalledProductCategoryID` | integer |  |
| `defaultVendorID` | integer |  |
| `description` | string (8000) |  |
| `externalProductID` | string (50) |  |
| `impersonatorCreatorResourceID` | integer |  |
| `isActive` | boolean |  |
| `isEligibleForRma` | boolean |  |
| `link` | string (500) |  |
| `manufacturerName` | string (100) |  |
| `manufacturerProductName` | string (50) |  |
| `markupRate` | decimal |  |
| `mSRP` | decimal |  |
| `name` | string (1000) |  |
| `periodType` | integer |  |
| `productCategory` | integer |  |
| `sKU` | string (50) |  |
| `unitPrice` | decimal |  |
| `vendorProductNumber` | string (50) |  |

