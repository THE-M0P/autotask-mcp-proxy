# ContractExclusionRoles

Describes a billing Role that has been excluded from a Contract; that is, time entries associated with the contract cannot use the excluded role. If a resource attempts to save a time entry with a role that is excluded by the associated contract, a warning message opens. If the resource continues the save, the time entry is saved without an associated contract, unless a default exclusion contract has been set up (Contract.exclusionContractID).

- **Entity path:** `/atservicesrest/v1.0/ContractExclusionRoles`
- **Capabilities:** create ✓ · update — · query ✓ · delete ✓

## Fields (2)

| Field | Type | Notes |
|---|---|---|
| `contractID` | long | Contracts |
| `roleID` | long | Roles |

