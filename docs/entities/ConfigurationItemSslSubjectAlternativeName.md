# ConfigurationItemSslSubjectAlternativeName

This entity contains SSL Subject Alternative Name (SAN) records associated with the ConfigurationItems entity in Autotask.

- **Entity path:** `/atservicesrest/v1.0/ConfigurationItemSslSubjectAlternativeNames`
- **Capabilities:** create — · update ✓ · query ✓ · delete ✓
- **Parent:** ConfigurationItems

## Access URLs

- `ConfigurationItemSslSubjectAlternativeNames/{id} (GET)`
- `ConfigurationItemSslSubjectAlternativeNames/query (GET, POST)`
- `ConfigurationItemSslSubjectAlternativeNames/query/count (GET, POST)`
- `ConfigurationItemSslSubjectAlternativeNames/entityInformation (GET)`
- `ConfigurationItemSslSubjectAlternativeNames/entityInformation/fields (GET)`
- `ConfigurationItems/{parentId}/SslSubjectAlternativeNames (GET, POST)`
- `ConfigurationItems/{parentId}/SslSubjectAlternativeNames/{id} (GET, DELETE)`
- `ConfigurationItems/{parentId}/SslSubjectAlternativeNames/entityInformation (GET)`
- `ConfigurationItems/{parentId}/SslSubjectAlternativeNames/entityInformation/fields (GET)`

## Fields (2)

| Field | Type | Notes |
|---|---|---|
| `configurationItemID` | integer | ConfigurationItems |
| `name` | string (255) |  |

