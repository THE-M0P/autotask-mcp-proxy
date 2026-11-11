# Resources

The Resource entity describes a person with a user account that provides general access to their organization's Autotask instance, based on the license type and security level they were assigned. Users with Administrator security level manage resources (users) in the Admin module of Autotask.

- **Capabilities:** create — · update ✓ · query ✓ · delete —

## Fields (35)

| Field | Type | Notes |
|---|---|---|
| `accountingReferenceID` | string (100) | Accounting Reference ID on the HR tab. An additional ID that links the resource to an external payroll or accounting application. |
| `dateFormat` | string (20) | Date Format on the General tab |
| `defaultServiceDeskRoleID` | long | The ID of the default Service Desk Role on the Associations tab. This field cannot be queried. |
| `email` | string (254) | Email Address Additional Email Address 1 Additional Email Address 2 on the General tab. If an unverified email is updated, the change takes place immediately. If a verified email is changed, a confirmation email is sent and the resource is prompted to confirm the change when they next log in. |
| `email2` | string (254) |  |
| `email3` | string (254) |  |
| `emailTypeCode` | string (20) | Email Type on the General tab |
| `emailTypeCode2` | string (20) |  |
| `emailTypeCode3` | string (20) |  |
| `firstName` | string (50) | First Name on the General tab |
| `gender` | string (1) | Gender on the General tab |
| `greeting` | integer | Prefix on the General tab |
| `hireDate` | datetime | Hire Date on the HR tab |
| `homePhone` | string (25) | Home Phone on the General tab |
| `initials` | string (32) | Payroll Identifier This field contains the same values as the payrollIdentifier field. During update if supplying a value for both fields, the value supplied for the payrollIdentifier will override the value supplied for the initials field. |
| `internalCost` | decimal | Internal Cost (Burden Rate) on the HR tab The internalCost value is set to 0 if On query or update, the date range for Internal Cost does not include the current date The API user does not have View permission for this field |
| `isActive` | boolean | Active check box on the Security tab |
| `lastName` | string (50) | Last Name on the General tab |
| `licenseType` | integer | The License Type associated with the selected security level. This value only appears on the Resources table in Admin. |
| `locationID` | integer | The location ID of the Primary Internal Location associated with the resource on the General tab |
| `middleName` | string (50) | Middle Initial on the General tab |
| `mobilePhone` | string (25) | Mobile Phone on the General tab |
| `numberFormat` | string (20) | Number Format on the General tab |
| `officeExtension` | string (10) | Extension on the General tab |
| `officePhone` | string (25) | Office Phone on the General tab |
| `payrollIdentifier` | string (32) | Payroll Identifier on the HRl tab. An ID that links the resource to an external payroll application. |
| `payrollType` | integer | Payroll Type on the HR tab |
| `resourceType` | string (15) | Resource Type on the HR tab |
| `suffix` | integer | Suffix on the General tab |
| `surveyResourceRating` | decimal | Resource Survey Rating on the Resources table. The average survey rating associated with the resource over a certain time span. |
| `timeFormat` | string (20) | Time Format on the General tab |
| `title` | string (50) | Title on the General tab. This refers to the job title of the resource. |
| `travelAvailabilityPct` | string (15) | Travel Availability on the HR tab. This refers to the percent of weekly hours the resource is available for travel. |
| `userName` | string (32) | Username on the Security tab |
| `userType` | integer | Security Level on the Security tab |

