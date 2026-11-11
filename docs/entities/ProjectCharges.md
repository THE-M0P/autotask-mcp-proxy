# ProjectCharges

Describes a cost associated with an Autotask Project. A cost is a billing item for products or materials. Cost items can be billable or non-billable. Billable cost items appear in Approve and Post.

- **Entity path:** `/atservicesrest/v1.0/ProjectCharges`
- **Capabilities:** create ✓ · update ✓ · query ✓ · delete ✓

## Fields (29)

| Field | Type | Notes |
|---|---|---|
| `billableAmount` | decimal | billableAmount = unitQuantity * unitPrice. If unitPrice is Null, the value will be set to the value from the Material Cost Code associated with billingCodeID. If the Multi-currency Installed Module is enabled, this field will return the relevant Customer Currency values instead of the Internal Currency values. The API will round the unitQuantity, unitCost, and unitPrice values to 4 decimal places prior to any calculations for the total price or extended cost. |
| `billingCodeID` | long | billingCodeID must reference a Material Cost Code type allocation code. On create or update when billingCodeID has changed and is not Null, and if no value is supplied for the unitCost and unitPrice fields, then those fields take their values from the Material Cost Code associated with billingCodeID. ProjectCharge must have either a productID or billingCodeID. |
| `extendedCost` | decimal | extendedCost = unitQuantity * unitCost. If unitCost is Null, the value will be set to the value from the Material Cost Code associated with billingCodeID. This entity field will return no information if the user account making the query does not have sufficient privileges to view cost data in the Autotask UI. Additionally, if an update request does not have the necessary permissions, the API will ignore the call's values for the field even if they are blank or would be otherwise required. The API will round the unitQuantity, unitCost, and unitPrice values to 4 decimal places prior to any calculations for the total price or extended cost. |
| `internalCurrencyBillableAmount` |  | If the Multi-currency Installed Module is enabled, this field will return the saved Internal Currency values. |
| `internalCurrencyUnitPrice` |  | If the Multi-currency Installed Module is enabled, this field will return the saved Internal Currency values. |
| `isBillableToCompany` | boolean | If no value is supplied for isBillableToCompany, the value is set to True. |
| `isBilled` | boolean | update and delete are allowed only when isBilled = False (cost has not been approved and posted). When isBilled = True (cost has been approved and posted), ProjectCharge is read-only. |
| `productID` | long | On create, or update when productID has changed and is not Null, if no value is supplied for the billingCodeID, unitCost, or unitPrice fields, then those fields take their values from the Product. ProjectCharge must have either a productID or billingCodeID. |
| `projectID` | long | projectID cannot be updated. |
| `status` | long | status is read-only. On create, when Procurement is enabled, status is set as follows: If productID is null, then Status = Ready to Ship. If productID references a Product where doesNotRequireProcurement = True, then status = Ready to Ship. If productID references a Product where doesNotRequireProcurement = False and the Product is not available in Inventory, then status = Need To Order. If productID references a Product where doesNotRequireProcurement = False and the Product is available in Inventory, then status = Ready to Ship. If Status = Need To Order and extendedCost is > the value set in the system setting "Require approval before ordering..." then status is automatically set to Waiting Approval. When Procurement is disabled, status = Pending. |
| `unitCost` | decimal | This entity field will return no information if the user account making the query does not have sufficient privileges to view cost data in the Autotask UI. Additionally, if an update request does not have the necessary permissions, the API will ignore the call's values for the field even if they are blank or would be otherwise required. |
| `unitPrice` | decimal | If the Multi-currency Installed Module is enabled, this field will return the relevant Customer Currency values instead of the Internal Currency values. The unitPrice field will not be queryable if the API user does not have the Can view sensitive Charge data system security setting. |
| `chargeType` | integer |  |
| `contractServiceBundleID` | long | ContractServiceBundles |
| `contractServiceID` | long | ContractServices |
| `createDate` | datetime |  |
| `creatorResourceID` | long | Resources |
| `datePurchased` | datetime |  |
| `description` | string (2000) |  |
| `estimatedCost` | decimal |  |
| `internalPurchaseOrderNumber` | string (50) |  |
| `name` | string (100) |  |
| `notes` | string (2000) |  |
| `organizationalLevelAssociationID` | integer | OrganizationalLevelAssociations |
| `purchaseOrderNumber` | string (50) |  |
| `startDate` | datetime |  |
| `statusLastModifiedBy` | long |  |
| `statusLastModifiedDate` | datetime |  |
| `unitQuantity` | decimal |  |

