# ContractExclusionSets

The ContractExclusionSet entity describes a reusable set of roles and work types that are excluded from the contract the set is applied to. Time entries associated with the contract cannot use the excluded roles and work types. If you attempt to save a time entry with a role or work type that is excluded by the associated contract, a warning message opens. If you continue the save, the time entry is saved without an associated contract, unless a default exclusion contract has been set up (Contract.exclusionContractID).

- **Entity path:** `/atservicesrest/v1.0/ContractExclusionSets`
- **Capabilities:** create ✓ · update ✓ · query ✓ · delete ✓
- **Parent:** None
- **Children:** ContractExclusionSetExcludedRoles, ContractExclusionSetExcludedWorkTypes

## Access URLs

- `ContractExclusionSets/query (GET, POST)`
- `ContractExclusionSets/{id} (GET, DELETE)`
- `ContractExclusionSets/query/count (GET, POST)`
- `ContractExclusionSets (PUT, POST, PATCH)`
- `ContractExclusionSets/entityInformation (GET)`
- `ContractExclusionSets/entityInformation/fields (GET)`
- `ContractExclusionSets/entityInformation/userDefinedFields (GET)`

## Fields (3)

| Field | Type |
|---|---|
| `description` | string (500) |
| `isActive` | boolean |
| `name` | string (100) |

