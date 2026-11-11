# CompanyLocations

The CompanyLocations entity describes an individual business unit that is associated with a company in Autotask. The business unit can be a separate physical location, like an affiliate or franchise, or a division or agency operating in the same physical location as the company, like a hospital Emergency department where the hospital is the Autotask company. The company handles all billing for the location.

- **Entity path:** `/atservicesrest/v1.0/CompanyLocations`
- **Capabilities:** create ✓ · update ✓ · query ✓ · delete ✓

## Fields (18)

| Field | Type | Notes |
|---|---|---|
| `isPrimary` | boolean | Only one location associated with the same companyID can have isPrimary equal to true. If another location with the same companyID is set to isPrimary=true, then the original location should be set to isPrimary = Not true. |
| `address1` | string (128) |  |
| `address2` | string (128) |  |
| `alternatePhone1` | string (25) |  |
| `alternatePhone2` | string (25) |  |
| `city` | string (50) |  |
| `companyID` | integer |  |
| `countryID` | integer |  |
| `description` | string (500) |  |
| `isActive` | boolean |  |
| `isTaxExempt` | boolean |  |
| `name` | string (100) |  |
| `overrideCompanyTaxSettings` | boolean |  |
| `phone` | string (25) |  |
| `postalCode` | string (20) |  |
| `roundtripDistance` | decimal |  |
| `state` | string (25) |  |
| `taxRegionID` | integer |  |

