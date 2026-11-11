# InventoryTransfers

Describes a transaction where a specified quantity of one InventoryItem entity is transferred from the item’s currently assigned InventoryLocation to another InventoryLocation. It also describes a note added when a user manually updates an inventory item's On Hand quantity. These "audit" notes may or may not be required.

- **Entity path:** `/atservicesrest/v1.0/InventoryTransfers`
- **Capabilities:** create ✓ · update — · query ✓ · delete —

## Fields (9)

| Field | Type | Notes |
|---|---|---|
| `fromLocationID` | long | fromLocationID must = inventoryLocationID of a valid InventoryItem. |
| `productID` | long | productID must = productID of a valid InventoryItem. |
| `quantityTransferred` | integer | quantityTransferred must be <= quantityOnHand. quantityTransferred must be > 0. |
| `serialNumber` | string (100) | For products that track a serial number: serialNumber is required. serialNumber must reference a valid Serial Number (InventoryItemSerialNumber.serialNumber). InventoryItemSerialNumber.inventoryItemID must reference a valid Inventory Item with inventoryLocationID and productID = InventoryTransfer.fromLocationID and InventoryTransfer.productID. quantityTransferred must = 1. |
| `toLocationID` | long | toLocationID cannot be = to fromLocationID. toLocationID must reference an active Inventory location. |
| `updateNote` | string (500) | If an Inventory Item's On Hand quantity is updated by the API, an update note is written. The Update Reason will be "Updated using Web Services API." The Updated By User value will be the user that performed the update (via the API). |
| `notes` | string (4000) |  |
| `transferByResourceID` | integer | Resources |
| `transferDate` | datetime |  |

