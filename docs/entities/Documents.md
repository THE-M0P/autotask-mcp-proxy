# Documents

This entity represents documents in Autotask.

- **Capabilities:** create ✓ · update ✓ · query ✓ · delete ✓

## Fields (12)

| Field | Type | Notes |
|---|---|---|
| `companyID` | integer | The company ID of the company associated with the document. |
| `createdByResourceID` | integer | The resource ID of the resource who created the document. |
| `createdDateTime` | datetime | The date and time the document was created. |
| `documentCategoryID` | integer | The document category assigned to the document. |
| `errorCodes` | string (200) | The error codes the document is associated with. |
| `isActive` | boolean |  |
| `keywords` | string (300) | Any keywords associated with the document. |
| `lastModifiedByResourceID` | integer | These fields will always match the most recent version in the entity's history. |
| `lastModifiedDateTime` | datetime |  |
| `publish` | integer | The audience the document is published to. Options are: Internal and All Accounts Internal Only Internal an My Accounts |
| `referenceLink` | string (500) | The link to an external document. |
| `title` | string (200) | The title of the document. |

