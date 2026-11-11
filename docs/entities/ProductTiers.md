# ProductTiers

Describes the pricing and costing tiers for a specific billing product on the Product table. It allows you to configure tiered or volume pricing for the billing product.

- **Entity path:** `/atservicesrest/v1.0/ProductTiers`
- **Capabilities:** create ✓ · update ✓ · query ✓ · delete ✓

## Fields (4)

| Field | Type | Notes |
|---|---|---|
| `productID` | integer | This field must be supplied during create. On update, it is read-only. |
| `unitCost` | decimal | This entity field will return no information if the user account making the query does not have sufficient privileges to view cost data in the Autotask UI. Additionally, if an update request does not have the necessary permissions, the API will ignore the call's values for the field even if they are blank or would be otherwise required. |
| `unitPrice` | decimal | In multi-currency databases, this will be in the internal currency. |
| `upToUnitCount` | decimal |  |

