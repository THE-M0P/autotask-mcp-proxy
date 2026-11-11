# UserDefinedFieldListItems

Describes a list item associated with a UserDefinedFieldDefinition entity that has dataType = List.

- **Entity path:** `/atservicesrest/v1.0/UserDefinedFieldListItems`
- **Capabilities:** create ✓ · update ✓ · query ✓ · delete —
- **Parent:** REST API: User-defined fields (UDFs)

## Access URLs

- `UserDefinedFieldListItems/query (GET, POST)`
- `UserDefinedFieldListItems/{id} (GET)`
- `UserDefinedFieldListItems/query/count (GET, POST)`
- `UserDefinedFieldListItems/entityInformation (GET)`
- `UserDefinedFieldListItems/entityInformation/fields (GET)`
- `UserDefinedFieldListItems/entityInformation/userDefinedFields (GET)`

## Fields (5)

| Field | Type |
|---|---|
| `createDate` | datetime |
| `isActive` | boolean |
| `udfFieldId` | long |
| `valueForDisplay` | string (128) |
| `valueForExport` | string (128) |

