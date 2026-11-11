# Departments

Describes an Autotask Department. A Department is an association used to manage resources, especially when assigning project tasks. Every resource must be associated with at least one department and have at least one assigned role in that department.

- **Entity path:** `/atservicesrest/v1.0/Departments`
- **Capabilities:** create ✓ · update ✓ · query ✓ · delete —

## Fields (4)

| Field | Type | Notes |
|---|---|---|
| `description` | string (1000) |  |
| `name` | string (100) |  |
| `number` | string (50) |  |
| `primaryLocationID` | long | InternalLocationWithBusinessHours |

