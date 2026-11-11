# InternalLocationWithBusinessHours

Describes key business details for the Autotask Zero Company, that is, the Autotask user's company account, which is identified by the account number 0. The entity provides an efficient way to access the details, via the API, to assist with the customer's Autotask implementation.

- **Entity path:** `/atservicesrest/v1.0/InternalLocationWithBusinessHours`
- **Capabilities:** create ✓ · update ✓ · query ✓ · delete —

## Fields (49)

| Field | Type | Notes |
|---|---|---|
| `isDefault` | boolean | isDefault is set to False on create. Only one InternalLocationWithBusinessHours can be isDefault = True. |
| `firstDayOfWeek` | integer | First day of week defaults to Sunday. Options are Sunday or Monday. |
| `holidayHoursType` | integer | None: no holiday hours Normal: same hours as on regular business days Specified: If holidayHoursType = Specified, then the user must supply values for the holiday hours start/end times (either extended or normal). |
| `noHoursOnHolidays` | boolean | noHoursOnHolidays defaults to False. If no Holiday Set is specified, defaults to None Selected . |
| `additionalAddressInfo` | string (100) |  |
| `address1` | string (100) |  |
| `address2` | string (100) |  |
| `city` | string (50) |  |
| `countryID` | integer |  |
| `dateFormat` | string (50) |  |
| `fridayBusinessHoursEndTime` | datetime |  |
| `fridayBusinessHoursStartTime` | datetime |  |
| `fridayExtendedHoursEndTime` | datetime |  |
| `fridayExtendedHoursStartTime` | datetime |  |
| `holidayExtendedHoursEndTime` | datetime |  |
| `holidayExtendedHoursStartTime` | datetime |  |
| `holidayHoursEndTime` | datetime |  |
| `holidayHoursStartTime` | datetime |  |
| `holidaySetID` | integer |  |
| `mondayBusinessHoursEndTime` | datetime |  |
| `mondayBusinessHoursStartTime` | datetime |  |
| `mondayExtendedHoursEndTime` | datetime |  |
| `mondayExtendedHoursStartTime` | datetime |  |
| `name` | string (100) |  |
| `numberFormat` | string (50) |  |
| `postalCode` | string (20) |  |
| `saturdayBusinessHoursEndTime` | datetime |  |
| `saturdayBusinessHoursStartTime` | datetime |  |
| `saturdayExtendedHoursEndTime` | datetime |  |
| `saturdayExtendedHoursStartTime` | datetime |  |
| `state` | string (25) |  |
| `sundayBusinessHoursEndTime` | datetime |  |
| `sundayBusinessHoursStartTime` | datetime |  |
| `sundayExtendedHoursEndTime` | datetime |  |
| `sundayExtendedHoursStartTime` | datetime |  |
| `thursdayBusinessHoursEndTime` | datetime |  |
| `thursdayBusinessHoursStartTime` | datetime |  |
| `thursdayExtendedHoursEndTime` | datetime |  |
| `thursdayExtendedHoursStartTime` | datetime |  |
| `timeFormat` | string (50) |  |
| `timeZoneID` | integer |  |
| `tuesdayBusinessHoursEndTime` | datetime |  |
| `tuesdayBusinessHoursStartTime` | datetime |  |
| `tuesdayExtendedHoursEndTime` | datetime |  |
| `tuesdayExtendedHoursStartTime` | datetime |  |
| `wednesdayBusinessHoursEndTime` | datetime |  |
| `wednesdayBusinessHoursStartTime` | datetime |  |
| `wednesdayExtendedHoursEndTime` | datetime |  |
| `wednesdayExtendedHoursStartTime` | datetime |  |

