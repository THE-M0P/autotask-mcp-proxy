# Time entries & billing

## Logging time
- `create_time_entry` logs hours **as the calling user** (impersonation — see
  the agent's identity model). Required: the ticket (or task) and the hours;
  include a description of what was done.
- Time entries attach to **tickets** or **tasks**. For ticket work, use the
  ticket ID.
- "Log 2h on T123456" → `create_time_entry` with ticketId + 2.0 hours + a
  short description. Confirm with the user before logging if the description
  is unclear.

## Charges vs time entries
- A **time entry** is the record of work done.
- A **charge** (`create_ticket_charge`) is the *billable* line on a ticket
  (time or materials, at a rate, against a contract/billing item).
- Logging time and creating a charge are separate steps; many MSPs log time
  first and let billing run from charges. When the user says "bill the time",
  create the charge; when they say "log time", create the time entry.

## Invoices
- Read-only in this toolbox: `search_invoices`, `get_invoice_details`.
- Invoices are generated from charges — never "create" an invoice by hand here.

## Rates & billing items
- `search_billing_items` finds the billable rate cards.
- `get_billing_item` for details. Use these when the user asks "what do we
  charge for X?" before creating a charge.
