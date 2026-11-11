# ChecklistLibraryChecklistItems

Describes list items added to a check list on an Autotask ticket or task. A checklist is an optional feature on the ticket or task detail page. It displays a numbered list of items to complete as work is done. The check list is visible only when items are added to it. This entity allows checklist items to be added, deleted, and updated via the API. A checklist can have no more than 100 checklist items.

- **Entity path:** `/atservicesrest/v1.0/ChecklistLibraryChecklistItems`
- **Capabilities:** create ✓ · update ✓ · query ✓ · delete ✓

## Fields (5)

| Field | Type | Notes |
|---|---|---|
| `checklistLibraryID` | integer | ChecklistLibraries |
| `isImportant` | boolean |  |
| `itemName` | string (600) |  |
| `knowledgebaseArticleID` | integer |  |
| `position` | integer |  |

