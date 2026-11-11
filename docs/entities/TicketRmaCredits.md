# TicketRmaCredits

Describes the refund/credit charge that is created when the RMA is set as Authorized on a ticket with the RMA ticket category.

- **Entity path:** `/atservicesrest/v1.0/TicketRmaCredits`
- **Capabilities:** create ✓ · update ✓ · query ✓ · delete ✓

## Fields (4)

| Field | Type | Notes |
|---|---|---|
| `creditAmount` | decimal | If multi-currency functionality is enabled in the user's system, this value will be represented in the currency of the account of the associated RMA ticket. This value will be used to set the billable amount of the charge created when the associated ticket's RMA status is set to "Authorized." This value may be 0, but may not be negative. This value may not be greater than 999,999,999.99. |
| `internalCurrencyCreditAmount` | decimal | If multi-currency functionality is enabled for your database, the creditAmount is converted to your internal currency. If it is not enabled, it will match the value of the creditAmount field. |
| `creditDetails` | text (2000) | This value will be used to set the description of the charge created when the associated ticket's RMA status is set to Authorized . |
| `ticketID` | integer | A TicketRmaCredit may only be created with a given ticketID if the referenced ticket currently has the RMA ticket category. However, it may exist with the ticketID of a ticket that is no longer of ticket category "RMA", since the ticket category of an RMA ticket may be changed. Only one TicketRmaCredit can be associated with a ticket. |

