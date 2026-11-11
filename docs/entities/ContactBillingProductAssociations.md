# ContactBillingProductAssociations

Describes the mapping of the contact to the contract billing rule.

- **Entity path:** `/atservicesrest/v1.0/ContactBillingProductAssociations`
- **Capabilities:** create ✓ · update ✓ · query ✓ · delete ✓

## Fields (4)

| Field | Type | Notes |
|---|---|---|
| `billingProductID` | integer | This field must be supplied during create. On update, it is read-only. |
| `contactID` | integer | This field must be supplied during create. On update, it is read-only. |
| `effectiveDate` | datetime |  |
| `expirationDate` | datetime |  |

