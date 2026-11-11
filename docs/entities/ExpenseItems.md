# ExpenseItems

Describes a line item associated with an Expense Report entity. It allows expense line items to be created, queried, and updated through the API.

- **Entity path:** `/atservicesrest/v1.0/ExpenseItems`
- **Capabilities:** create ✓ · update ✓ · query ✓ · delete —

## Fields (28)

| Field | Type | Notes |
|---|---|---|
| `companyID` | integer | When a ticketID or projectID are set, the companyID is calculated based on the ticket or project. If you set an companyID that differs from the calculated companyID, an error is returned. When a taskID is set, the companyID and projectID are calculated based on the task and associated project. If you set an companyID or projectID that differs from the calculated companyID and Project ID, an error is returned. If no companyID is supplied, the expense is associated to the "0" account. |
| `currencyID` |  | If no currencyID is specified, the ExpenseItem will use the Currency associated with the Company associated with ExpenseItem.companyID. |
| `entertainmentLocation` | string (128) | entertainmentLocation is required when Category = Entertainement Expense |
| `internalCurrencyExpenseAmount` | decimal | internalCurrencyExpenseAmount represents the internal currency value of the expenseCurrencyExpenseAmount. |
| `expenseCategory` | integer | An inactive expenseCategory cannot be specified when creating an ExpenseItem or updating the expenseCategory field. An ExpenseItem with an inactive expenseCategory can be updated. PaymentCategory options are configurable in the Autotask Admin module. Use REST API GET call to retrieve the list for a specific implementation. |
| `expenseReportID` | integer | If Organizational Structure is enabled in Autotask, access to Expense Items is subject to the user's Organizational Structure Line of Business assignments and the Line of Business associated with ExpenseItem.expenseReportID, if any. |
| `paymentType` | integer | paymentType picklist options = American Express, Cash, Company Check, Company Credit Card, Mastercard, Other, Personal Check, Visa. These picklist options are not configurable. isReimbursable status is updated from the corresponding attribute of the current paymentType every time the ExpenseItem entity is touched. |
| `expenseCurrencyExpenseAmount` | decimal | expenseCurrencyExpenseAmount specifies the amount of the expense in the currency it was received. internalCurrencyExpenseAmount now represents the internal currency value of the expenseCurrencyExpenseAmount. If no expenseCurrencyExpenseAmount is specified for the ExpenseItem, the field will be populated by the amount equal to internalCurrencyExpenseAmount divided by the exchangeRate of the specified currency (expenseCurrencyID). |
| `internalCurrencyReimbursementAmount` | decimal | internalCurrencyReimbursementAmount = the reimbursement amount for this expense in the internal currency. This field impacts databases with multi-currency enabled. If this value is not supplied on creation of an ExpenseItem, the field will be populated with the internalCurrencyExpenseAmount value (the expense amount of the expense in the internal currency). If ExpenseItem.paymentType is not reimbursable, this value will be 0 and cannot be updated. |
| `reimbursementCurrencyReimbursementAmount` | decimal | reimbursementCurrencyReimbursementAmount = the reimbursement amount for this expense in the reimbursement currency of ExpenseItem.expenseReportID (the expense's expense report.) This field impacts databases with multi-currency enabled. If this value is not supplied on creation of an ExpenseItem, the field will be populated by dividing the internalCurrencyExpenseAmount by the exchangeRate of the ReimbursementCurrency associated with the ExpenseItem's ExpenseReport. If the ExpenseItem.paymentType is not reimbursable, this value will be 0 and cannot be updated. If this value is edited, the internalCurrencyReimbursementAmount will be recalculated by multiplying the new value by the exchangeRate of the ReimbursementCurrency associated with the ExpenseItem's ExpenseReport. If both values are supplied or edited at the same time, we will take the internalCurrencyReimbursementAmount as the correct one and calculate the reimbursementCurrencyReimbursementAmount. The supplied reimbursementCurrencyReimbursementAmount will be discarded. |
| `workType` | integer | workType picklist options are configurable in the Autotask Admin module. Use REST API GET call to retrieve the list for a specific implementation. |
| `description` | string (128) |  |
| `destination` | string (128) | See Conditions |
| `expenseCurrencyID` | integer | Currencies |
| `expenseDate` | datetime |  |
| `gLCode` | String(20) |  |
| `haveReceipt` | boolean |  |
| `isBillableToCompany` | boolean |  |
| `isReimbursable` | boolean |  |
| `isRejected` | boolean |  |
| `miles` | decimal | See Conditions |
| `odometerEnd` | decimal |  |
| `odometerStart` | decimal |  |
| `origin` | string (128) | See Conditions |
| `projectID` | integer | Projects |
| `purchaseOrderNumber` | string (50) |  |
| `taskID` | integer | Tasks |
| `ticketID` | integer | Tickets |

