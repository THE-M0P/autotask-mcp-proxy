# PaymentTerms

Describes an Autotask Payment Term. A payment term specifies the conditions and requirements for payment due on an Autotask invoice; for example, Net 30 days.

- **Entity path:** `/atservicesrest/v1.0/paymentTerms`
- **Capabilities:** create ✓ · update ✓ · query ✓ · delete —

## Fields (4)

| Field | Type |
|---|---|
| `description` | string (2000) |
| `isActive` | boolean |
| `name` | string (100) |
| `paymentDueInDays` | integer |

