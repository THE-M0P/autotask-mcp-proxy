# ActionTypes

Describes an Action Type assigned to a CRM Note or To-Do. The Action Type specifies the type of activity scheduled by the to-do or associated with the note. The View associated with the Action Type controls where in Autotask the user can view the note or to-do.

- **Entity path:** `/atservicesrest/v1.0/ActionTypes`
- **Capabilities:** create ✓ · update ✓ · query ✓ · delete ✓

## Fields (4)

| Field | Type |
|---|---|
| `isActive` | boolean |
| `isSystemActionType` | boolean |
| `name` | string (32) |
| `view` | integer |

