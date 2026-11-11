# Opportunities

Describes an Autotask Opportunity. An opportunity is a forecasted piece of business: that is, an identifiable prospect that needs a product or service and offers a potential sale, project, or contract. Autotask Opportunities allow you to describe the amount, due date, and probability of expected sales revenue from an opportunity, track the progress of the opportunity, and generate sales forecasts.

- **Entity path:** `/atservicesrest/v1.0/Opportunities`
- **Capabilities:** create ✓ · update ✓ · query ✓ · delete —
- **Parent:** None
- **Children:** OpportunityAttachments

## Access URLs

- `Opportunities/query (GET, POST)`
- `Opportunities/{id} (GET)`
- `Opportunities/query/count (GET, POST)`
- `Opportunities (PUT, POST, PATCH)`
- `Opportunities/entityInformation (GET)`
- `Opportunities/entityInformation/fields (GET)`
- `Opportunities/entityInformation/userDefinedFields (GET)`

## Fields (59)

| Field | Type | Notes |
|---|---|---|
| `organizationalLevelAssociationID` | integer | organizationalLevelAssociationID cannot be cleared via the API. If not included in the response, the current value will remain unchanged. organizationalLevelAssociationID cannot be updated to an inactive OrganizationalLevelAssociation. |
| `closedDate` | datetime | Supply date-only values for this field. The API will automatically remove time values. |
| `companyID` | integer | The companyID reference by Opportunity.contactID must = Opportunity.companyID, that is, the Opportunity Contact must be associated with the same Company as the Opportunity. |
| `contactID` | integer | contactID must reference an isActive Autotask Contact associated with the Company referenced by the companyID field or from the parentCompany of the Company referenced by the Quote companyID. |
| `description` | string (8,000) | This field not required, regardless of opportunity category "requiredness" settings. |
| `lostDate` | datetime | If Status is changed to Lost and a lostDate is supplied, then the supplied lostDate value will remain. If Status is changed to Lost and a lostDate is not supplied, then the lostDate is set to UtcNow. If Status is changed to something other than Lost, then the lostDate field is cleared, even if a value is supplied. If Status has not changed, Status is Lost, and a lostDate value is supplied, then the supplied lostDate value will remain. If Status has not changed, Status is not Lost, and a lostDate value is supplied, then the supplied lostDate value will be ignored (existing lostDate value will remain). |
| `onetimeRevenue` | decimal | Invoice.Amount (Revenue) value for Opportunities created via Web Services are written to the One-Time Revenue column in the database. If an Opportunity is later updated via Web Services, any new value provided for Amount will be written to the One-Time Amount column and any values in the Monthly Amount, Quarterly Amount, Semi-Annual Amount, and Yearly Amount database columns will be cleared. |
| `opportunityCategoryID` | integer | The "required" status and available list value settings for fields stored on the opportunity's opportunity category will NOT be respected when creating or editing opportunities in the API. If no opportunity category is specified, the system default opportunity category is used. The default values for all fields stored on the utilized opportunity category are applied. If you specify a value for a field that is also defaulted by the opportunity category, your specified value is used. |
| `ownerResourceID` | integer | ownerResourceID must reference an isActive Autotask Resource with security level access to the CRM module. |
| `probability` | integer | probability must be >= 0 and <= 100. |
| `projectedCloseDate` | datetime | projectedCloseDate must be >= startDate. Supply date-only values for this field. The API will automatically remove time values. |
| `revenueSpread` | integer | If no revenueSpreadUnit is supplied, this value will be discarded. |
| `revenueSpreadUnit` | string (6) | If this field is empty and no revenueSpread value is supplied, this value will default to "all at once." |
| `startDate` | datetime | IMPORTANT The startDate in the API is what is the actual create date of the opportunity. |
| `status` | integer | If the status is changed to Lost through the UI or API, the lostDate field is updated to the current Date and Time. If the Lost status is changed to any other status, the field is cleared. For legacy opportunities, the Lost Date is updated to the last time the opportunity status was set to lost. |
| `throughDate` | datetime | Supply date-only values for this field. The API will automatically remove time values. |
| `useQuoteTotals` | boolean | useQuoteTotals can only = "True" if an Autotask Quote entity references this Opportunity. |
| `advancedField1` | decimal |  |
| `advancedField2` | decimal |  |
| `advancedField3` | decimal |  |
| `advancedField4` | decimal |  |
| `advancedField5` | decimal |  |
| `amount` | decimal |  |
| `assessmentScore` | decimal |  |
| `barriers` | string (500) |  |
| `cost` | decimal |  |
| `createDate` | datetime |  |
| `creatorResourceID` | integer |  |
| `helpNeeded` | string (500) |  |
| `impersonatorCreatorResourceID` | integer |  |
| `lastActivity` | datetime |  |
| `leadSource` | integer |  |
| `lossReason` | integer |  |
| `lossReasonDetail` | string (500) |  |
| `market` | string (500) |  |
| `monthlyCost` | decimal |  |
| `monthlyRevenue` | decimal |  |
| `nextStep` | string (500) |  |
| `onetimeCost` | decimal |  |
| `primaryCompetitor` | integer |  |
| `productID` | integer |  |
| `promisedFulfillmentDate` | datetime |  |
| `promotionName` | string (50) |  |
| `quarterlyCost` | decimal |  |
| `quarterlyRevenue` | decimal |  |
| `rating` | integer |  |
| `relationshipAssessmentScore` | decimal |  |
| `salesOrderID` | integer |  |
| `salesProcessPercentComplete` | decimal |  |
| `semiannualCost` | decimal |  |
| `semiannualRevenue` | decimal |  |
| `stage` | integer |  |
| `technicalAssessmentScore` | decimal |  |
| `title` | string (128) |  |
| `totalAmountMonths` | integer |  |
| `winReason` | integer |  |
| `winReasonDetail` | string (500) |  |
| `yearlyCost` | decimal |  |
| `yearlyRevenue` | decimal |  |

