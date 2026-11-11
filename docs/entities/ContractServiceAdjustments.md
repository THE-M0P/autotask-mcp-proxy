# ContractServiceAdjustments

Describes an adjustment to the quantity of units of a ContractService entity that are added to a Recurring Service type Contract. It can only be created; it CANNOT be queried or updated.

- **Entity path:** `/atservicesrest/v1.0/ContractServiceAdjustments`
- **Capabilities:** create ✓ · update — · query — · delete —

## Fields (10)

| Field | Type | Notes |
|---|---|---|
| `adjustedUnitPrice` | decimal | If the Multi-currency Installed Module is enabled, this field will return the relevant Customer Currency value instead of the Internal Currency value. adjustedUnitPrice allows a negative value (allows users to apply discount). |
| `allowRepeatService` | boolean | allowRepeatService must equal True in order to create two or more instances of the same Service on a contract. |
| `contractServiceID` |  | If contractServiceID is provided, contractID and serviceID are not required (in other words, either contractID and serviceID OR ContractService ID is required |
| `unitPrice` |  | unitPrice allows a negative value (allows users to apply discount). |
| `adjustedUnitCost` | decimal |  |
| `contractID` | integer |  |
| `effectiveDate` | datetime |  |
| `quoteItemID` | integer |  |
| `serviceID` | integer |  |
| `unitChange` | integer |  |

