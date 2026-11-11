# ConfigurationItemCategoryUdfAssociations

This entity represents the relationship between an asset category and a specific UDF. One of these entities exists for every UDF that is set as visible on each asset category.

- **Entity path:** `/atservicesrest/v1.0/ConfigurationItemCategoryUdfAssociations`
- **Capabilities:** create ✓ · update ✓ · query ✓ · delete ✓

## Fields (3)

| Field | Type | Notes |
|---|---|---|
| `configurationItemCategoryID` | integer | ConfigurationItemCategories |
| `isRequired` | boolean |  |
| `userDefinedFieldDefinitionID` | integer | UserDefinedFieldDefinitions |

