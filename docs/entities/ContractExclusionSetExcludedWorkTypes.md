# ContractExclusionSetExcludedWorkTypes

Describes a billing Work Type (Allocation Code) that is excluded from the contract the set is applied to.

- **Entity path:** `/atservicesrest/v1.0/ContractExclusionSetExcludedWorkTypes`
- **Capabilities:** create ✓ · update — · query ✓ · delete ✓

## Fields (2)

| Field | Type | Notes |
|---|---|---|
| `excludedWorkTypeID` | integer | Must be an active BillingCode with a useType value = 1 (that is, a work type). |
| `contractExclusionSetID` | integer | Must be unique in your database. |

