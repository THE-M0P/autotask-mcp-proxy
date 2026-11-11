# ContractRetainers

Describes a payment amount applied to a Retainer type contract and sets the time period covered by the purchase. For example, a retainer purchase of $500 can be applied to three months of the Retainer contract.

- **Entity path:** `/atservicesrest/v1.0/ContractRetainers`
- **Capabilities:** create ✓ · update ✓ · query ✓ · delete —

## Fields (11)

| Field | Type | Notes |
|---|---|---|
| `amountApproved` | decimal | If the multi-currency Installed Module is enabled, this field will return the relevant Customer Currency value instead of the Internal Currency value. |
| `contractID` | integer | ContractRetainer.contractID must reference a Retainer type Contract. |
| `isPaid` | boolean | isPaid is Read-Only. It is not required. On create the value defaults to 0. Any changes in value are triggered automatically. |
| `startDate` | datetime | startDate must be < endDate |
| `amount` | decimal |  |
| `datePurchased` | datetime |  |
| `endDate` | datetime |  |
| `invoiceNumber` | string (50) |  |
| `paymentID` | integer |  |
| `paymentNumber` | string (50) |  |
| `status` | integer |  |

