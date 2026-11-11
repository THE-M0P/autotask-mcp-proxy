# Invoices

The Invoice entity describes an Autotask Invoice. In Autotask, Invoices include billing items that have been approved and posted and are being billed to a customer or presented for information purposes only. They are processed through the Autotask Contracts module ( Contracts > Invoices ). In the API, invoice line items are described by the BillingItems entity.

- **Entity path:** `/atservicesrest/v1.0/Invoices`
- **Capabilities:** create — · update ✓ · query ✓ · delete —

## Fields (22)

| Field | Type | Notes |
|---|---|---|
| `batchID` | integer |  |
| `comments` | string (2000) |  |
| `companyID` | integer | Companies |
| `createDateTime` | datetime |  |
| `creatorResourceID` | integer | Resources |
| `dueDate` | datetime |  |
| `fromDate` | datetime |  |
| `invoiceDateTime` | datetime |  |
| `invoiceEditorTemplateID` | integer | InvoiceTemplates |
| `invoiceNumber` | string (100) |  |
| `invoiceTotal` | decimal |  |
| `isVoided` | boolean |  |
| `orderNumber` | string (100) |  |
| `paidDate` | datetime |  |
| `paymentTerm` | integer |  |
| `taxGroup` | integer |  |
| `taxRegionName` | string (200) |  |
| `toDate` | datetime |  |
| `totalTaxValue` | decimal |  |
| `voidedByResourceID` | integer | Resources |
| `voidedDate` | datetime |  |
| `webServiceDate` | datetime |  |

