# Phases

Describes an Autotask project Phase. Phases allow users to break projects into sub-groups of project tasks. They can be a sub-phase to a Parent phase. Users manage phases through the Project's Schedule view in the Projects module.

- **Entity path:** `/atservicesrest/v1.0/Phases`
- **Capabilities:** create ✓ · update ✓ · query ✓ · delete —

## Fields (13)

| Field | Type |
|---|---|
| `createDate` | datetime |
| `creatorResourceID` | integer |
| `description` | string (8000) |
| `dueDate` | datetime |
| `estimatedHours` | decimal |
| `externalID` | string (50) |
| `isScheduled` | boolean |
| `lastActivityDateTime` | datetime |
| `parentPhaseID` | integer |
| `phaseNumber` | string (50) |
| `projectID` | integer |
| `startDate` | datetime |
| `title` | string (255) |

