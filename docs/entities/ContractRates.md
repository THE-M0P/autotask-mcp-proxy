# ContractRates

Describes a billing rate for an Autotask Contract. A Contract Rate is associated with a Role and is specific to a contract, allowing you to override your company's standard role rates for labor tracked against the contract. Rates are used with Time and Materials, Fixed Price, and Retainer type contracts. In Autotask, you add and manage Contract Rates from the Contract Summary page.

- **Entity path:** `/atservicesrest/v1.0/ContractRates`
- **Capabilities:** create ✓ · update ✓ · query ✓ · delete —

## Fields (3)

| Field | Type |
|---|---|
| `contractHourlyRate` | decimal |
| `contractID` | integer |
| `roleID` | integer |

