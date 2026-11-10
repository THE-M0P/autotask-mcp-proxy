# Schedules, project schedules & recurring work

Three different things people call a "schedule" — pick the right one:

1. **Project schedule** = the Schedule tab on a project: tasks, subtasks
   (1 → 1.1), dependencies, task checklists. (Section below.)
2. **Recurring schedule** = Autotask's Schedules entity ("monthly patch
   window"). (Section after that.)
3. **Dated one-off sequence** = just dated tasks in a project — all typed
   tools, no raw_request needed.

## Project schedule: tasks, subtasks, dependencies, task checklists

Typed tools cover: `create_project`, `create_phase`, `create_task`,
`search_tasks`. Everything deeper in the Schedule tab needs
`autotask_raw_request`:

- **Subtasks** (the 1 → 1.1 hierarchy): `POST /Tasks` with a body like:
  ```json
  {
    "projectID": 123,
    "parentTaskID": 456,
    "title": "1.1 Configure DNS",
    "startDateTime": "2026-12-01T09:00:00",
    "endDateTime": "2026-12-01T12:00:00",
    "estimatedHours": 2.0
  }
  ```
  (The typed `create_task` has no `parentTaskID` parameter — that's why.)
- **Dependencies** between schedule items: the `TaskPredecessors` child
  entity of Tasks (`POST /Tasks/{id}/Predecessors` — verify the exact child
  URL with entityInformation first, below).
- **Task checklists** (checkboxes on a task/subtask, one indent level, max
  100 items): the API models these via `ChecklistLibraries` (reusable
  templates) + `ChecklistLibraryChecklistItems` (items: `itemName`,
  `position`, `isImportant`). Ticket checklists (max 40) are the typed
  `*_ticket_checklist_item` tools.

### Discover the exact shape at runtime (important!)

Field names and child URLs vary per Autotask implementation. Before a
raw_request you're unsure about, query the entity's own metadata:

- `GET /Tasks/entityInformation` — all fields for Tasks in THIS tenant
- `GET /Tasks/entityInformation/fields` — field details
- `GET /ChecklistLibraries/entityInformation` — same for checklists

via `autotask_raw_request`. Build the body from what it returns, not from
memory. Search syntax: `POST /{Entity}/query` with `{"filter": [...]}`;
operators include `eq`, `contains`, `gt`, `lt`, `exist`, `notExist`.

## Recurring schedules (the Schedules entity)

Autotask **Schedules** are recurring work templates: e.g. "monthly patch
window", "quarterly review", "annual certificate renewal". A schedule has
items (the steps) and can generate tickets/tasks on a cadence.

**Important: no typed tool.** Use `autotask_raw_request`:

- List schedules: `POST /Schedules/query` with body
  `{"filter": [{"op": "contains", "field": "name", "value": "patch"}]}`
- Create a schedule: `POST /Schedules` with a body like:
  ```json
  {
    "name": "Monthly patch window",
    "companyID": 123,
    "startDate": "2026-12-01T09:00:00",
    "dueDate": "2026-12-01T12:00:00",
    "recurring": true,
    "recurrenceType": "Monthly",
    "description": "Monthly patching window — generate ticket with checklist"
  }
  ```
  (verify field names with `GET /Schedules/entityInformation` first)
- Schedule items: `POST /Schedules/{id}/ScheduleItems`
- Schedule resources: `POST /Schedules/{id}/ScheduleResources`

## Checkboxes on recurring work

Two options, depending on what the user means:

- **Recurring job → ticket with checkboxes** (the common MSP pattern):
  1. Create the **schedule** (`raw_request` → `POST /Schedules`).
  2. When the schedule fires (or manually), create a **ticket** for the period.
  3. Add **checklist items** to that ticket (`create_ticket_checklist_item`
     per step — typed tool; `update_ticket_checklist_item` to tick them off).
- **Project with checkboxes on the tasks themselves**: project → tasks →
  **task checklists** via `raw_request` (see above). Use this when the work
  is a project, not a recurring ticket.

## Dated one-off sequences

If the user just means "a sequence of dated tasks" (not recurring), that's a
**project → phases → tasks** — all typed tools, no `raw_request` needed.
