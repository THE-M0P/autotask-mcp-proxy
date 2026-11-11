# InventoryProducts

An inventory product represents a set of stocked items that share a product and a location. When an inventory product is manually created, stocked items are also created. The InventoryProducts entity is the container where you define inventory location, minimum and maximum stocking levels, and can see the summary of the product (Available, Reserved, etc.).

- **Entity path:** `/atservicesrest/v1.0/InventoryProducts`
- **Capabilities:** create ✓ · update ✓ · query ✓ · delete ✓
- **Parent:** None
- **Children:** InventoryStockedItems, InventoryStockedItemsAdd, InventoryStockedItemsRemove, InventoryStockedItemsTransfer

## Access URLs

- `InventoryProducts (POST, PUT, PATCH)`
- `InventoryProducts{id} (GET, DELETE)`
- `InventoryProduct/squery (GET, POST)`
- `InventoryProducts/query/count (GET, POST)`
- `InventoryProducts/entityInformation (GET)`
- `InventoryProducts/entityInformation/fields (GET)`

## Fields (15)

| Field | Type | Notes |
|---|---|---|
| `availableUnits` | integer | Deleting an inventoryProduct with an availableUnits value > 0 will remove the inventoryStocked value before deleting the inventoryProduct. |
| `inventoryLocationID` | integer | This field will be read-only if you are modifying an existing record. It is required during Create operations. |
| `quanityMax` |  | Values passed to this field must be greater than quantityMin . The exception to this rule is when setting both quanityMin and quantityMax to 0. |
| `backOrderQuantity` | integer |  |
| `bin` | string (50) |  |
| `createDateTime` | datetime |  |
| `createdByResourceID` | integer |  |
| `onHandUnits` | integer |  |
| `pickedUnits` | integer |  |
| `productID` | integer |  |
| `quantityMaximum` | integer |  |
| `quantityMinimum` | integer |  |
| `referenceNumber` | string (50) |  |
| `reservedUnits` | integer |  |
| `unitsOnOrder` | integer |  |

