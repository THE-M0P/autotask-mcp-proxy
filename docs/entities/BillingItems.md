# BillingItems

The BillingItems entity describes a billable item in Autotask that has been approved and posted. A billing item may or may not be included in an invoice and billed to the customer. In Autotask, billing items are managed in the Contracts module.

- **Entity path:** `/atservicesrest/v1.0/BillingItems`
- **Capabilities:** create — · update ✓ · query ✓ · delete —

## Fields (49)

| Field | Type | Notes |
|---|---|---|
| `lineItemFullDescription` | string (8000) | billingItem.lineItemFullDescription contains the description for a billingItem. |
| `lineItemGroupDescription` | string (8000) | When billingItems are grouped on an invoice, the lineItemGroupDescription contains the description for the grouped items. lineItemFullDescription is also available for billingItems that are grouped. |
| `lineItemID` |  | When multiple billingItems that are associated with the same internalCurrencytaxDollars share the same lineItemID, those items are grouped. It is possible for a billingItem to have a unique lineItemID and still be "grouped" in a group of one item.To confirm the group status of a billingItem, refer to invoice.invoiceEditorTemplateID and the invoiceTemplate.groupBy value. |
| `ourCost` | decimal | This entity field will return no information if the user account making the query does not have sufficient privileges to view cost data in the Autotask UI. Additionally, if an update request does not have the necessary permissions, the API will ignore the call's values for the field even if they are blank or would be otherwise required. |
| `accountManagerWhenApprovedID` | integer |  |
| `billingCodeID` | integer |  |
| `billingItemType` | integer |  |
| `companyID` | integer |  |
| `configurationItemID` | long |  |
| `contractBlockID` | integer |  |
| `contractChargeID` | long |  |
| `contractID` | integer |  |
| `contractServiceAdjustmentID` | integer |  |
| `contractServiceBundleAdjustmentID` | integer |  |
| `contractServiceBundleID` | integer |  |
| `contractServiceBundlePeriodID` | integer |  |
| `contractServiceID` | integer |  |
| `contractServicePeriodID` | integer |  |
| `description` | string (2000) |  |
| `expenseItemID` | integer |  |
| `extendedPrice` | decimal |  |
| `internalCurrencytaxDollars` | integer |  |
| `invoiceID` | integer |  |
| `itemApproverID` | integer |  |
| `itemDate` | datetime |  |
| `itemName` | string (255) |  |
| `milestoneID` | long |  |
| `nonBillable` | integer |  |
| `organizationalLevelAssociationID` | integer |  |
| `postedDate` | datetime |  |
| `postedOnTime` | datetime |  |
| `projectChargeID` | long |  |
| `projectID` | integer |  |
| `purchaseOrderNumber` | string (50) |  |
| `quantity` | decimal |  |
| `rate` | decimal |  |
| `roleID` | integer |  |
| `serviceBundleID` | long |  |
| `serviceID` | long |  |
| `sortOrderID` | long |  |
| `subType` | integer |  |
| `taskID` | integer |  |
| `taxDollars` | decimal |  |
| `ticketChargeID` | long |  |
| `ticketID` | integer |  |
| `timeEntryID` | integer |  |
| `totalAmount` | decimal |  |
| `vendorID` | long |  |
| `webServiceDate` | datetime |  |

