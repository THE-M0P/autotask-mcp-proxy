# ContractRoleCosts

Describes a per hour cost for labor that is set at the contract level. This cost overrides a resource's Admin level internal cost rate for time entries posted against the contract. Time entry dates must fall within the active dates of the contract. The cost rate is associated with a resource and a role.

- **Entity path:** `/atservicesrest/v1.0/ContractRoleCosts`
- **Capabilities:** create ✓ · update ✓ · query ✓ · delete —

## Fields (4)

| Field | Type |
|---|---|
| `contractID` | integer |
| `rate` | decimal |
| `resourceID` | integer |
| `roleID` | integer |

