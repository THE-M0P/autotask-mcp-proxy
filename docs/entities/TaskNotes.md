# TaskNotes

Describes notes created by an Autotask user and associated with a Task entity. Autotask users manage Task Notes on Project Tasks. Users can add notes to a new or existing task.

- **Entity path:** `/atservicesrest/v1.0/TaskNotes`
- **Capabilities:** create ✓ · update ✓ · query ✓ · delete —

## Fields (11)

| Field | Type | Notes |
|---|---|---|
| `description` | string (3200) | When you use the API to update this field, the REST API will return the text-only version of its content. If you send the content back, the Rich Text and all images that it contains will be lost . You cannot use the API to create items that contain Rich Text, but you can add Rich Text later via a supported method. To learn more, refer to The Rich Text editor . |
| `title` | string (250) | The title field will be required if the "Require titles on task notes" Task Category setting is enforced. |
| `createDateTime` | datetime |  |
| `createdByContactID` | integer |  |
| `creatorResourceID` | integer |  |
| `impersonatorCreatorResourceID` | integer |  |
| `impersonatorUpdaterResourceID` | integer |  |
| `lastActivityDate` | datetime |  |
| `noteType` | integer |  |
| `publish` | integer |  |
| `taskID` | integer |  |

