# BillingCodes

The BillingCodes entity describes an Autotask Allocation Code (called Billing Code in the UI). An allocation code represents a billing item category. There are six types of allocation codes: Work Types, Material, Internal Time, Expense Categories, Recurring Contract Service, and Milestone. Administrators add and manage allocation codes through the Admin module ( Admin >Site Setup > Billing Codes ).

- **Entity path:** `/atservicesrest/v1.0/BillingCodes`
- **Capabilities:** create — · update — · query ✓ · delete —

## Fields (14)

| Field | Type | Notes |
|---|---|---|
| `afterHoursWorkType` | integer | This field contains the ID of the BillingCode that is set as this BillingCode's after-hours work type. It may never contain a value for BillingCodes of Types other than 1 (work types). |
| `billingCodeType` | integer |  |
| `department` | integer |  |
| `description` | string (500) |  |
| `externalNumber` | string (100) |  |
| `generalLedgerAccount` | integer |  |
| `isActive` | boolean |  |
| `isExcludedFromNewContracts` | boolean |  |
| `markupRate` | decimal |  |
| `name` | string (200) |  |
| `taxCategoryID` | integer |  |
| `unitCost` | decimal |  |
| `unitPrice` | decimal |  |
| `useType` | integer |  |

