# Autotask core objects — when to use which

The objects people ask about, and how they relate. Get this right before
calling tools. (Facts verified against the Autotask REST API docs, 2026-11-11;
when in doubt about an exact field/URL, discover it live — see
`schedules-and-recurring-work.md`.)

## Companies & Contacts
- **Company** = a customer account. One company has many contacts, tickets,
  contracts, projects.
- **Contact** = a person at a company. Notes and tickets attach to contacts.

## Tickets (the workhorse)
- **Ticket** = a unit of support work. Has a priority (P1–P5), status
  (Open/In Progress/Resolved/Closed), a description, and optional:
  - **Notes** (`create_ticket_note`) — internal/external commentary
  - **Charges** (`create_ticket_charge`) — billable time/materials against the ticket
  - **Attachments** (`create_ticket_attachment`)
  - **Checklist items** (`create_ticket_checklist_item`) — the "checkboxes".
    Create with `itemName` + `position`; tick them off with
    `update_ticket_checklist_item` (`isCompleted: true`). Max 40 items per
    ticket. **Tasks also have checklists** in Autotask (max 100), but there is
    no typed tool for them — use `autotask_raw_request` (see
    `schedules-and-recurring-work.md`).
- When a user says "raise a ticket" / "log an issue" / "create a request" →
  `autotask_create_ticket`.

## Service calls
- **Service call** = an on-site (or remote) visit, often tied to a contract.
  Has its own **service call tickets** and **resource assignments**
  (`create_service_call_ticket`, `create_service_call_ticket_resource`).
- Ticket vs service call: a *ticket* is the work item; a *service call* is a
  scheduled visit that may generate tickets. If the user mentions "site
  visit", "on-site", "technician dispatch" → service call.

## Projects, phases, tasks (the project "Schedule" tab)
- **Project** (`create_project`) = a named body of work for a company
  (migration, audit, build). Has dates, a lead, estimated hours.
- **Phase** (`create_phase`) = a stage within a project, with its own due date.
- **Task** (`create_task`) = a unit of work within a project/phase, with an
  assignee, start/end dates, estimated hours. `search_tasks` finds them.
- **Subtasks** (the 1 → 1.1 hierarchy in the Schedule tab) = tasks with a
  `parentTaskID`. The typed `create_task` does **not** take `parentTaskID` —
  create subtasks via `autotask_raw_request` (`POST /Tasks` with `parentTaskID`).
- **Dependencies** between schedule items = the `TaskPredecessors` entity
  (raw_request only).
- **Task checklists** (checkboxes on tasks/subtasks, one indent level) exist in
  the API (`ChecklistLibraries` model, max 100 items) — raw_request only.
- So: project + phases + top-level tasks = typed tools; subtasks, dependencies
  and task checklists = `autotask_raw_request`. See
  `schedules-and-recurring-work.md` for the recipes.

## Contracts
- **Contract** = a recurring service agreement (MSP subscription). Has
  services, units, recurring lines. `search_contracts`,
  `list_expiring_contracts`, `create_contract`.

## Time & money
- **Time entry** (`create_time_entry`) = logged hours against a ticket/task,
  by a resource. This is what "log 2 hours on T123456" means.
- **Expense report / expense item** = out-of-pocket costs.
- **Invoice** = read-only here (`search_invoices`, `get_invoice_details`).
  Invoices are generated from charges, not created by hand.

## Schedules (recurring work)
See `schedules-and-recurring-work.md` — there is **no typed tool** for
schedules; use `autotask_raw_request`.

## Quick disambiguation
| User says | Use |
|---|---|
| "log time on the ticket" | `create_time_entry` |
| "add a note" | `create_ticket_note` (or `create_company_note`) |
| "checkboxes / checklist" on a ticket | ticket checklist items (typed) |
| "checkboxes / checklist" on a task | task checklist → `raw_request` |
| "subtask / 1.1 under task 1" | `raw_request` POST /Tasks with parentTaskID |
| "recurring / monthly / schedule" | Schedules entity → `raw_request` |
| "migration / build / audit project" | `create_project` (+ phases + tasks) |
| "site visit / dispatch" | `create_service_call` |
| "subscription / MSP contract" | `search_contracts` / `create_contract` |
