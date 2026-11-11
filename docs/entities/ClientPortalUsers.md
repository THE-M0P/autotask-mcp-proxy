# ClientPortalUsers

Describes an Autotask Company Contact that has been assigned access to the Client Access Portal. In the Autotask Interface, Company Contacts are enabled as Client Portal Users in Admin > Client Access Portal > Manage Companies > select Company > "Manage users for this account" or from the Client Portal tab of the Edit Contact window.

- **Entity path:** `/atservicesrest/v1.0/ClientPortalUsers`
- **Capabilities:** create ✓ · update ✓ · query ✓ · delete —

## Fields (8)

| Field | Type | Notes |
|---|---|---|
| `contactID` | integer | contactID cannot be modified once created. |
| `userName` | string (200) | userName must be unique. |
| `securityLevel` | integer | securityLevel refers to Client Access Portal security levels. There are two Client Portal user security levels that allow access to Taskfire features: Resource (value = 4) and Administrator (value = 5). Query the ClientPortalUser entity for users with these security levels to return users that have access to Taskfire. The ClientPortalUsers entity does not allow assignment of Taskfire securityLevel values to contacts that do not have Taskfire access. |
| `password` | string (50) | Required on create Not required on update performed on existing ClientPortalUser. If password is set, then we will store in DB. Query will never return the password field as part of the entity returned (it will always be null). To update for an existing entity, set the password field to the new password to be stored on update. Must enforce the following restrictions: 1) allows printable characters except single quotes, 2) must be between 5-50 characters, 3) cannot contain spaces. |
| `dateFormat` | integer |  |
| `isClientPortalActive` | boolean |  |
| `numberFormat` | integer |  |
| `timeFormat` | integer |  |

