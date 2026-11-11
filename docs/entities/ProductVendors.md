# ProductVendors

Describes a Vendor type Company that is associated with an Autotask Product. Products can be associated with more than one Product Vendor. A Product Vendor is not required unless the user intends to create an Inventory Item from the Product and add the Inventory Item to one or more purchase orders.

- **Entity path:** `/atservicesrest/v1.0/ProductVendors`
- **Capabilities:** create ✓ · update ✓ · query ✓ · delete —

## Fields (7)

| Field | Type | Notes |
|---|---|---|
| `isDefault` | boolean | On create, if no default productVendor exists for the product, productVendor.isDefault is set to True for the newly created productVendor. If multiple Product Vendors are created in a single batch, and no default productVendor exists, isDefault is set to True for the first productVendor created via the batch. |
| `productVendor` |  | On create and update, the following conditions and requirements apply: The productVendor cannot already be associated with the Product entity and, for batch creation, the batch cannot include duplicate productVendors. The associated product must have at lease one active productVendor (if only one productVendor is associated with the product, productVendor.isActive cannot equal false.) A product cannot have more than one default productVendor. A productVendor cannot be both the Default and Inactive. |
| `vendorCost` | decimal | If multi-currency is enabled and the vendor is associated with a different currency, the vendorCost field will be assumed to be in the vendor currency. This entity field will return no information if the user account making the query does not have sufficient privileges to view cost data in the Autotask UI. Additionally, if an update request does not have the necessary permissions, the API will ignore the call's values for the field even if they are blank or would be otherwise required. |
| `isActive` | boolean |  |
| `productID` | integer | Products |
| `vendorID` | integer | Companies |
| `vendorPartNumber` | string (50) |  |

