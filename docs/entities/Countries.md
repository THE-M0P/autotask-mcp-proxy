# Countries

Describes a Country as defined in the Autotask CRM module. The Countries entity is referenced by the Company, Contact, and Sales Order entities and specifies the preferred display name for the associated country as well as the default address format and invoice template to be used by accounts, contacts, and sales orders that reference the Country ID.

- **Entity path:** `/atservicesrest/v1.0/Countries`
- **Capabilities:** create — · update ✓ · query ✓ · delete —

## Fields (9)

| Field | Type | Notes |
|---|---|---|
| `purchaseOrderTemplateID` | integer | If purchaseOrderTemplateID is null in the database, the field will default to the system default purchase order template ID during query. |
| `addressFormatID` | long |  |
| `countryCode` | string (2) |  |
| `displayName` | string (100) |  |
| `invoiceTemplateID` | integer | InvoiceTemplates |
| `isActive` | boolean |  |
| `isDefaultCountry` | boolean |  |
| `name` | string (50) |  |
| `quoteTemplateID` | integer | QuoteTemplates |

