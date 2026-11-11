# PurchaseOrderItemReceiving

Describes a transaction where a specified quantity of a purchaseOrderItem is 'received,' that is, debited from the Quantity value of the associated purchaseOrderItem and added to the quantityOnHand value of the associated inventoryItem entity.

- **Entity path:** `/atservicesrest/v1.0/PurchaseOrderItemReceiving`
- **Capabilities:** create ✓ · update — · query ✓ · delete —

## Fields (7)

| Field | Type | Notes |
|---|---|---|
| `purchaseOrderItemID` | long | This value must be valid. |
| `serialNumber` | string (50) | When receiving products, the entity will clear the serialNumber field if the product is not serialized. |
| `quantityBackOrdered` | integer |  |
| `quantityNowReceiving` | integer |  |
| `quantityPreviouslyReceived` | integer |  |
| `receiveDate` | datetime |  |
| `receivedByResourceID` | integer |  |

