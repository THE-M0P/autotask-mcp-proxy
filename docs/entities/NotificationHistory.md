# NotificationHistory

Describes an Autotask Notification, as listed in the Notification History page. In the UI, users with Admin security level permission to access "Application-wide (Shared) Features" can access Notification History. From this page, you can view a list of notifications sent from Autotask in the previous 30 days.

- **Entity path:** `/atservicesrest/v1.0/NotificationHistory`
- **Capabilities:** create — · update — · query ✓ · delete —

## Fields (19)

| Field | Type |
|---|---|
| `companyID` | long |
| `entityNumber` | string (50) |
| `entityTitle` | string (2000) |
| `initiatingContactID` | long |
| `initiatingResourceID` | long |
| `isActive` | boolean |
| `isDeleted` | boolean |
| `isTemplateJob` | boolean |
| `notificationHistoryTypeID` | integer |
| `notificationSentTime` | datetime |
| `opportunityID` | long |
| `projectID` | long |
| `quoteID` | long |
| `recipientDisplayName` | string (200) |
| `recipientEmailAddress` | string (2000) |
| `taskID` | long |
| `templateName` | string (100) |
| `ticketID` | long |
| `timeEntryID` | long |

