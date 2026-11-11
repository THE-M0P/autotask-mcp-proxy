# QuoteTemplates

Describes an Autotask Quote Template that defines the content and appearance of an Autotask Quote. Quotes list labor, products, services, and miscellaneous items and their suggested prices. They are presented to a customer when negotiating an Opportunity. The template determines what account, quote item, tax and financial related details the Autotask user wants to include on the invoice, and how the output will be presented. Grouping is determined by the associated Quote entity. Quote templates are added through the UI under CRM > Tools/Setup > Quote Templates .

- **Entity path:** `/atservicesrest/v1.0/QuoteTemplates`
- **Capabilities:** create — · update — · query ✓ · delete —

## Fields (19)

| Field | Type |
|---|---|
| `calculateTaxSeparately` | boolean |
| `createDate` | datetime |
| `createdBy` | integer |
| `currencyNegativeFormat` | string (10) |
| `currencyPositiveFormat` | string (10) |
| `dateFormat` | integer |
| `description` | string (200) |
| `displayTaxCategorySuperscripts` | boolean |
| `isActive` | boolean |
| `lastActivityBy` | integer |
| `lastActivityDate` | datetime |
| `name` | string (50) |
| `numberFormat` | integer |
| `pageLayout` | integer |
| `pageNumberFormat` | integer |
| `showEachTaxInGroup` | boolean |
| `showGridHeader` | boolean |
| `showTaxCategory` | boolean |
| `showVerticalGridLines` | boolean |

