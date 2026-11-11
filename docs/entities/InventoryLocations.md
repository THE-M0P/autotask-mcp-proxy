# InventoryLocations

Describes an Autotask Inventory location , that is, a physical or virtual place where your company stores or assigns inventory items. For example, an Inventory location can be an actual warehouse or retail outlet, or a virtual holding place such as "Lost Items" or "Returned Items." Every Inventory Item must be associated with an Inventory location. You assign a location to Inventory Items when you add the items to inventory or to a purchase order.

- **Entity path:** `/atservicesrest/v1.0/InventoryLocations`
- **Capabilities:** create ✓ · update ✓ · query ✓ · delete —

## Fields (5)

| Field | Type | Notes |
|---|---|---|
| `locationName` | string (50) | locationName must be unique. |
| `resourceID` | integer | If resourceID has a value, isDefault cannot = True. |
| `impersonatorCreatorResourceID` | integer | Resources |
| `isActive` | boolean |  |
| `isDefault` | boolean |  |

