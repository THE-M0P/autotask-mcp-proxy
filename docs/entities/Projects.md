# Projects

Describes an Autotask Project. A project defines and organizes a group of related tasks, events, and documents. Each Project is specific to one Company and can include phases. Autotask users manage Projects through the Projects module.

- **Entity path:** `/atservicesrest/v1.0/Projects`
- **Capabilities:** create ✓ · update ✓ · query ✓ · delete —
- **Parent:** None
- **Children:** ProjectAttachments, ProjectCharges, ProjectNotes, Tasks

## Access URLs

- `Projects/query (GET, POST)`
- `Projects/{id} (GET)`
- `Projects/query/count (GET, POST)`
- `Projects (PUT, POST, PATCH)`
- `Projects/entityInformation (GET)`
- `Projects/entityInformation/fields (GET)`
- `Projects/entityInformation/userDefinedFields (GET)`

## Fields (43)

| Field | Type | Notes |
|---|---|---|
| `companyID` | integer | Project.companyID cannot be updated. |
| `companyOwnerResourceID` | integer | companyOwnerResourceID is Read-Only. |
| `endDateTime` | datetime | endDateTime must be greater than or equal to the end date of the latest phase, task, or issue. |
| `startDateTime` | datetime | If no phases, tasks, or issues are associated with the project, the start date can be updated, but startDateTime cannot be greater than or equal to endDateTime. Project.startDate cannot be updated if any phases, tasks, or issues are associated with the Project. |
| `status` | integer | Projects are inactivated by assigning the Inactive status; that is, Project.status = Inactive. When a project is completed via the API, the API will complete all Tasks associated with the project and update the "Remaining Hours" and "Projected Variance from Remaining Hours" totals at both the task TimeEntry and Project levels. |
| `type` |  | Projects of Type = Baseline are read-only and cannot be created, updated or deleted via the API. Autotask no longer supports projects of Type = Business Objective, Archived, or Inactive. Existing Projects of these types have been reassigned as follows: Business Objective type have been reassigned to Internal. Archived type have been reassigned to their original type (Client, Internal, Proposal, or Template) with Project.status = isComplete. Inactive type have been reassigned to their original type with Project.status = Inactive. To reactivate an inactive project, the Project.status must be assigned a status other than Inactive. |
| `actualBilledHours` | decimal |  |
| `actualHours` | decimal |  |
| `changeOrdersBudget` | decimal |  |
| `changeOrdersRevenue` | decimal |  |
| `completedDateTime` | datetime |  |
| `completedPercentage` | integer |  |
| `contractID` | integer |  |
| `createDateTime` | datetime |  |
| `creatorResourceID` | integer |  |
| `department` | integer |  |
| `description` | string (2000) |  |
| `duration` | integer |  |
| `estimatedSalesCost` | decimal |  |
| `estimatedTime` | decimal |  |
| `extProjectNumber` | string (50) |  |
| `extProjectType` | integer |  |
| `impersonatorCreatorResourceID` | integer |  |
| `laborEstimatedCosts` | decimal |  |
| `laborEstimatedMarginPercentage` | decimal |  |
| `laborEstimatedRevenue` | decimal |  |
| `lastActivityDateTime` | datetime |  |
| `lastActivityPersonType` | integer |  |
| `lastActivityResourceID` | integer |  |
| `opportunityID` | integer |  |
| `organizationalLevelAssociationID` | integer |  |
| `originalEstimatedRevenue` | decimal |  |
| `projectCostEstimatedMarginPercentage` | decimal |  |
| `projectCostsBudget` | decimal |  |
| `projectCostsRevenue` | decimal |  |
| `projectLeadResourceID` | integer |  |
| `projectName` | string (100) |  |
| `projectNumber` | string (50) |  |
| `projectType` | integer |  |
| `purchaseOrderNumber` | string (50) |  |
| `sGDA` | decimal |  |
| `statusDateTime` | datetime |  |
| `statusDetail` | string (2000) |  |

