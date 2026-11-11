# TaskPredecessors

Describes a predecessor/successor arrangement between two project schedule items. A predecessor item comes before one or more tasks (successor tasks) in the Project schedule. A successor task is scheduled to begin at the predecessor task's end date plus the number of "lag" days specified. for the predecessor.

- **Entity path:** `/atservicesrest/v1.0/TaskPredecessors`
- **Capabilities:** create ✓ · update ✓ · query ✓ · delete ✓

## Fields (3)

| Field | Type |
|---|---|
| `lagDays` | integer |
| `predecessorTaskID` | integer |
| `successorTaskID` | integer |

