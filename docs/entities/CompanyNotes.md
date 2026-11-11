# CompanyNotes

The CompanyNotes entity describes any sort of note created by an Autotask user and associated with a Company entity or an Opportunity entity. Autotask users manage Company Notes through the CRM module (CRM > Companies).

- **Entity path:** `/atservicesrest/v1.0/CompanyNotes`
- **Capabilities:** create ✓ · update ✓ · query ✓ · delete —

## Fields (14)

| Field | Type | Notes |
|---|---|---|
| `contactID` | integer | contactID must reference an isActive Autotask Contact that is associated with the Company referenced by the companyID field or from the parentCompany of the Company referenced by companyID. |
| `opportunityID` | integer | opportunityID must reference an isActive Autotask Opportunity associated with the Company referenced by the companyID field. |
| `actionType` | integer |  |
| `assignedResourceID` | integer | Resources |
| `companyID` | integer | Companies |
| `completedDateTime` | datetime |  |
| `createDateTime` | datetime |  |
| `endDateTime` | datetime |  |
| `impersonatorCreatorResourceID` | integer | Resources |
| `impersonatorUpdaterResourceID` | integer | Resources |
| `lastModifiedDate` | datetime |  |
| `name` | string (128) |  |
| `note` | string (32000) |  |
| `startDateTime` | datetime |  |

