# DeletedTaskActivityLogs

This entity contains the records for the Deleted Task Activity journal located in the Autotask application at Left Navigation Menu > Admin > Features and Settings > Projects & Tasks > Deleted Task Activity Log . The Deleted Task Activity log enables you to view a listing of task time entries, notes, and attachments that were deleted from your system.

- **Entity path:** `/atservicesrest/v1.0/DeletedTaskActivityLogs`
- **Capabilities:** create — · update — · query ✓ · delete —

## Fields (11)

| Field | Type | Notes |
|---|---|---|
| `activityDateTime` | datetime |  |
| `createdByResourceID` | integer | Resources |
| `deletedByResourceID` | integer | Resources |
| `deletedDateTime` | datetime |  |
| `endDateTime` | datetime |  |
| `hoursWorked` | decimal |  |
| `noteOrAttachmentTitle` | string (255) |  |
| `startDateTime` | datetime |  |
| `taskID` | integer | Tasks |
| `taskNumber` | string (50) |  |
| `typeID` | integer |  |

