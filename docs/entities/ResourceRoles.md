# ResourceRoles

This query only entity describes Resources' associations to Department/ Role relationships, service desk queues, and service desk roles.. A resource must be assigned to at least one role. Resources are assigned to one or more roles through their department and can be assigned service desk roles. Resources can also be assigned to service desk queues.

- **Entity path:** `/atservicesrest/v1.0/ResourceRoles`
- **Capabilities:** create — · update — · query ✓ · delete —

## Fields (5)

| Field | Type | Notes |
|---|---|---|
| `departmentID` | long | Departments |
| `isActive` | boolean |  |
| `queueID` | long |  |
| `resourceID` | long | Resources |
| `roleID` | long | Roles |

