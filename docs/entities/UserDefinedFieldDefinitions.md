# UserDefinedFieldDefinitions

This entity defines a user-defined field (UDF) in Autotask. User-defined fields are custom fields that each Autotask customer can add to certain Autotask entities. These fields hold data that is unique to the Autotask user's company and cannot be mapped to the standard Autotask field sets.

- **Entity path:** `/atservicesrest/v1.0/UserDefinedFieldDefinitions`
- **Capabilities:** create ✓ · update ✓ · query ✓ · delete —

## Fields (18)

| Field | Type | Notes |
|---|---|---|
| `crmToProjectUdfId` | long | CrmToProjectUdf requires that UserDefinedFieldDefinition.udfType = Project; otherwise, an error is thrown. CrmToProjectUdfId must reference a UserDefinedFieldDefinition.id. The referenced UserDefinedFieldDefinition must be an Opportunity type. Both UserDefinedFieldDefinition entities (the Project type and the Opportunity type) must be the same dataType. |
| `dataType` | integer | After creation, dataType cannot be updated via the API. For a UserDefinedFieldDefintion with dataType = List, defaultValue cannot be set during creation because defaultValue is reference to a UserDefinedFieldListItem. The UserDefinedFieldListItem cannot be created before the associated UserDefinedFieldDefinition. Refer to UserDefinedFieldListItems . If dataType = string, displayFormat determines if the field is single line or multi-line. If dataType = string and displayFormat = 0, displayFormat will default to 1 (single line). If dataType has a value other than string, displayFormat will =0 (undefined). When creating UDFs of type Text (Email), the value provided must be a valid email address. |
| `defaultValue` | string (1024) | defaultValue must be a valid format for the UserDefinedFieldDefinition dataType: String (single or multi-line) - Accepts an alphanumeric string. Date - Accepts any valid date format. Numeric - Accepts numbers. UserDefinedFieldDefinition.numberOfDecimalPlaces defines how many decimal places are allowed. List - List values are defined by the UserDefinedFieldListItem entity; default value must be a UserDefinedFieldListItem.valueForDisplay where UserDefinedFieldListItem.udfFieldId = UserDefinedFieldDefinition.id |
| `isEncrypted` | boolean | isEncrypted will = false unless the udfType = Product or SiteConfiguation in which case it takes the value provided. isEncrypted cannot = true if isProtected = false. NOTE The API respects Data Protection Permissions. Users without the correct DPPs cannot view or update protected UDFs. Encrypted data can never be queried via the API. |
| `isFieldMapping` | boolean | UserDefinedFieldDefinition instances can be created via the API with isFieldMapping = True (as of 02/2016). UserDefinedFieldDefinition.isFieldMapping cannot be updated. When isFieldMapping=True, updates are only allowed for isActive and Sort Order. |
| `isPrivate` | boolean | This field can only be set to true for protected Asset UDFs of type String. When set to true or false, Autotask will create an audit trail. Changes made to these fields by the API will be logged as edits (but not views) of the field in its history. Queries on these fields by the API will be logged as views of the field in its history. |
| `isProtected` | boolean | isProtected will = false unless the udfType = Product or Site Configuration in which case it takes the value provided. |
| `isVisibleToClientPortal` | boolean | isVisibleToClientPortal will always = false unless the udfType is Asset or Ticket in which case it will take the provided value. |
| `mergeVariableName` | string (100) | A value for the field mergeVariableName must be unique. It can contain only alpha characters (letters) and must begin with "var", for example, varCustomData. |
| `numberOfDecimalPlaces` | integer | numberOfDecimalPlaces must be > 0 and <= 4. If no value is provided it will default to 2. |
| `sortOrder` | integer | sortOrder must be > 0. If no value is provided or the value is <0, it will default to 1. |
| `udfType` | integer | After creation, udfType cannot be updated via the API. If udfType = Ticket or Task, then isRequired cannot = True. The required status for Ticket and Task UDFs is set on the ticket category Details tab. |
| `createDate` | datetime |  |
| `description` | string (128) |  |
| `displayFormat` | integer |  |
| `isActive` | boolean |  |
| `isRequired` | boolean |  |
| `name` | string (45) |  |

