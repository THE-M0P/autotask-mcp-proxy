# BillingItemApprovalLevels

The BillingItemApprovalLevels entity describes a multi-level approval record for an Autotask time entry. It allows developers to use the API to implement multi-tier approval for Autotask time entries. This option is only available through the REST API.

- **Entity path:** `/atservicesrest/v1.0/BillingItemApprovalLevels`
- **Capabilities:** create ✓ · update — · query ✓ · delete —

## Fields (4)

| Field | Type | Notes |
|---|---|---|
| `approvalDateTime` | datetime | When the BillingItemApprovalLevels entity is created, the TimeEntry.BillingApprovalLevelMostRecent field is updated, but approvalDateTime and approvalResourceID are not. Instead, the approvalDateTime and approvalResourceID fields are editable on the TimeEntry entity. Workaround: If you do want these fields updated, you could make the call to create the BillingItemApprovalLevel and then follow that call up with an update to the TimeEntry to set the BillingApprovalDateTime and BillingApprovalResourceID fields. |
| `approvalLevel` | integer |  |
| `approvalResourceID` | integer |  |
| `timeEntryID` | integer |  |

