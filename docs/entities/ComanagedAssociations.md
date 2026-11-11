# ComanagedAssociations

Describes the link between the accounts that are co-managed, and the resources with a co-managed security level who have access to them.

- **Entity path:** `/atservicesrest/v1.0/ComanagedAssociations`
- **Capabilities:** create ✓ · update — · query ✓ · delete ✓

## Fields (3)

| Field | Type | Notes |
|---|---|---|
| `companyID` | integer | Must match the account ID of an account that is enabled for Co-Management. |
| `isPrimaryCoManagedResource` | boolean | The primary co-managed resource cannot refer to an inactive resource during create. During update, it cannot change to an inactive resource. If a resource is associated as the primary co-managed resource and then made inactive, the update will succeed if the primary co-managed resource has not changed. During update, only the isPrimaryComanagedResource field can be changed. |
| `resourceID` | integer | Must match the resource ID of a resource whose security level is of license type "Co-Managed Help Desk" |

