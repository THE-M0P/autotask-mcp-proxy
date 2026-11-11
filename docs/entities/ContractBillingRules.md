# ContractBillingRules

Describes contract billing rules that generate charges that allow you to bill your customer by the end user or by the asset.

- **Entity path:** `/atservicesrest/v1.0/ContractBillingRules`
- **Capabilities:** create ✓ · update ✓ · query ✓ · delete ✓

## Fields (15)

| Field | Type | Notes |
|---|---|---|
| `productID` | integer | This field must be supplied during create. On update, it is read-only. The selected productID must be active during a create call and it must reference a product with a billingType not equal to Standard. |
| `contractID` | integer | This field must be supplied during create. On update, it is read-only. |
| `createChargesAsBillable` | boolean |  |
| `dailyProratedCost` | decimal |  |
| `dailyProratedPrice` | decimal |  |
| `determineUnits` | integer |  |
| `endDate` | datetime |  |
| `executionMethod` | integer |  |
| `includeItemsInChargeDescription` | boolean |  |
| `invoiceDescription` | string (500) |  |
| `isActive` | boolean |  |
| `isDailyProrationEnabled` | boolean |  |
| `maximumUnits` | integer |  |
| `minimumUnits` | integer |  |
| `startDate` | datetime |  |

