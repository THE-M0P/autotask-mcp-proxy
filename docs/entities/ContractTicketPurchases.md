# ContractTicketPurchases

Describes a payment amount applied to the purchase of (or pre-payment for ) one or more Service Desk Tickets through a Per Ticket Contract. With a Per Ticket contract, a customers pre-pays for a set of Service Desk tickets, and each ticket completed under that contract consumes one ticket purchase, no matter how much labor is required to resolve the issue. The contract maintains the balance of unconsumed ticket purchases.

- **Entity path:** `/atservicesrest/v1.0/ContractTicketPurchases`
- **Capabilities:** create ✓ · update ✓ · query ✓ · delete —

## Fields (12)

| Field | Type | Notes |
|---|---|---|
| `contractID` | long | contractID must reference a Per Ticket type Contract. |
| `perTicketRate` | decimal | If the multi-currency Installed Module is enabled, the following fields will return the relevant Customer Currency values instead of the Internal Currency values: perTicketRate. perTicketRate must be >= 0. |
| `ticketsPurchased` | decimal | On update, ticketsPurchased must be >= ticketsUsed |
| `datePurchased` | datetime |  |
| `endDate` | datetime |  |
| `invoiceNumber` | string (50) |  |
| `isPaid` | boolean |  |
| `paymentNumber` | string (50) |  |
| `paymentType` | integer |  |
| `startDate` | datetime |  |
| `status` | integer |  |
| `ticketsUsed` | decimal |  |

