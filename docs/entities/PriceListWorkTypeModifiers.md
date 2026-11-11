# PriceListWorkTypeModifiers

This entity is only used in multi-currency databases. It describes Price List information associated with a WorkTypeModifier entity. A WorkTypeModifier entity modifies a given Work Type BillingCode.

- **Entity path:** `/atservicesrest/v1.0/PriceListWorkTypeModifiers`
- **Capabilities:** create — · update ✓ · query ✓ · delete —

## Fields (5)

| Field | Type | Notes |
|---|---|---|
| `modifierValue` | decimal | On create or update: usesInternalCurrencyPrice is an indicator of whether the WorkTypeModifier is set to "Use internal currency's modifier with exchange rate applied." If this field's value equals true, then PriceListWorkTypeModifier.modifierValue will return WorkTypeModifier.modifierValue divided by the current Currency Exchange Rate; that is, the modifierValue of the WorkTypeModifier entity with id equal to PriceListWorkTypeModifier.workTypeModifierID, divided by the current exchange rate of the Currency with id equal to PriceListWorkTypeModifier.currencyID. In this case, PriceListWorkTypeModifier.modifierType will also return the corresponding modifierType value from the WorkTypeModifier entity with id equal to PriceListWorkTypeModifier.workTypeModifierID. TIP Modifier Types are described in the table below the following Field table. |
| `usesInternalCurrencyPrice` | boolean | If the usesInternalCurrencyPrice field is set to true, any supplied value for the modifierValue field (or its equivalent) will be ignored by the system. If the usesInternalCurrencyPrice field is set to true, any existing value for the modifierValue field will be cleared. If the usesInternalCurrencyPrice field is set to false, the modifierValue field will be required, even though it is not required otherwise. |
| `currencyID` | integer | Currencies |
| `modifierType` | integer |  |
| `workTypeModifierID` | integer | WorkTypeModifiers |

