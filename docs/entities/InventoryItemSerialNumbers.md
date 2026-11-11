# InventoryItemSerialNumbers

Describes a serial number associated with an Inventory Item. It allows users to track and manage Inventory Items created from serialized Products, that is, Autotask Products that require a unique serial number. An InventoryItemSerialNumbers entity can be associated with only one InventoryItem.

- **Entity path:** `/atservicesrest/v1.0/InventoryItemSerialNumbers`
- **Capabilities:** create ✓ · update ✓ · query ✓ · delete —

## Fields (2)

| Field | Type | Notes |
|---|---|---|
| `inventoryItemID` | integer | inventoryItemID must reference an InventoryItem based on a serialized Product; that is, InventoryItem.productID must reference a Product where isSerialized = True. |
| `serialNumber` | string (100) | For create and update, serialNumber must be unique. serialNumber cannot be updated if the inventoryItemID is associated with an InventoryItem that has been picked or delivered/shipped. |

