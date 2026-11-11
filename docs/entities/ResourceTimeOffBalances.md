# ResourceTimeOffBalances

Describes the remaining time off a resource has accrued or has been allotted, according to their assigned Time Off Policy. You will be able to query the entity by resourceId or a combination of resourceId and year.

- **Entity path:** `/atservicesrest/v1.0/ResourceTimeOffBalances`
- **Capabilities:** create — · update — · query ✓ · delete —
- **Parent:** Resources

## Access URLs

- `Resource/{resourceId}/TimeOffBalances (GET)`
- `Resource/{resourceId}/TimeOffBalances/{year} (GET)`
- `ResourceTimeOffBalances/entityInformation (GET)`
- `ResourceTimeOffBalances/entityInformation/fields (GET)`

## Fields (21)

| Field | Type |
|---|---|
| `floatingHolidayAnnualAllowance` | Decimal |
| `floatingHolidayBalance` | Decimal |
| `floatingHolidayPlanned` | Decimal |
| `floatingHolidayUsed` | Decimal |
| `floatingHolidayApproval` | Decimal |
| `personalTimeAnnualAllowance` | Decimal |
| `personalTimeBalance` | Decimal |
| `personalTimePlanned` | Decimal |
| `personalTimeUsed` | Decimal |
| `personalTimeWaitingApproval` | Decimal |
| `resourceID` | Integer |
| `sickTimeAnnualAllowance` | Decimal |
| `sickTimeBalance` | Decimal |
| `sickTimePlanned` | Decimal |
| `sickTimeUsed` | Decimal |
| `sickTimeWaitingApproval` | Decimal |
| `vacationAnnualAllowance` | Decimal |
| `vacationBalance` | Decimal |
| `vacationPlanned` | Decimal |
| `vacationUsed` | Decimal |
| `vacationWaitingApproval` | Decimal |

