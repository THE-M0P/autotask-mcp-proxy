# CompanyTeams

Describes the resources associated with a Company Team. In Autotask, the account team associates resources with an account. The resources then have access to the account data when their security level allows account access at the Mine level.

- **Entity path:** `/atservicesrest/v1.0/CompanyTeams`
- **Capabilities:** create ✓ · update — · query ✓ · delete ✓

## Fields (3)

| Field | Type | Notes |
|---|---|---|
| `resourceID` | long | resourceID cannot reference an API Only user or a Co-managed resource. |
| `isAssociatedAsComanaged` | boolean | When this = true, the API cannot be used to remove/break/modify that record. |
| `companyID` | long | Companies |

