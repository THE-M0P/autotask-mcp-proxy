# ResourceTimeOffAdditional

Describes time off the resource has been granted for the current and next year in addition to their assigned Time Off Policy.

- **Entity path:** `/atservicesrest/v1.0/TimeOffAdditional`
- **Capabilities:** create — · update ✓ · query ✓ · delete —
- **Parent:** Resources

## Access URLs

- `Resource/{resourceId}/TimeOffAdditional (GET, PUT, PATCH)`
- `ResourceTimeOffAdditional/entityInformation (GET)`
- `ResourceTimeOffAdditional/entityInformation/fields (GET)`

## Fields (19)

| Field | Type |
|---|---|
| `currentYear` | Integer |
| `currentYearAdditionalFloatingHoliday` | Decimal |
| `currentYearAdditionalPersonalTime` | Decimal |
| `currentYearAdditionalSickTime` | Decimal |
| `currentYearAdditionalVacationTime` | Decimal |
| `currentYearAnnualFloatingHoliday` | Decimal |
| `currentYearAnnualPersonalTime` | Decimal |
| `currentYearAnnualSickTime` | Decimal |
| `currentYearAnnualVacationTime` | Decimal |
| `nextYear` | Integer |
| `nextYearAdditionalFloatingHoliday` | Decimal |
| `nextYearAdditionalPersonalTime` | Decimal |
| `nextYearAdditionalSickTime` | Decimal |
| `nextYearAdditionalVacationTime` | Decimal |
| `nextYearAnnualFloatingHoliday` | Decimal |
| `nextYearAnnualPersonalTime` | Decimal |
| `nextYearAnnualSickTime` | Decimal |
| `nextYearAnnualVacationTime` | Decimal |
| `resourceID` | Integer |

