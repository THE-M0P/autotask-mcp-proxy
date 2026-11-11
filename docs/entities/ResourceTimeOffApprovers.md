# ResourceTimeOffApprovers

The ResourceTimeOffApprovers entity identifies time off approvers for a resource and their approval level.

- **Capabilities:** create — · update — · query ✓ · delete —

## Fields (3)

| Field | Type | Notes |
|---|---|---|
| `approvalLevel` | integer | Indicates the approver's approval level for the resource. An Autotask resource can have up to 3 levels of approvers. |
| `approverResourceID` | integer | The resource ID of the approver |
| `resourceID` | integer | The ID of the resource for whom time off is requested |

