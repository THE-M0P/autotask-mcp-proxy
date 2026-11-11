# ContractBlocks

The ContractBlocks entity describes an Autotask Contract Block. The Contract Block represents a block of hours purchased for a Block Hours type Contract. With a Block Hours Contract, the customer pre-pays for a block of hours and then the pre-paid hours are reduced as billable work is performed. The contract maintains the balance of hours. You can create a Block Hours type Contract without creating an associated ContractBlocks entity, but time cannot be charged against the contract.

- **Entity path:** `/atservicesrest/v1.0/ContractBlocks`
- **Capabilities:** create ✓ · update ✓ · query ✓ · delete —

## Fields (12)

| Field | Type | Notes |
|---|---|---|
| `contractID` | integer | contractID must reference a Contract where ContractType is Blocks Hour type. |
| `hourlyRate` | decimal | HourlyRate cannot be changed via the API when the block has been billed, but the other editable fields can be updated. |
| `hours` | decimal | On update, ContractBlock.Hours must be >= ContractBlock.hoursApproved. ContractBlock.Hours and ContractBlock.hourlyRate must be >= 0. Hours cannot be changed via the API when the block has been billed, but the other editable fields can be updated. |
| `isPaid` | boolean | isPaid is not required. It is Read-Only; on creation, isPaid will automatically be set to 0 and then updated by triggers. |
| `datePurchased` | datetime |  |
| `endDate` | datetime |  |
| `hoursApproved` | decimal |  |
| `invoiceNumber` | string (50) |  |
| `paymentNumber` | string (50) |  |
| `paymentType` | integer |  |
| `startDate` | datetime |  |
| `status` | integer |  |

