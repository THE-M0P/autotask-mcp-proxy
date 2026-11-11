# ChecklistLibraries

The ChecklistLibraries entity describes a modular component that can be added to any ticket or task. It outlines the steps that must be performed to complete the ticket or task, and tracks the resource and date/time each step was completed.

- **Entity path:** `/atservicesrest/v1.0/ChecklistLibraries`
- **Capabilities:** create ✓ · update ✓ · query ✓ · delete ✓
- **Parent:** None
- **Children:** ChecklistLibraryChecklistItems

## Access URLs

- `ChecklistLibraries/query (GET, POST)`
- `ChecklistLibraries/{id} (GET, DELETE)`
- `ChecklistLibraries/query/count (GET, POST)`
- `ChecklistLibraries (PUT, POST, PATCH)`
- `ChecklistLibraries/entityInformation (GET)`
- `ChecklistLibraries/entityInformation/fields (GET)`
- `ChecklistLibraries/entityInformation/userDefinedFields (GET)`

## Fields (4)

| Field | Type |
|---|---|
| `description` | string (500) |
| `entityType` | integer |
| `isActive` | boolean |
| `name` | string (100) |

