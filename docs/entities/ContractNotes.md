# ContractNotes

Describes a note associated with an Autotask Contract. Notes are used to track information, update the status of the associated contract, and communicate with resources and customers. In Autotask, you create and manage Contract Notes from the Options or Notes features found on the Contract Summary page in the Contract module.

- **Entity path:** `/atservicesrest/v1.0/ContractNotes`
- **Capabilities:** create ✓ · update ✓ · query ✓ · delete —
- **Parent:** Contracts

## Access URLs

- `ContractNotes/query (GET, POST)`
- `ContractNotes/{id} (GET)`
- `ContractNotes/query/count (GET, POST)`
- `ContractNotes/entityInformation (GET)`
- `ContractNotes/entityInformation/fields (GET)`
- `ContractNotes/entityInformation/userDefinedFields (GET)`

## Fields (8)

| Field | Type | Notes |
|---|---|---|
| `description` | string (8000) | When you use the API to update this field, the REST API will return the text-only version of its content. If you send the content back, the Rich Text and all images that it contains will be lost . You cannot use the API to create items that contain Rich Text, but you can add Rich Text later via a supported method. To learn more, refer to The Rich Text editor . |
| `contractID` | integer | Contracts |
| `createDateTime` | datetime |  |
| `creatorResourceID` | integer | Resources |
| `impersonatorCreatorResourceID` | integer | Resources |
| `impersonatorUpdaterResourceID` | integer | Resources |
| `lastActivityDate` | datetime |  |
| `title` | string (250) |  |

