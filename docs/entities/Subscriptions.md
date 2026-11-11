# Subscriptions

Describes an Autotask Subscription. Subscriptions are used to create recurring billing items for Assets, when there is no need to track the cost of labor against subscription revenue, for example, when billing in installments (use a Recurring Services Contract when there is a need to track labor). Subscriptions can be set to bill monthly, quarterly, semi-annually, yearly, or one-time. When a subscription is created, all future billing items for the subscription are created at once (refer also to SubscriptionPeriods entity). When a subscription billing item becomes due, it appears in Approve & Post and is available for invoicing.

- **Entity path:** `/atservicesrest/v1.0/Subscriptions`
- **Capabilities:** create — · update ✓ · query ✓ · delete ✓
- **Parent:** None
- **Children:** SubscriptionPeriods

## Access URLs

- `Subscriptions/query (GET, POST)`
- `Subscriptions/{id} (GET, DELETE)`
- `Subscriptions/query/count (GET, POST)`
- `Subscriptions (PUT, POST, PATCH)`
- `Subscriptions/entityInformation (GET)`
- `Subscriptions/entityInformation/fields (GET)`
- `Subscriptions/entityInformation/userDefinedFields (GET)`

## Fields (16)

| Field | Type | Notes |
|---|---|---|
| `configurationItemID` | integer | ConfigurationItems |
| `description` | string (2000) |  |
| `effectiveDate` | datetime |  |
| `expirationDate` | datetime |  |
| `impersonatorCreatorResourceID` | integer | Resources |
| `materialCodeID` | integer | ProjectCharges |
| `organizationalLevelAssociationID` |  |  |
| `periodCost` | Decimal |  |
| `periodPrice` | Decimal |  |
| `periodType` | integer |  |
| `purchaseOrderNumber` | string (50) |  |
| `status` | integer |  |
| `subscriptionName` | string (100) |  |
| `totalCost` | Decimal |  |
| `totalPrice` | Decimal |  |
| `vendorID` | integer | Companies |

