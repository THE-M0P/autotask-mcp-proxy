# Roles

Describes an Autotask Role. Roles are associated with a department and have a standard billing rate. Resources are associated with one or more department/role combinations. Resources must specify a Role when entering time. When billing for that time, the default rate for the role determines the billable rate unless it is overridden, for example, by a Contract or workType.

- **Entity path:** `/atservicesrest/v1.0/Roles`
- **Capabilities:** create ✓ · update ✓ · query ✓ · delete —

## Fields (9)

| Field | Type |
|---|---|
| `description` | string (200) |
| `hourlyFactor` | decimal |
| `hourlyRate` | decimal |
| `isActive` | boolean |
| `isExcludedFromNewContracts` | boolean |
| `isSystemRole` | boolean |
| `name` | string (200) |
| `quoteItemDefaultTaxCategoryId` | integer |
| `roleType` | integer |

