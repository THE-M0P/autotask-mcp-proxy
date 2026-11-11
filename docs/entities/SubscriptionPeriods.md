# SubscriptionPeriods

Describes an Autotask SubscriptionPeriods entity. This entity stores the information for an individual billing period item associated with an Autotask Subscription. When a subscription is created, a billing item is created for every billing period included in the duration of the subscription. So, for example, when a subscription is created with a quarterly billing type, and that subscription has a one year duration, four SubscriptionPeriods are created, one for each billing period. Refer also to Subscriptions .

- **Entity path:** `/atservicesrest/v1.0/SubscriptionPeriods`
- **Capabilities:** create — · update — · query ✓ · delete —

## Fields (6)

| Field | Type | Notes |
|---|---|---|
| `periodCost` | decimal |  |
| `periodDate` | datetime |  |
| `periodPrice` | decimal |  |
| `postedDate` | datetime |  |
| `purchaseOrderNumber` | string (50) |  |
| `subscriptionID` | integer | Subscriptions |

