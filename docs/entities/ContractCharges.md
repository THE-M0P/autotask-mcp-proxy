# ContractCharges

Describes a cost associated with an Autotask Contract. A cost is a billing item for products or materials. Cost items can be billable or non-billable. Billable cost items appear in Approve and Post.

- **Entity path:** `/atservicesrest/v1.0/ContractCharges`
- **Capabilities:** create ✓ · update ✓ · query ✓ · delete ✓

## Fields (22)

| Field | Type | Notes |
|---|---|---|
| `billableAmount` | decimal | billableAmount = unitQuantity * unitPrice. If unitPrice is Null, the value will be set to the value from the Material Cost Code associated with billingCodeID. The API will round the unitQuantity, unitCost, and unitPrice values to 4 decimal places prior to any calculations for the total price or extended cost. |
| `billingCodeID` | long | billingCodeID must reference a Material Cost Code type allocation code. On create, or update when productID has changed and is not Null, if no value is supplied for the billingCodeID, unitCost, or unitPrice fields, then those fields take their values from the Product. On create or update when billingCodeID has changed and is not Null, if there is no Contract Cost Default set for the Material Cost Code associated with the billingCodeID, and if no value is supplied for the unitCost and unitPrice fields, then those fields take their values from the Material Cost Code. |
| `contractID` | long | After a ContractCharge is created, contractID cannot be updated. If contractID references a Contract that has set a Contract Cost Default for the Material Cost Code associated with the billingCodeID, and no value was supplied for unitPrice, unitCost, or isBillableToCompany, then these fields take their values from the Contract Cost Default. |
| `extendedCost` | decimal | extendedCost = unitQuantity * unitCost. If unitCost is Null, the value will be set to the value from the Material Cost Code associated with billingCodeID. This entity field will return no information if the user account making the query does not have sufficient privileges to view cost data in the Autotask UI. Additionally, if an update request does not have the necessary permissions, the API will ignore the call's values for the field even if they are blank or would be otherwise required. The API will round the unitQuantity, unitCost, and unitPrice values to 4 decimal places prior to any calculations for the total price or extended cost. |
| `isBillableToCompany` | Boolean | If no value is specified for isBillableToCompany, the value is set to True |
| `isBilled` | Boolean | When isBilled = True (cost has been approved and posted), ContractCharge is read-only. update and delete are allowed only when isBilled = False (cost has not been approved and posted). |
| `status` |  | Status is read-only. On create, when Procurement is enabled, Status is set as follows: If productID is null, then Status = Ready to Ship. If productID references a Product where doesNotRequireProcurement = True, then Status = Ready to Ship. If productID references a Product where doesNotRequireProcurement = False and the Product is not available in Inventory, then Status = Need To Order. If productID references a Product where doesNotRequireProcurement = False and the Product is available in Inventory, then Status = Ready to Ship. If Status = Need To Order and extendedCost is > the value set in the system setting "Require approval before ordering..." then Status is automatically set to Waiting Approval. When Procurement is disabled, Status = Pending |
| `unitCost` | decimal | This entity field will return no information if the user account making the query does not have sufficient privileges to view cost data in the Autotask UI. Additionally, if an update request does not have the necessary permissions, the API will ignore the call's values for the field even if they are blank or would be otherwise required. |
| `chargeType` | integer |  |
| `contractServiceBundleID` | long | ContractServiceBundles |
| `contractServiceID` | long | ContractServices |
| `createDate` | datetime |  |
| `creatorResourceID` | long | Resources |
| `datePurchased` | datetime |  |
| `internalPurchaseOrderNumber` | string (50) |  |
| `organizationalLevelAssociationID` | integer | OrganizationalLevelAssociations |
| `productID` | long | Products |
| `purchaseOrderNumber` | string (50) |  |
| `statusLastModifiedBy` | long |  |
| `statusLastModifiedDate` | datetime |  |
| `unitPrice` | decimal |  |
| `unitQuantity` | decimal |  |

