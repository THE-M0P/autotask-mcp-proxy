# ContractNoteAttachments

This entity contains the attachments for the ContractNotes entity. For more information about attachments, including call syntax, thresholds and limits, and a full list of attachment entities, refer to Working with attachments in the REST API .

- **Entity path:** `/atservicesrest/v1.0/ContractNoteAttachments`
- **Capabilities:** create ✓ · update — · query ✓ · delete ✓
- **Parent:** ContractNotes

## Access URLs

- `ContractNoteAttachments/entityInformation (GET)`
- `ContractNoteAttachments/entityInformation/fields (GET)`
- `ContractNoteAttachments/query (GET, POST)`
- `ContractNoteAttachments/{id} (GET)`
- `ContractNoteAttachments/query/count (GET, POST)`

## Fields (13)

| Field | Type | Notes |
|---|---|---|
| `attachDate` | datetime |  |
| `attachedByContactID` | long | Contacts |
| `attachedByResourceID` | long | Resources |
| `attachmentType` | string (30) |  |
| `contentType` | string (100) |  |
| `contractNoteID` | integer | ContractNotes |
| `contractID` | integer | Contracts |
| `fullPath` | string (255) |  |
| `impersonatorCreatorResourceID` | integer | Resources |
| `opportunityID` | long | Opportunities |
| `parentID` | long |  |
| `publish` | integer |  |
| `title` | string (255) |  |

