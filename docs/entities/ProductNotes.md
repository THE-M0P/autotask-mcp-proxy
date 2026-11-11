# ProductNotes

Describes notes created by an Autotask user and associated with a Product entity.

- **Entity path:** `/atservicesrest/v1.0/ProductNotes`
- **Capabilities:** create ✓ · update ✓ · query ✓ · delete —

## Fields (8)

| Field | Type | Notes |
|---|---|---|
| `creatorResourceID` | integer | Represents the resource ID of the creator of the note; if you create the note through impersonation, the field will represent the impersonated resource |
| `description` | string (32000) | Represents the note's description; maximum of 32,000 characters |
| `productID` | integer | Represents the ID of the product to which this note is associated; editable on creation of the ProductNote (but not afterward) |
| `title` | string (250) | Represents the title of the note; maximum of 250 characters |
| `createDateTime` | datetime |  |
| `impersonatorCreatorResourceID` | integer |  |
| `impersonatorUpdaterResourceID` | integer | Resource |
| `lastActivityDate` | datetime |  |

