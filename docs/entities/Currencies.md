# Currencies

Describes a currency available for use with the Autotask multi-currency installed module. The currency entity is used in Autotask only when the multi-currency installed module is enabled. It allows selected currency related fields to be queried and updated through the API. Currencies cannot be created or deleted.

- **Entity path:** `/atservicesrest/v1.0/Currencies`
- **Capabilities:** create — · update ✓ · query ✓ · delete —

## Fields (10)

| Field | Type | Notes |
|---|---|---|
| `exchangeRate` | decimal | currencies.exchangeRate allows only positive non-zero numbers up to five decimal places and six places to the left of the decimal. Trailing zeroes will not be shown in the UI. If a negative number or 0 is entered, an error message displays in that curency's row in the UI. When working with the API, all fields are read-only except for currencies.exchangeRate and currencies.lastModifiedDateTime. currencies.exchangeRate for the currency set as Internal is set to 1 and cannot be updated. |
| `lastModifiedDateTime` | datetime | When working with the API, all fields are read-only except for currencies.exchangeRate and currencies.lastModifiedDateTime. |
| `currencyNegativeFormat` | string (10) |  |
| `currencyPositiveFormat` | string (10) |  |
| `description` | string (100) |  |
| `displaySymbol` | integer |  |
| `isActive` | boolean |  |
| `isInternalCurrency` | boolean |  |
| `name` | string (3) |  |
| `updateResourceId` | integer |  |

