# ContractServiceBundleUnits

Describes the number of units of a specific service bundle that are associated with a Recurring Service contract for a specific date range. They provide information used in billing for the service bundle.

- **Entity path:** `/atservicesrest/v1.0/ContractServiceBundleUnits`
- **Capabilities:** create — · update — · query ✓ · delete —

## Fields (10)

| Field | Type | Notes |
|---|---|---|
| `cost` | decimal | This entity field will return no information if the user account making the query does not have sufficient privileges to view cost data in the Autotask UI. Additionally, if an update request does not have the necessary permissions, the API will ignore the call's values for the field even if they are blank or would be otherwise required. |
| `approveAndPostDate` | datetime |  |
| `contractID` | integer | Contracts |
| `contractServiceBundleID` | integer | ContractServiceBundles |
| `endDate` | datetime |  |
| `organizationalLevelAssociationID` | integer | OrganizationalLevelAssociations |
| `price` | decimal |  |
| `serviceBundleID` | integer | ServiceBundles |
| `startDate` | datetime |  |
| `units` | integer |  |

