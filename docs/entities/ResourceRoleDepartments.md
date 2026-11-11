# ResourceRoleDepartments

Describes a Resource - Role - Department relationship. A resource must be assigned to at least one role. Resources are assigned to one or more roles through their department. They can also be assigned service desk roles. This entity describes Resource's Role and Department associations.

- **Entity path:** `/atservicesrest/v1.0/ResourceRoleDepartments`
- **Capabilities:** create ✓ · update ✓ · query ✓ · delete —

## Fields (6)

| Field | Type | Notes |
|---|---|---|
| `departmentID` | integer | Departments |
| `isActive` | boolean |  |
| `isDefault` | boolean |  |
| `isDepartmentLead` | boolean |  |
| `resourceID` | integer | Resources |
| `roleID` | integer | Roles |

