# Resources

About this entity The Resource entity describes a person with a user account that provides general access to their organization's Autotask instance, based on the license type and security level they were assigned. Users with Administrator security level manage resources (users) in the Admin module of Autotask.

- **Capabilities:** create — · update — · query — · delete —

## Fields (36)

| Field | Type |
|---|---|
| `false` | false |
| `accountingReferenceID` | Accounting Reference ID on the HR tab. An additional ID that links the resource to an external payroll or accounting application. |
| `dateFormat` | Date Format on the General tab |
| `defaultServiceDeskRoleID` | The ID of the default Service Desk Role on the Associations tab. This field cannot be queried. |
| `email` | Email Address Additional Email Address 1 Additional Email Address 2 on the General tab. If an unverified email is updated, the change takes place immediately. If a verified email is changed, a confirmation email is sent and the resource is prompted to confirm the change when they next log in. |
| `email2` | string (254) |
| `email3` | string (254) |
| `emailTypeCode` | Email Type on the General tab |
| `emailTypeCode2` | string (20) |
| `emailTypeCode3` | string (20) |
| `firstName` | First Name on the General tab |
| `gender` | Gender on the General tab |
| `greeting` | Prefix on the General tab |
| `hireDate` | Hire Date on the HR tab |
| `homePhone` | Home Phone on the General tab |
| `initials` | Payroll Identifier This field contains the same values as the payrollIdentifier field. During update if supplying a value for both fields, the value supplied for the payrollIdentifier will override the value supplied for the initials field. |
| `internalCost` | Internal Cost (Burden Rate) on the HR tab The internalCost value is set to 0 if On query or update, the date range for Internal Cost does not include the current date The API user does not have View permission for this field |
| `isActive` | Active check box on the Security tab |
| `lastName` | Last Name on the General tab |
| `licenseType` | The License Type associated with the selected security level. This value only appears on the Resources table in Admin. |
| `locationID` | The location ID of the Primary Internal Location associated with the resource on the General tab |
| `middleName` | Middle Initial on the General tab |
| `mobilePhone` | Mobile Phone on the General tab |
| `numberFormat` | Number Format on the General tab |
| `officeExtension` | Extension on the General tab |
| `officePhone` | Office Phone on the General tab |
| `payrollIdentifier` | Payroll Identifier on the HRl tab. An ID that links the resource to an external payroll application. |
| `payrollType` | Payroll Type on the HR tab |
| `resourceType` | Resource Type on the HR tab |
| `suffix` | Suffix on the General tab |
| `surveyResourceRating` | Resource Survey Rating on the Resources table. The average survey rating associated with the resource over a certain time span. |
| `timeFormat` | Time Format on the General tab |
| `title` | Title on the General tab. This refers to the job title of the resource. |
| `travelAvailabilityPct` | Travel Availability on the HR tab. This refers to the percent of weekly hours the resource is available for travel. |
| `userName` | Username on the Security tab |
| `userType` | Security Level on the Security tab |

