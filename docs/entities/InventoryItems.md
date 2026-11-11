# InventoryItems

Describes an Autotask product that is associated with an Inventory location in the Autotask Inventory module. Once an InventoryItems entity has been created, you can track quantities for that item (quantity on hand, quantity on order) and provide a value for minimum and maximum quantity for use with the Auto-Fill Order feature. You can assign serial numbers to instances of InventoryItems, add them to purchase orders, and "receive" them. You can also transfer them between inventory locations or associate them with an account. Inventory items are added and managed in Autotask through the Inventory module.

- **Entity path:** `/atservicesrest/v1.0/InventoryItems`
- **Capabilities:** create ✓ · update ✓ · query ✓ · delete —
- **Parent:** None
- **Children:** InventoryItemSerialNumbers

## Access URLs

- `InventoryItems/query (GET, POST)`
- `InventoryItems/{id} (GET)`
- `InventoryItems/query/count (GET, POST)`
- `InventoryItems (PUT, POST, PATCH)`
- `InventoryItems/entityInformation (GET)`
- `InventoryItems/entityInformation/fields (GET)`
- `InventoryItems/entityInformation/userDefinedFields (GET)`

## Fields (12)

| Field | Type | Notes |
|---|---|---|
| `inventoryLocationID` | integer | inventoryLocationID must reference an isActive inventory location. |
| `quantityMinimum` | integer | quantityMinimum must be >= 0. |
| `quantityMaximum` | integer | quantityMaximum must be >= quantityMinimum. |
| `quantityOnHand` | integer | quantityOnHand must be >= the quantity quantityPicked + quantity quantityReserved. For serialized products (that is, products that track a serial number): On create, quantityOnHand must = 0 (quantity for these inventory items is increased by creating InventoryItemSerialNumber entities). On update, quantityOnHand is Read-Only |
| `backOrderQuantity` | integer |  |
| `bin` | string (50) |  |
| `impersonatorCreatorResourceID` | integer | Resources |
| `productID` | integer | Products |
| `quantityOnOrder` | integer |  |
| `quantityPicked` | integer |  |
| `quantityReserved` | integer |  |
| `referenceNumber` | string (50) |  |

