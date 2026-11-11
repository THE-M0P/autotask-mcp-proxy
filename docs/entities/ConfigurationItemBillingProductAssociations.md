# ConfigurationItemBillingProductAssociations

Describes the mapping of the Asset (Configuration Item) to the contract billing rule.

- **Entity path:** `/atservicesrest/v1.0/ConfigurationItemBillingProductAssociations`
- **Capabilities:** create ✓ · update ✓ · query ✓ · delete ✓

## Fields (4)

| Field | Type | Notes |
|---|---|---|
| `billingProductID` | integer | This field must be supplied during create. On update, it is read-only. |
| `configurationItemID` | integer | This field must be supplied during create. On update, it is read-only. |
| `effectiveDate` | datetime |  |
| `expirationDate` | datetime |  |

