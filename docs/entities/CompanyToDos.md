# CompanyToDos

Describes a To-Do created by an Autotask user and associated with an Autotask Company. In Autotask, a To-Do is a scheduled item that appears on the user's Autotask calendar. It can be assigned to the creator or to another resource. It requires an Action Type and can be associated with an Opportunity, Ticket, or Contract that is associated with the same Company as the To-Do. Autotask users manage Company To Dos through the CRM module (CRM > To-Dos).

- **Entity path:** `/atservicesrest/v1.0/CompanyToDos`
- **Capabilities:** create ✓ · update ✓ · query ✓ · delete ✓

## Fields (15)

| Field | Type | Notes |
|---|---|---|
| `companyID` | long | contactID, contractID, opportunityID, and ticketID must reference a Contact, Contract, Opportunity, or Ticket entity with the same companyID as the CompanyToDo. |
| `completedDate` | datetime | Setting completedDate completes the to-do. The To-Do entity does not include an "isComplete" field. Use the completedDate column to query for completed To-Dos. Completed To-Dos can also be queried using the CompanyNote entity. |
| `contactID` | long | contactID must reference an isActive Autotask Contact associated with the Company referenced by the companyID field or from the parentCompany of the Company referenced by the Quote companyID. |
| `actionType` | integer |  |
| `activityDescription` | string (32000) |  |
| `assignedToResourceID` | long |  |
| `contractID` | long |  |
| `createDateTime` | datetime |  |
| `creatorResourceID` | long |  |
| `endDateTime` | datetime |  |
| `impersonatorCreatorResourceID` | integer |  |
| `lastModifiedDate` | datetime |  |
| `opportunityID` | long |  |
| `startDateTime` | datetime |  |
| `ticketID` | long |  |

