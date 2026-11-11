# ResourceSkills

Describes skills associated with an Autotask Resource. When assigning tickets via the API, this entity provides information to assist in matching the Problem/Incident to resources with the proper skill level.

- **Entity path:** `/atservicesrest/v1.0/ResourceSkills`
- **Capabilities:** create — · update ✓ · query ✓ · delete —

## Fields (4)

| Field | Type | Notes |
|---|---|---|
| `resourceID` | long | Resources |
| `skillDescription` | string (2000) |  |
| `skillID` | long | Skills |
| `skillLevel` | long |  |

