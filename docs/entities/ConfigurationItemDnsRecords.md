# ConfigurationItemDnsRecords

Describes DNS records associated with the ConfigurationItems entity in Autotask.

- **Entity path:** `/atservicesrest/v1.0/ConfigurationItemDnsRecords`
- **Capabilities:** create — · update — · query ✓ · delete ✓
- **Parent:** ConfigurationItems

## Access URLs

- `ConfigurationItemDnsRecords/{id} (GET)`
- `ConfigurationItemDnsRecords/query (GET, POST)`
- `ConfigurationItemDnsRecords/query/count (GET, POST)`
- `ConfigurationItemDnsRecords/entityInformation (GET)`
- `ConfigurationItemDnsRecords/entityInformation/fields (GET)`
- `ConfigurationItems/{parentId}/DnsRecords(GET, POST)`
- `ConfigurationItems/{parentId}/DnsRecords/{id} (GET, DELETE)`
- `ConfigurationItems/{parentId}/DnsRecords/entityInformation (GET)`
- `ConfigurationItems/{parentId}/DnsRecords/entityInformation/fields (GET)`

## Fields (5)

| Field | Type | Notes |
|---|---|---|
| `createDateTime` | datetime |  |
| `data` | string (2000) |  |
| `dnsType` | string (10) |  |
| `installedProductID` | integer | ConfigurationItems |
| `timeToLiveSeconds` | integer |  |

