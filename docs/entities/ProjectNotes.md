# ProjectNotes

Describes notes created by an Autotask user and associated with a Project entity. Autotask users manage Project Notes through the Notes option accessed through the Project Menu on the Project Summary page.

- **Entity path:** `/atservicesrest/v1.0/ProjectNotes`
- **Capabilities:** create ✓ · update ✓ · query ✓ · delete —

## Fields (11)

| Field | Type | Notes |
|---|---|---|
| `description` | string (3200) | When you use the API to update this field, the REST API will return the text-only version of its content. If you send the content back, the Rich Text and all images that it contains will be lost . You cannot use the API to create items that contain Rich Text, but you can add Rich Text later via a supported method. To learn more, refer to The Rich Text editor . |
| `createDateTime` | datetime |  |
| `createdByContactID` | integer |  |
| `creatorResourceID` | integer |  |
| `impersonatorCreatorResourceID` | integer |  |
| `impersonatorUpdaterResourceID` | integer |  |
| `lastActivityDate` | datetime |  |
| `noteType` | integer |  |
| `projectID` | integer |  |
| `publish` | integer |  |
| `title` | string (250) |  |

