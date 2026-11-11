# InvoiceTemplates

Describes an Autotask Invoice Template that defines the content and appearance of an Autotask Invoice. Invoices include Billing Items that have been approved and posted and are being billed to a customer or presented for information purposes only. The template determines what account, billing item, tax and financial related details the Autotask user wants to include on the invoice, and how the output will be grouped and presented. Invoice templates are added through the UI in the Admin module: Contracts (and Billing) > Invoices > Templates .

- **Entity path:** `/atservicesrest/v1.0/InvoiceTemplates`
- **Capabilities:** create — · update — · query ✓ · delete —

## Fields (24)

| Field | Type |
|---|---|
| `coveredByBlockRetainerContractLabel` | string (50) |
| `coveredByRecurringServiceFixedPricePerTicketContractLabel` | string (50) |
| `currencyNegativeFormat` | string (10) |
| `currencyPositiveFormat` | string (10) |
| `dateFormat` | integer |
| `displayFixedPriceContractLabor` | boolean |
| `displayRecurringServiceContractLabor` | boolean |
| `displaySeparateLineItemForEachTax` | boolean |
| `displayTaxCategory` | boolean |
| `displayTaxCategorySuperscripts` | boolean |
| `displayZeroAmountRecurringServicesAndBundles` | boolean |
| `groupBy` | integer |
| `itemizeItemsInEachGroup` | integer |
| `name` | string (50) |
| `nonBillableLaborLabel` | string (50) |
| `numberFormat` | integer |
| `pageLayout` | integer |
| `pageNumberFormat` | integer |
| `paymentTerms` | integer |
| `rateCostExpression` | string (50) |
| `showGridHeader` | boolean |
| `showVerticalGridLines` | boolean |
| `sortBy` | integer |
| `timeFormat` | integer |

