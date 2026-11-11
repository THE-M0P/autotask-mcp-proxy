# TimeEntries

Describes an Autotask Time Entry. A time entry allows an Autotask resource to enter time against a Ticket or Task and to enter General or Regular time, for example, in-house meeting, travel, or training time. Users enter time through a number of modules including Home, Contracts, CRM, Projects, Service Desk, and Timesheets.

- **Entity path:** `/atservicesrest/v1.0/TimeEntries`
- **Capabilities:** create ✓ · update ✓ · query ✓ · delete ✓
- **Parent:** None
- **Children:** TimeEntries

## Access URLs

- `TimeEntries/query (GET, POST)`
- `TimeEntries/{id} (GET, DELETE)`
- `TimeEntries/query/count (GET, POST)`
- `TimeEntries (PUT, POST, PATCH)`
- `TimeEntries/entityInformation (GET)`
- `TimeEntries/entityInformation/fields (GET)`
- `TimeEntries/entityInformation/userDefinedFields (GET)`

## Fields (32)

| Field | Type | Notes |
|---|---|---|
| `billingCodeID` | integer | billingCodeID must reference an active Work Type (General) allocation code. A General TimeEntry cannot be created with an billingCodeID unless that billingCodeID matches the internalBillingCodeID. If no billingCodeID is provided for a time entry of type GeneralActivity or InternalActivity, or the billingCodeID does not equal an internalBillingCodeID, the API will set the billingCodeID to the internalBillingCodeID. |
| `contractID` | integer | contractID must reference a contract that is active for the associated account or its parent. If the contract specified on the time entry excludes a Role or billingCodeID (Work Type) specified on the time entry, the default exclusion contract is applied. If the original contract does not specify a default exclusion contract, no contract will be applied. If a time entry is created or updated with a contractID and the ticket's sub-issue type is excluded on the contract, then the time entry's contractID will be updated to that of the exclusion contract, if it exists. If it does not exist, the contractID will be set to null. |
| `dateWorked` | datetime | The dateWorked field is required if no value is supplied for the startDateTime field. If the startDateTime is provided without a dateWorked value, the dateWorked value will equal the startDateTime value (converted to the time zone of the resource associated with the ResourceID). If the user viewing through the UI has a different timezone than the resource associated to the time entry (TimeEntries.resourceID), the Time Entry History dateWorked value may not appear to be correct. This behavior also occurs when time entries are made by the resource via the UI. The API will set this field's value to midnight for create and update calls. |
| `hoursWorked` | decimal | If TimeEntries.hoursWorked is left empty, the API calculates a value from the start & end times; that is, the value of TimeEntries.hoursWorked = TimeEntries.endDateTime – TimeEntries.startDateTime. |
| `impersonatorUpdaterResourceID` | integer | Even impersonating an administrator, the API user cannot delete a time entry the administrator created via proxy time entry for a third user. |
| `internalBillingCodeID` | integer | On a General time entry (not for task/tickets) the internalBillingCodeID value must be present and it must be of type "InternalActivity" or "GeneralActivity". "Floating Holiday" time is allowed only if the Floating Holidays system setting is enabled and the Floating Holiday internal allocation code is set to Display in Regular Time ( Admin > Site Setup > Company Setup > Internal Allocation Codes tab > Display in Regular Time is selected for Floating Holiday) "Personal Time" time is allowed only if the Personal Time system setting is enabled and the Personal Time internal allocation code is set to Display in Regular Time ( Admin > Site Setup > Company Setup > Internal Allocation Codes tab > Display in Regular Time is selected for Personal Time) "Sick Time" time is allowed only if the Sick Time system setting is enabled and the Sick Time internal allocation code is set to Display in Regular Time ( Admin > Site Setup > Company Setup > Internal Allocation Codes tab > Display in Regular Time is selected for Sick Time) "Vacation Time" time is allowed only if the Vacation Time system setting is enabled and the Vacation Time internal allocation code is set to Display in Regular Time ( Admin > Site Setup > Company Setup > Internal Allocation Codes tab > Display in Regular Time is selected Vacation Time) |
| `internalNotes` | string (32000) | When you use the API to update this field, the REST API will return the text-only version of its content. If you send the content back, the Rich Text and all images that it contains will be lost . You cannot use the API to create items that contain Rich Text, but you can add Rich Text later via a supported method. To learn more, refer to The Rich Text editor . |
| `isInternalNotesVisibleToComanaged` | boolean | This field defaults to false on create. |
| `isNonBillable` | boolean | A False value for TimeEntry.isNonBillable requires a TimeEntries.ticketID or TimeEntries.taskID value. Time entries that are not associated with a Task or Ticket must be non-billable. |
| `roleID` | integer | On General Time Entry (not for task/tickets) the roleID will always be the default role for the resource, regardless of what value is provided. For General Time Entry (not for task/tickets) the roleID defaults to the resource’s default roleID. A Task Time Entry must have a valid roleID for the Resource and Task. Ticket and Task Time Entries must include a roleID that is valid for the resourceID. The roleID must be the same as ticketID.assignedResourceroleID or taskID.assignedResourceroleID except when the system setting to "Allow users to modify Role when creating/editing time entries on tickets" is enabled. |
| `showOnInvoice` | boolean | A True value for showOnInvoice requires a ticketID or taskID value. Time entries that are not associated with a Task or Ticket cannot display on an invoice. showOnInvoice cannot = True if the contractID references a Flat Rate or Recurring Service type contract. |
| `status` |  | Time entries may not be created for a ticketID whereTicket.Status = isComplete if the Service Desk system setting "Prohibit time entry on tickets whose status is Complete" is enabled. |
| `summaryNotes` | string (32000) | A ticket time entry must have summaryNotes. The summaryNotes field is required on tasks whether or not the system setting "Require user to enter summary notes when entering project task time and regular time" is enabled. When you use the API to update this field, the REST API will return the text-only version of its content. If you send the content back, the Rich Text and all images that it contains will be lost . You cannot use the API to create items that contain Rich Text, but you can add Rich Text later via a supported method. To learn more, refer to The Rich Text editor . |
| `type` |  | To limit the return to only ticket time entries or only task time entries, you must specify a Type value. Picklist values for Type equal 2 (ITServiceRequest) for use with ticketID or 6 (ProjectTask) for use with taskID. |
| `billingApprovalDateTime` | datetime |  |
| `billingApprovalLevelMostRecent` | integer |  |
| `billingApprovalResourceID` | integer |  |
| `contractServiceBundleID` | long |  |
| `contractServiceID` | long |  |
| `createDateTime` | datetime |  |
| `creatorUserID` | integer |  |
| `endDateTime` | datetime |  |
| `hoursToBill` | decimal |  |
| `impersonatorCreatorResourceID` | integer |  |
| `lastModifiedDateTime` | datetime |  |
| `lastModifiedUserID` | integer |  |
| `offsetHours` | decimal |  |
| `resourceID` | integer |  |
| `startDateTime` | datetime |  |
| `taskID` | integer |  |
| `ticketID` | integer |  |
| `timeEntryType` | integer |  |

