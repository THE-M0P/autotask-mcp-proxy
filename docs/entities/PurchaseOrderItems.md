# PurchaseOrderItems

This entity associates a Product entity with a PurchaseOrder entity. Purchase Orders are associated with a specific vendor Company. Products added to a purchase order as a PurchaseOrderItem can be "received" into Inventory, that is, added to an InventoryLocation as an InventoryItem. This allows users to track and manage the ordering and receipt of Inventory Items, for example, hardware, software, and supplies. You add products to purchase orders in the Inventory module.

- **Entity path:** `/atservicesrest/v1.0/PurchaseOrderItems`
- **Capabilities:** create ✓ · update ✓ · query ✓ · delete —

## Fields (13)

| Field | Type | Notes |
|---|---|---|
| `chargeID` | integer | The ticket/project/contract chargeID must reference a valid cost with a status = NeedToOrder/Fulfill. The chargeID cannot already belong to another purchase order. |
| `internalCurrencyUnitCost` | decimal | This entity field will return no information if the user account making the query does not have sufficient privileges to view cost data in the Autotask UI. Additionally, if an update request does not have the necessary permissions, the API will ignore the call's values for the field even if they are blank or would be otherwise required. |
| `inventoryLocationID` | integer | inventoryLocationID must reference an active InventoryLocation. |
| `orderID` | integer | On create, orderID must reference a PurchaseOrder with Status = New. On update, orderID must reference a PurchaseOrder with Status = New, Received Partial, or ReceivedFull. |
| `productID` | integer | If no chargeID is supplied, productID is required. If only a chargeID is supplied, then we will set the productID equal to the productID associated with the ticket/project/contract cost. If both a chargeID and a productID are supplied, then the productID must match the productID associated to the ticket/project/contract cost. If they do not match, the API will return an error message. |
| `quantity` | integer | quantity must be >= 1. When a chargeID is supplied, the quantity cannot exceed the quantity of the Ticket/Project/ContractCharge during a create and update, and cannot exceed the previously saved amount during an update. PurchaseOrder allows associated PurchaseOrderItem.quantity to be updated when PurchaseOrder status equals ReceivedFull or ReceivedPartial, as follows: PurchaseOrderItem.quantity can be debited, but the debited amount must be >= to PurchaseOrderItem.quantityPreviouslyReceived or InventoryItem.quantityOnHand for the associated Inventory Item, whichever value is less. PurchaseOrderItem.quantity can be increased if orderID references a PurchaseOrder with status = ReceivedPartial. It cannot be increased if orderID references a PurchaseOrder with status = ReceivedFull. |
| `unitCost` | decimal | unitCost must be >= 0.00. For multi-currency databases, values supplied for the unitCost field are assumed to be in the currency of the item's purchase order's vendor. This entity field will return no information if the user account making the query does not have sufficient privileges to view cost data in the Autotask UI. Additionally, if an update request does not have the necessary permissions, the API will ignore the call's values for the field even if they are blank or would be otherwise required. |
| `contractID` | long |  |
| `estimatedArrivalDate` | datetime |  |
| `memo` | string (4000) |  |
| `projectID` | long |  |
| `salesOrderID` | long |  |
| `ticketID` | long |  |

