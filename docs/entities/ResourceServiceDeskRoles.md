# ResourceServiceDeskRoles

Describes the Resource - Service Desk Role association. Resource - Queue association does not require an assigned role. The isActive, isDefault, and roleID fields in the ResourceRoleQueue entity are now obsolete. Their role is now filled by those same fields in ResourceServiceDeskRoles entity.

- **Entity path:** `/atservicesrest/v1.0/ResourceServiceDeskRoles`
- **Capabilities:** create ✓ · update ✓ · query ✓ · delete —

## Fields (4)

| Field | Type |
|---|---|
| `isActive` | Boolean |
| `isDefault` | boolean |
| `resourceID` | integer |
| `roleID` | Integer |

