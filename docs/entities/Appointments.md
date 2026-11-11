# Appointments

The Appointments entity describes an Autotask Appointment, that is, scheduled time that is not a service call. Autotask users manage appointments through their calendar. In addition, Dispatchers can view and schedule appointments through the Dispatcher's Workshop.

- **Entity path:** `/atservicesrest/v1.0/Appointments`
- **Capabilities:** create ✓ · update ✓ · query ✓ · delete ✓

## Fields (8)

| Field | Type |
|---|---|
| `createDateTime` | datetime |
| `creatorResourceID` | integer |
| `description` | string (8000) |
| `endDateTime` | datetime |
| `resourceID` | integer |
| `startDateTime` | datetime |
| `title` | string (256) |
| `updateDateTime` | datetime |

