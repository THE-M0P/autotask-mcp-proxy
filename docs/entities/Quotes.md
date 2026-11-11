# Quotes

Describes a Quote in Autotask. The quote allows users to specify and track multiple products, services, labor items, etc., to further define an Opportunity. A Quote must be associated with an Autotask Opportunity entity. The quote total can update the Opportunity's forecasted amount. Quotes can be used internally or presented to the customer as an eQuote.

- **Entity path:** `/atservicesrest/v1.0/Quotes`
- **Capabilities:** create ✓ · update ✓ · query ✓ · delete —
- **Parent:** None
- **Children:** QuoteItems

## Access URLs

- `Quotes/query (GET, POST)`
- `Quotes/{id} (GET)`
- `Quotes/query/count (GET, POST)`
- `Quotes (PUT, POST, PATCH) Quotes/entityInformation (GET)`
- `Quotes/entityInformation/fields (GET) Quotes/entityInformation/userDefinedFields (GET)`

## Fields (40)

| Field | Type | Notes |
|---|---|---|
| `companyID` | integer | On update, companyID is Read-Only. |
| `contactID` | integer | contactID must be an isActive Autotask Contact from the Company referenced by the Quote companyID or from the parentCompany of the Company referenced by the Quote companyID. |
| `expirationDate` | datetime | expirationDate must be >= effectiveDate |
| `externalQuoteNumber` | string (50) | externalQuoteNumber for all quotes associated with the same opportunity must be unique. |
| `groupByProductCategory` |  | groupByProductCategory is retired. The groupByID field will determine how quote items are grouped on the Quote. groupByID maps to groupByProductCategory: if groupByID is set to the ID for either "Do Not Group" or "Group by Period Type Only," groupByProductCategory will be set to false. Otherwise it will be set to true. |
| `opportunityID` | integer | On update, opportunityID is Read-Only. opportunityID must be an isActive Autotask Opportunity. opportunityID is required via the API. In the UI you can create a quote with no associated opportunity and Autotask will create the Opportunity. The API will not automatically create an Opportunity. |
| `primaryQuote` | boolean | An Opportunity with multiple quotes associated must have one quote with primaryQuote = True. The Opportunity entity field useQuoteTotals will evaluate against Opportunity.primaryQuote. |
| `proposalProjectID` | integer | proposalProjectID can accept only Proposals of Type = 2 (Project). |
| `showTaxCategory` | boolean | showTaxCategory defaults to false. |
| `taxRegionID` | integer | In Autotask, Tax Regions have replaced Tax Groups. To preserve existing API code, Quote.taxRegionID passes the taxRegionID. |
| `approvalStatus` | integer |  |
| `approvalStatusChangedByResourceID` | integer | Resources |
| `approvalStatusChangedDate` | datetime |  |
| `billToLocationID` | integer | QuoteLocations |
| `calculateTaxSeparately` | boolean |  |
| `comment` | string (1000) |  |
| `createDate` | datetime |  |
| `creatorResourceID` | integer | Resources |
| `description` | string (2000) |  |
| `effectiveDate` | datetime |  |
| `extApprovalContactResponse` | integer |  |
| `extApprovalResponseDate` | datetime |  |
| `extApprovalResponseSignature` | string (250) |  |
| `groupByID` | integer |  |
| `impersonatorCreatorResourceID` | integer | Resources |
| `isActive` | boolean |  |
| `lastActivityDate` | datetime |  |
| `lastModifiedBy` | integer | Resources |
| `lastPublishedByResourceID` | integer | Resources |
| `lastPublishedDateTime` | datetime |  |
| `name` | string (100) |  |
| `paymentTerm` | integer |  |
| `paymentType` | integer |  |
| `purchaseOrderNumber` | string (50) |  |
| `quoteNumber` | integer |  |
| `quoteTemplateID` | integer | QuoteTemplates |
| `shippingType` | integer | ShippingTypes |
| `shipToLocationID` | integer | QuoteLocations |
| `showEachTaxInGroup` | boolean |  |
| `soldToLocationID` | integer | QuoteLocations |

