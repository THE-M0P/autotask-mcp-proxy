# ContactGroups

Describes an association of contacts, from one or more companies, that allows PSA users to send bulk email, and create notes and/or to-dos, simultaneously for all included contacts.

- **Entity path:** `/atservicesrest/v1.0/ContactGroups`
- **Capabilities:** create ✓ · update ✓ · query ✓ · delete ✓
- **Parent:** None
- **Children:** ContactGroupContacts

## Access URLs

- `ContactGroups/query (GET, POST)`
- `ContactGroups/{id} (GET, DELETE)`
- `ContactGroups/query/count (GET, POST)`
- `ContactGroups (PUT, POST, PATCH)`
- `ContactGroups/entityInformation (GET)`
- `ContactGroups/entityInformation/fields (GET)`
- `ContactGroups/entityInformation/userDefinedFields (GET)`

## Fields (2)

| Field | Type | Notes |
|---|---|---|
| `isActive` | boolean | An inactive ContactGroup cannot have contact associations added or removed. |
| `name` | string (100) | ContactGroup.name must be unique. |

