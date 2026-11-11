# InternalLocations

Describes a location defined in Company Setup in the Autotask Admin module. Locations represent the various sites where the Autotask user's company has a physical presence. Every resource is associated with a location. The time zone and holiday set of the associated location are applied to the resource's time entries and schedules.

- **Entity path:** `/atservicesrest/v1.0/InternalLocations`
- **Capabilities:** create — · update — · query ✓ · delete —

## Fields (11)

| Field | Type |
|---|---|
| `additionalAddressInfo` | string (100) |
| `address1` | string (100) |
| `address2` | string (100) |
| `city` | string (50) |
| `country` | string (100) |
| `holidaySetId` | long |
| `isDefault` | boolean |
| `name` | string (100) |
| `postalCode` | string (20) |
| `state` | string (25) |
| `timeZone` | string (100) |

