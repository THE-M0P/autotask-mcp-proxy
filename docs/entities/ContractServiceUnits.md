# ContractServiceUnits

Describes the number of units of a specific service that are associated with a Recurring Service contract for a specific date range. They provide information used in billing for the service bundle.

- **Entity path:** `/atservicesrest/v1.0/ContractServiceUnits`
- **Capabilities:** create — · update — · query ✓ · delete —

## Fields (13)

| Field | Type | Notes |
|---|---|---|
| `cost` | float | This entity field will return no information if the user account making the query does not have sufficient privileges to view cost data in the Autotask UI. Additionally, if an update request does not have the necessary permissions, the API will ignore the call's values for the field even if they are blank or would be otherwise required. |
| `internalCurrencyPrice` |  | If the Multi-currency Installed Module is enabled, this field will return the saved Internal Currency value. |
| `price` | decimal | If the Multi-currency Installed Module is enabled, this field will return the relevant Customer Currency value instead of the Internal Currency value. adjustedUnitPrice allows a negative value (allows users to apply discount). |
| `unitCost` |  | This entity field will return no information if the user account making the query does not have sufficient privileges to view cost data in the Autotask UI. Additionally, if an update request does not have the necessary permissions, the API will ignore the call's values for the field even if they are blank or would be otherwise required. |
| `units` | integer | When the number of units for a period is 0, the query response will not return this entity. |
| `approveAndPostDate` | datetime |  |
| `contractID` | integer | Contracts |
| `contractServiceID` | integer | ContractServices |
| `endDate` | datetime |  |
| `organizationalLevelAssociationID` | integer | OrganizationalLevelAssociations |
| `serviceID` | integer | Services |
| `startDate` | datetime |  |
| `vendorCompanyID` | integer | Companies |

