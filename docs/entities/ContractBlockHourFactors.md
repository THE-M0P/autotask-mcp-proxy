# ContractBlockHourFactors

The ContractBlockHourFactors entity describes an Autotask Block Hour Factor, an option used with Block Hours Contracts. With a Block Hours Contract, the customer pre-pays for a block of hours at a fixed hourly rate. A Block Hour Factor can compensate for the fixed rate by applying a multiplier to specific role rates. For example, if the contract hourly rate is $60, but an Engineer's hourly billing rate is $120, applying a block hour factor of 2 will debit 2 hours of contract time for each hour worked by an Engineer. In Autotask, you create and manage Block Hour Factors from a Block Hours Contract's Summary page in the Contract module.

- **Entity path:** `/atservicesrest/v1.0/ContractBlockHourFactors`
- **Capabilities:** create ✓ · update ✓ · query ✓ · delete —

## Fields (5)

| Field | Type | Notes |
|---|---|---|
| `blockHourMultiplier` | decimal |  |
| `contractHourlyRate` | decimal |  |
| `contractID` | integer | Contracts |
| `internalCurrencyContractHourlyRate` | decimal |  |
| `roleID` | integer | Roles |

