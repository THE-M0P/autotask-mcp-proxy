# PriceListRoles

This entity is only used in multi-currency databases. It describes whether a Role Hourly Rate on the Price List uses the internal currency or an external currency, and if it is external, lets you set the price in that currency.

- **Entity path:** `/atservicesrest/v1.0/PriceListRoles`
- **Capabilities:** create — · update ✓ · query ✓ · delete —

## Fields (4)

| Field | Type | Notes |
|---|---|---|
| `hourlyRate` | decimal | If this field's value equals true, then PriceListRole.hourlyRate will return unitPrice divided by the current Currency exchange rate; that is, the Unit Price of the Role entity with id equal to PriceListRole.roleID, divided by the current exchange rate of the Currency with id equal to PriceListRole.currencyID. |
| `usesInternalCurrencyPrice` | boolean | If the usesInternalCurrencyPrice field is set to true, any supplied value for the unitPrice field will be ignored by the system. If the usesInternalCurrencyPrice field is set to true, any existing value for the unitPrice field will be cleared. If the usesInternalCurrencyPrice field is set to false, the unitPrice field will be required, even though it is not required otherwise. |
| `currencyID` | integer |  |
| `roleID` | integer |  |

