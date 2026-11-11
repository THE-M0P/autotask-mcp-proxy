# ExpenseReports

Describes Expense Reports created in Autotask and is used to submit expense line items for approval and reimbursement. This entity allows expense reports to be created, queried, and updated through the REST API.

- **Entity path:** `/atservicesrest/v1.0/ExpenseReports`
- **Capabilities:** create ✓ · update ✓ · query ✓ · delete —
- **Parent:** None
- **Children:** ExpenseReportAttachments

## Access URLs

- `ExpenseReports/query (GET, POST)`
- `ExpenseReports/{id} (GET)`
- `ExpenseReports/query/count (GET, POST)`
- `ExpenseReports (PUT, POST, PATCH)`
- `ExpenseReports/entityInformation (GET)`
- `ExpenseReports/entityInformation/fields (GET)`
- `ExpenseReports/entityInformation/userDefinedFields (GET)`

## Fields (18)

| Field | Type | Notes |
|---|---|---|
| `amountDue` | decimal | amountDue = the total of the reimbursement amounts of all expenses on the expense report in the internal currency, minus internalCurrencyCashAdvanceAmount for the expense report in the internal currency. |
| `internalCurrencyExpenseTotal` | decimal | internalCurrencyExpenseTotal = the total of all expense amounts on the expense report, in the internal currency. |
| `reimbursementCurrencyAmountDue` | decimal | reimbursementCurrencyAmountDue = the total of the reimbursement amounts of all expenses on the expense report in the reimbursement currency, minus the saved cash advance amount for the expense report in the reimbursement currency. The existing amountDue field will still contain the corresponding internal currency value. |
| `reimbursementCurrencyCashAdvanceAmount` | decimal | reimbursementCurrencyCashAdvanceAmount = the saved cash advance amount in the expense report's reimbursement currency. internalCurrencyCashAdvanceAmount = the saved cash advance amount in the corresponding internal currency amount. |
| `reimbursementCurrencyID` | integer | reimbursementCurrencyID = the reimbursement currency of the expense report. If no value is specified on create, internal currency is used. |
| `rejectionReason` | string (2048) | rejectionReason is valid when status = isReimbursable; it is required on create or update. |
| `status` | integer | status picklist options = In Progress, Awaiting Approval, Approved for Payment, Rejected, Paid, Transferred to QuickBooks. They cannot be changed in Autotask. |
| `submit` | boolean | Submit =1 (to effect submission) is only allowed if the current status is "In Process" or "Rejected" |
| `submitDate` | datetime | The submitDate field of the expenseReports entity is set to Null on create. When you make an update call that sets the submit field to true, the API will set the submitDate to match the time and date of the update call. |
| `submitterID` | integer | submitterID must = a valid resourceID. |
| `approvedDate` | datetime |  |
| `approverID` | integer |  |
| `departmentNumber` | string (50) |  |
| `internalCurrencyCashAdvanceAmount` | decimal |  |
| `name` | string (100) |  |
| `organizationalLevelAssociationID` | integer |  |
| `quickBooksReferenceNumber` | string (100) |  |
| `weekEnding` | datetime |  |

