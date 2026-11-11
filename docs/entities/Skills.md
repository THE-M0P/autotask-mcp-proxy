# Skills

Describes a skill that can be associated with a Resource through the ResourceSkill entity. When assigning tickets via the API, the ResourceSkill entity provides information to assist in matching a Problem/Incident to resources with the proper skill level.

- **Entity path:** `/atservicesrest/v1.0/Skills`
- **Capabilities:** create — · update — · query ✓ · delete —

## Fields (4)

| Field | Type |
|---|---|
| `categoryID` | long |
| `description` | string (2000) |
| `isActive` | boolean |
| `name` | string (100) |

