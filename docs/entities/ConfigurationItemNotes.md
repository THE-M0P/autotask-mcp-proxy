# ConfigurationItemNotes

Describes notes created by an Autotask user and associated with an Asset entity. Autotask users manage Asset notes on Assets.

- **Entity path:** `/atservicesrest/v1.0/ConfigurationItemNotes`
- **Capabilities:** create ✓ · update ✓ · query ✓ · delete —

## Fields (9)

| Field | Type | Notes |
|---|---|---|
| `configurationItemID` | integer | Editable on creation of the ConfigurationItemNote (but not afterword) |
| `createDateTime` | datetime |  |
| `creatorResourceID` | integer |  |
| `description` | string (32000) |  |
| `impersonatorCreatorResourceID` | integer |  |
| `impersonatorUpdaterResourceID` | integer |  |
| `lastActivityDate` | datetime |  |
| `noteType` | integer |  |
| `title` | string (250) |  |

