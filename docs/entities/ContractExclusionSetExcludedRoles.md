# ContractExclusionSetExcludedRoles

Describes a billing role that is excluded from the contract the set is applied to.

- **Entity path:** `/atservicesrest/v1.0/ContractExclusionSetExcludedRoles`
- **Capabilities:** create ✓ · update ✓ · query ✓ · delete ✓

## Fields (2)

| Field | Type | Notes |
|---|---|---|
| `excludedRoleID` | integer | Must be an active Role. |
| `contractExclusionSetID` | integer | Must be unique in your database. |

