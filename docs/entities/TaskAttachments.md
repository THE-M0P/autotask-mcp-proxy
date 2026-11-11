# TaskAttachments

This entity contains the attachments for the Tasks entity. For more information about attachments, including call syntax, thresholds and limits, and a full list of attachment entities, refer to Working with attachments in the REST API .

- **Entity path:** `/atservicesrest/v1.0/TaskAttachments`
- **Capabilities:** create ✓ · update — · query ✓ · delete ✓

## Fields (11)

| Field | Type | Notes |
|---|---|---|
| `attachDate` | datetime |  |
| `attachedByContactID` | long | Contacts |
| `attachedByResourceID` | long | Resources |
| `attachmentType` | string |  |
| `contentType` | string |  |
| `fullPath` | string |  |
| `impersonatorCreatorResourceID` | integer | Resources |
| `opportunityID` | long | Opportunities |
| `parentID` | long |  |
| `publish` | integer |  |
| `title` | string |  |

