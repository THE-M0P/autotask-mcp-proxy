# ContractServiceBundleAdjustments

Describes an adjustment to the quantity of units of a ServiceBundle that are added to a Recurring Service type Contract. It can only be created; it cannot be queried or updated. Changes made to the Contract using the ContractServiceBundleAdjustments entity affect only the quantity of Service Bundle units and not the price/adjusted price of the bundle or services.

- **Entity path:** `/atservicesrest/v1.0/ContractServiceBundleAdjustments`
- **Capabilities:** create ✓ · update — · query — · delete —

## Fields (9)

| Field | Type | Notes |
|---|---|---|
| `adjustedUnitPrice` | decimal | If the Multi-currency Installed Module is enabled, this field will return the relevant Customer Currency value instead of the Internal Currency value. adjustedUnitPrice allows a negative value (allows users to apply discount). |
| `contractServiceBundleID` | integer | If contractServiceBundleID is provided, contractID and serviceBundleID are not required (in other words, either contractID and serviceBundleID OR contractServiceBundleID is required |
| `allowRepeatService` |  | allowRepeatService must equal True in order to create two or more instances of the same Service on a contract. |
| `allowRepeatServiceBundle` | boolean |  |
| `contractID` | integer |  |
| `effectiveDate` | datetime |  |
| `quoteItemID` | integer |  |
| `serviceBundleID` | integer |  |
| `unitChange` | integer |  |

