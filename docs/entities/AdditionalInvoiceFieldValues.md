# AdditionalInvoiceFieldValues

Describes the values for custom Additional Invoice Fields that users can add to Autotask for use with Autotask Invoice Templates. Autotask invoice templates define the appearance and content of an invoice generated in Autotask. Users can add Additional Invoice Fields as variables to the template. The user can then specify a value for the field(s) when one or more invoices are processed and that value will apply to all invoices for that session.

- **Entity path:** `/atservicesrest/v1.0/AdditionalInvoiceFieldValues`
- **Capabilities:** create — · update — · query ✓ · delete —

## Fields (3)

| Field | Type |
|---|---|
| `additionalInvoiceFieldID` | long |
| `fieldValue` | string (100) |
| `invoiceBatchID` | long |

