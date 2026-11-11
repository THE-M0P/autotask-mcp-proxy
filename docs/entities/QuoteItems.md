# QuoteItems

Describes an Autotask Quote Item. Quote Items define a line item added to an Autotask Quote. Users can select quote items from labor rates (roles), products, services, material costs and expense lists, or manually enter one time quote items.

- **Entity path:** `/atservicesrest/v1.0/QuoteItems`
- **Capabilities:** create ✓ · update ✓ · query ✓ · delete ✓

## Fields (27)

| Field | Type | Notes |
|---|---|---|
| `averageCost` | decimal | This entity field will return no information if the user account making the query does not have sufficient privileges to view cost data in the Autotask UI. Additionally, if an update request does not have the necessary permissions, the API will ignore the call's values for the field even if they are blank or would be otherwise required. |
| `chargeID` | integer | Any BillingCode entity referenced by QuoteItem.chargeID must be of Type = Material Cost. |
| `expenseID` | integer | Any BillingCode referenced by QuoteItem.expenseID must be of Type = Expenses. |
| `highestCost` | decimal | This entity field will return no information if the user account making the query does not have sufficient privileges to view cost data in the Autotask UI. Additionally, if an update request does not have the necessary permissions, the API will ignore the call's values for the field even if they are blank or would be otherwise required. |
| `isTaxable` | boolean | isTaxable = True if the QuoteItem is assigned a taxCategoryID, the associated Quote is assigned a TaxGroupID (Tax Region ID), and totalEffectiveTax > 0. |
| `name` | string (1000) | Name is required and must be present except where QuoteItem.Type = Service or ServiceBundle (type 11 or 12). This field is conditionally read-only. It will act as read-only when the QuoteItem.Type is Service or Service Bundle (type 11 or 12). Any value that you supply during Create or Update requests will be ignored. The value from the Service or Service Bundle in Admin will persist. |
| `taxCategoryID` | integer | The taxCategoryID value for productID, chargeID, and expenseID is pulled from the associated billing code; shippingID or laborID use the value passed in. If there is no value for taxCategoryID, the item is not subject to tax. |
| `totalEffectiveTax` | decimal | totalEffectiveTax = the value of taxID where Tax.taxCategoryID = QuoteItem.taxCategoryID and Tax.taxRegionID = Quote.taxGroupID. |
| `type` |  | If type = 1 (Product) periodType value is required. The periodType CANNOT be semi-annual. Only month, quarter, year, and one-time period types are allowed for Product. If type = 2 (Cost), 3 (Labor), 4 (Expense), or 6 (Shipping), then periodType must = OneTime. If any other periodType value is supplied on create or update, it is ignored. If type = 10 (Discount) then You CANNOT HAVE a QuoteItem.lineDiscount value, that is, only QuoteItem.unitDiscount and QuoteItem.percentageDiscount are valid. If type = 11 (Service), then serviceID value is required. If no value is provided on create or update, unitCost will default to the unit cost set for that Service in the Admin module. If type = 12 (ServiceBundle), then serviceBundleID value is required. unitCost will default to the sum of the unit costs for all Services within that bundle. If type = 13 (ContractSetup), then QuoteItem.unitDiscount, QuoteItem.percentageDiscount, and QuoteItem.lineDiscount must be ZERO (or not present), that is, there are no discounts allowed on Setup Fees. |
| `unitCost` | decimal | QuoteItem.unitCost must be ZERO (or not present), that is, there are no costs allowed on Setup Fees. This entity field will return no information if the user account making the query does not have sufficient privileges to view cost data in the Autotask UI. Additionally, if an update request does not have the necessary permissions, the API will ignore the call's values for the field even if they are blank or would be otherwise required. |
| `description` | string (2000) |  |
| `isOptional` | boolean |  |
| `laborID` | integer |  |
| `lineDiscount` | decimal |  |
| `markupRate` | decimal |  |
| `percentageDiscount` | decimal |  |
| `periodType` | integer |  |
| `productID` | integer |  |
| `quantity` | decimal |  |
| `quoteID` | integer |  |
| `quoteItemType` | integer |  |
| `serviceBundleID` | integer |  |
| `serviceID` | integer |  |
| `shippingID` | integer |  |
| `sortOrderID` | integer |  |
| `unitDiscount` | decimal |  |
| `unitPrice` | decimal |  |

