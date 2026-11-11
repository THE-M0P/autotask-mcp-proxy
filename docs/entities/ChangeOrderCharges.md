# ChangeOrderCharges

Describes a cost associated with a Change Order to an Autotask Project. A cost is a billing item for products or materials. Cost items can be billable or non-billable. Billable cost items appear in Approve & Post.

- **Entity path:** `/atservicesrest/v1.0/ChangeOrderCharges`
- **Capabilities:** create ✓ · update ✓ · query ✓ · delete ✓

## Fields (28)

| Field | Type | Notes |
|---|---|---|
| `billableAmount` | decimal | If the Multi-currency Installed Module is enabled, this field will return the relevant Customer Currency values instead of the Internal Currency values. |
| `billingCodeID` | integer | The billingCodeID must reference a Material Cost Code. ChangeOrderCharge must have either a productID or billingCodeID. If no billing code ID is supplied but a product ID is, then we default the billingCodeID value to the one associated with the product. |
| `extendedCost` | decimal | This entity field will return no information if the user account making the query does not have sufficient privileges to view cost data in the Autotask UI. Additionally, if an update request does not have the necessary permissions, the API will ignore the call's values for the field even if they are blank or would be otherwise required. |
| `internalCurrencyBillableAmount` |  | If the Multi-currency Installed Module is enabled, this field will return the saved Internal Currency values. |
| `internalCurrencyUnitPrice` |  | If the Multi-currency Installed Module is enabled, this field will return the saved Internal Currency values. |
| `productID` | integer | ProjectCharge must have either a productID or billingCodeID. If no allocation code id is supplied but a product id is, then we default the billingCodeID value to the one associated with the product. Cannot be changed during an update |
| `taskID` | integer | Cannot be changed during an update Must reference a Task and not an Issue Can only be associated with change order charges |
| `unitCost` | decimal | This entity field will return no information if the user account making the query does not have sufficient privileges to view cost data in the Autotask UI. Additionally, if an update request does not have the necessary permissions, the API will ignore the call's values for the field even if they are blank or would be otherwise required. |
| `changeOrderHours` | decimal |  |
| `chargeType` | integer |  |
| `contractServiceBundleID` | integer |  |
| `contractServiceID` | integer |  |
| `createDate` | datetime |  |
| `creatorResourceID` | integer |  |
| `datePurchased` | datetime |  |
| `description` | string (2000) |  |
| `internalPurchaseOrderNumber` | string (50) |  |
| `isBillableToCompany` | boolean |  |
| `isBilled` | boolean |  |
| `name` | string (100) |  |
| `notes` | string (2000) |  |
| `organizationalLevelAssociationID` | integer |  |
| `purchaseOrderNumber` | string (50) |  |
| `status` | integer |  |
| `statusLastModifiedBy` | integer |  |
| `statusLastModifiedDate` | datetime |  |
| `unitPrice` | decimal |  |
| `unitQuantity` | decimal |  |

