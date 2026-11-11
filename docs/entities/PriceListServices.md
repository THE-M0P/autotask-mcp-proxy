# PriceListServices

This entity is only used in multi-currency databases. It describes whether a Service on the Price List uses the internal currency or an external currency, and if it is external, lets you set the price in that currency.

- **Entity path:** `/atservicesrest/v1.0/PriceListServices`
- **Capabilities:** create — · update ✓ · query ✓ · delete —

## Fields (4)

| Field | Type | Notes |
|---|---|---|
| `unitPrice` | decimal | If this field's value equals true, then PriceListService.unitPrice will return unitPrice divided by the current Currency exchange rate; that is, the Unit Price of the Service entity with id equal to PriceListService.ServicdID, divided by the current exchange rate of the Currency with id equal to PriceListService.currencyID. |
| `usesInternalCurrencyPrice` | boolean | If the usesInternalCurrencyPrice field is set to true, any supplied value for the unitPrice field (or its equivalent) will be ignored by the system. If the usesInternalCurrencyPrice field is set to true, any existing value for the unitPrice field will be cleared. If the usesInternalCurrencyPrice field is set to false, the unitPrice field will be required, even though it is not required otherwise. |
| `currencyID` | integer | Currencies |
| `serviceID` | integer | Services |

