# CompanyAlerts

Describes a configurable alert message, associated with a company, that appears on different company-related pages. It can convey important details about the company, such as special contract requirements, billing arrangements, or support needs. There are three types of company alerts. The type determines where the alert appears; for example, the Company Detail Alert type appears on the Company Detail page. Company Alerts are configured on the Alerts tab of the Edit Company page.

- **Entity path:** `/atservicesrest/v1.0/CompanyAlerts`
- **Capabilities:** create ✓ · update ✓ · query — · delete —

## Fields (3)

| Field | Type | Notes |
|---|---|---|
| `alertTypeID` | integer | alertTypeID for an existing Alert Type cannot be changed. |
| `companyID` | integer | companyID for an existing Alert Type cannot be changed. |
| `alertText` | string (8000) |  |

