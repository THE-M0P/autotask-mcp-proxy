# Taxes

The Tax entity describes the tax rate charged to a customer for specific goods or services purchased in a specified geographic area. The goods and services are represented by a TaxCategory. The geographic area is represented by the a TaxRegion. There can be multiple TaxCategories per TaxRegion. Tax entities

- **Entity path:** `/atservicesrest/v1.0/Taxes`
- **Capabilities:** create ✓ · update ✓ · query ✓ · delete —

## Fields (4)

| Field | Type | Notes |
|---|---|---|
| `taxCategoryID` | integer | TaxCategories |
| `taxName` | string (100) |  |
| `taxRate` | decimal |  |
| `taxRegionID` | integer | TaxRegions |

