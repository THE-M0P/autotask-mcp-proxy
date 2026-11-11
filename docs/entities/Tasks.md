# Tasks

Describes an Autotask Task. Tasks are associated with a Project and define work that must be done. Tasks can have one or more Resource assigned to them and can be scheduled for Service Calls. Autotask users manage Tasks through the Projects module and, when associated with a Service Call, through the Service Desk module or Dispatcher's Workshop.

- **Entity path:** `/atservicesrest/v1.0/Tasks`
- **Capabilities:** create ✓ · update ✓ · query ✓ · delete —
- **Parent:** Projects
- **Children:** ProjectNotes, Tasks, TaskAttachments, TaskPredecessors, TaskSecondaryResources

## Access URLs

- `Tasks/query (GET, POST)`
- `Tasks/{id} (GET)`
- `Tasks/query/count (GET, POST)`
- `Tasks/entityInformation (GET)`
- `Tasks/entityInformation/fields (GET)`
- `Tasks/entityInformation/userDefinedFields (GET)`

## Fields (35)

| Field | Type | Notes |
|---|---|---|
| `billingCodeID` | integer | billingCodeID must reference a Work Type allocation code. billingCodeID and departmentID are not required unless the task has a primary or secondary Resource assigned. billingCodeID and Department ID are only required as follows: If the task has a Primary Resource (assignedResourceID) assigned, an billingCodeID must be provided. departmentID is set to the Primary Resource’s Department. If the task has only a secondary resource assigned, then both billingCodeID and departmentID must be provided. NOTE Although the secondary resource is not exposed via the API, the API must still respect the billingCodeID and departmentID requirement. |
| `canClientPortalUserCompleteTask` | boolean | If no value is provided for isVisibleInClientPortal and canClientPortalUserCompleteTask, they both default to False. If isVisibleInClientPortal is False, then canClientPortalUserCompleteTask will override to False. |
| `companylocationID` | integer | During a create call or when changing the value during an update, the account location must be active AND belong to the project's account. During create, if a value is not supplied then the field will default to the account's primary location, if one exists. Otherwise, a location will not be assigned. |
| `completedByType` | integer | creatorResourceID and completedByResourceID can return a contactID or a resourceID. creatorType and completedByType specify whether the task was created or completed by a Contact or a Resource. |
| `creatorType` | integer | creatorResourceID and completedByResourceID can return a contactID or a resourceID. creatorType and completedByType specify whether the task was created or completed by a Contact or a Resource. |
| `endDateTime` | datetime | To maintain consistency with the Autotask UI, Task.endDateTime ignores any time component passed in. A time value of midnight will be applied to any Task end date provided. End date can be the same day as start date. |
| `isVisibleInClientPortal` | boolean | If no value is provided for isVisibleInClientPortal and canClientPortalUserCompleteTask, they both default to False. If isVisibleInClientPortal is False, then canClientPortalUserCompleteTask will override to False. |
| `lastActivityPersonType` | integer | lastActivityPersonType values indicating whether the initiator of the last activity was a resource or a contact. |
| `priority` | integer | The Priority Order field in the UI corresponds to the priority integer field in the API. The priority field is not required. If no value is provided on create or update, the value defaults to 0. |
| `priorityLabel` | integer | The Priority field in the UI corresponds to the priorityLabel picklist field in the API. |
| `projectID` | integer | On update, projectID cannot be changed. An error will be returned. projectID is validated only during create or update. |
| `role` |  | Autotask allows a role to be inactivated. An attempt to create a Task using a Resource + role combination with an inactive role will trigger an error. You can update an existing Task if the Resource + role combination uses an inactive role. |
| `status` | integer | When Task.status is set to isComplete (picklist value 5), the value of Task.remainingHours is set to 0 and cannot be updated. |
| `assignedResourceID` | integer | Resources |
| `assignedResourceroleID` | integer | Roles |
| `completedByResourceID` | integer | Resources |
| `completedDateTime` | datetime |  |
| `createDateTime` | datetime |  |
| `creatorResourceID` | integer | Resources |
| `departmentID` | integer |  |
| `description` | string (8000) |  |
| `estimatedHours` | decimal |  |
| `externalID` | string (50) |  |
| `hoursToBeScheduled` | decimal |  |
| `isTaskBillable` | boolean |  |
| `lastActivityDateTime` | datetime |  |
| `lastActivityResourceID` | integer | Resources |
| `phaseID` | integer | Phases |
| `purchaseOrderNumber` | string (50) |  |
| `remainingHours` | decimal |  |
| `startDateTime` | datetime |  |
| `taskCategoryID` | integer |  |
| `taskNumber` | string (50) |  |
| `taskType` | integer |  |
| `title` | string (255) |  |

