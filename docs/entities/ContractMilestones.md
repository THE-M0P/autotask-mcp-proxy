# ContractMilestones

The ContractMilestone entity describes a billing milestone for an Autotask Fixed Price Contract. Billing milestones describe tangible work or measured progress that must be completed before billing can take place, for example, "user approval on design specifications", or "ten workstations installed." A fixed price contract can have multiple billing milestones. In Autotask, you add and manage contract milestones from the Fixed Price Contract's Summary page.

- **Entity path:** `/atservicesrest/v1.0/ContractMilestones`
- **Capabilities:** create ✓ · update ✓ · query ✓ · delete —

## Fields (10)

| Field | Type | Notes |
|---|---|---|
| `amount` | decimal |  |
| `billingCodeID` | integer | ProjectCharges |
| `contractID` | integer | Contracts |
| `createDate` | datetime |  |
| `creatorResourceID` | integer | Resources |
| `dateDue` | datetime |  |
| `description` | string (250) |  |
| `isInitialPayment` | boolean |  |
| `status` | integer |  |
| `title` | string (100) |  |

