# PriceListProducts

This entity is only used in multi-currency databases. It describes whether a Product on the Price List uses the internal currency or an external currency, and if it is external, lets you set the price in that currency.

- **Entity path:** `/atservicesrest/v1.0/PriceListProducts`
- **Capabilities:** create — · update ✓ · query ✓ · delete —

## Fields (4)

| Field | Type | Notes |
|---|---|---|
| `unitPrice` | decimal | If usesInternalCurrencyPrice equals true, then unitPrice will return unitPrice divided by the current Currency exchange rate; that is, the Unit Price of the MaterialCode entity with id equal to PriceListMaterialCode.billingCodeID, divided by the current exchange rate of the Currency with id equal to PriceListMaterialCode.currencyID. |
| `usesInternalCurrencyPrice` | boolean | If the usesInternalCurrencyPrice field is set to true, any supplied value for the unitPrice field (or its equivalent) will be ignored by the system. If the usesInternalCurrencyPrice field is set to true, any existing value for the unitPrice field will be cleared. If the usesInternalCurrencyPrice field is set to false, the unitPrice field will be required, even though it is not required otherwise. |
| `currencyID` | integer |  |
| `productID` | integer |  |

