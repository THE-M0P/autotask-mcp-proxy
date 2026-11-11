# NotificationHistory

Describes an Autotask Notification, as listed in the Notification History page. In the UI, users with Admin security level permission to access "Application-wide (Shared) Features" can access Notification History. From this page, you can view a list of notifications sent from Autotask in the previous 30 days.

- **Entity path:** `/atservicesrest/v1.0/NotificationHistory`
- **Capabilities:** create — · update — · query ✓ · delete —

## Fields (19)

| Field | Type | Notes |
|---|---|---|
| `companyID` | long | Companies |
| `entityNumber` | string (50) |  |
| `entityTitle` | string (2000) |  |
| `initiatingContactID` | long | Contacts |
| `initiatingResourceID` | long | Resources |
| `isActive` | boolean |  |
| `isDeleted` | boolean |  |
| `isTemplateJob` | boolean |  |
| `notificationHistoryTypeID` | integer |  |
| `notificationSentTime` | datetime |  |
| `opportunityID` | long | Opportunities |
| `projectID` | long | Projects |
| `quoteID` | long | Quotes |
| `recipientDisplayName` | string (200) |  |
| `recipientEmailAddress` | string (2000) |  |
| `taskID` | long | Tasks |
| `templateName` | string (100) |  |
| `ticketID` | long | Tickets |
| `timeEntryID` | long | TimeEntries |

