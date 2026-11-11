# Companies

The Companies entity describes an organization with which you do business. It is the pivotal entity in Autotask: all other entities such as contacts, tickets, or projects are directly or indirectly associated with an organization.

- **Capabilities:** create ✓ · update ✓ · query ✓ · delete —

## Fields (58)

| Field | Type | Notes |
|---|---|---|
| `additionalAddressInformation` | string (100) | Additional Address Information on the Details panel |
| `address1` | string (150) | Address 1 on the Details panel |
| `address2` | string (150) | Address 2 on the Details panel |
| `alternatePhone1` | string (25) | Alternate Phone 1 on the Details panel |
| `alternatePhone2` | string (25) | Alternate Phone 2 on the Details panel |
| `apiVendorID` | integer | If the organization is of the type Vendor and has created an integration with Autotask that is listed on the Integration Center page, this field will show the API Tracking Identifier that must be used for integrations by this vendor. |
| `assetValue` | decimal | Asset Value on the Details panel The total asset value of a publicly traded company. This field cannot be queried. |
| `billToAddressToUse` | integer | The Billing Address on the Invoice Settings accessory tab. In the UI, Invoice Settings are created separately from the Company entity and the Company entity must exist before they can be added. When using create() in the API, the organization doesn't exist yet and there are no additional locations, so the billToAddressToUse field will always default to the selection Use Organization Address . Any values provided for the related fields on create() are ignored. The billing address can only be changed in the UI. Users can choose the Organization Address or another Location Address , and if the organization is a sub-organization, the Parent Organization Address or the Parent Organization Billing Address . |
| `billingAddress1` | string (150) | These fields are populated by the organization or location address fields selected in billToAddressToUse. |
| `billingAddress2` | string (150) |  |
| `billToAdditionalAddressInformation` |  | string (100 ) |
| `billToCity` | string (50) |  |
| `billToCountryID` | integer | Countries |
| `billToState` | string (128) |  |
| `billToZipCode` | string (50) |  |
| `billToCompanyLocationID` | integer | References the location selected in billToAddressToUse. |
| `billToAttention` | string (50) | Attention on the Invoice Settings accessory tab. |
| `city` | string (50) | City on the Details panel |
| `classification` | integer | Classification on the Details panel |
| `companyCategoryID` | integer | References the Organization Category on the Main panel. The category must be active. While it is not possible to do so in the UI, you can use the API to create organizations with a companyCategory of API . |
| `companyName` | string (100) | Organization Name on the Main panel |
| `companyNumber` | string (50) | Organization Number on the Details panel |
| `companyType` |  | Organization Type on the Main panel companyType cannot be updated when isTaskFireActive is True. companyType cannot be changed from vendor if the organization is associated with any existing services. |
| `competitorID` | integer | References the Competitor on the Details panel |
| `countryID` | integer | References the Country on the Details panel |
| `createDate` | datetime | This system field tracks the date the organization was added to the database instance. |
| `createdByResourceID` | integer | The resource ID of the user who added the organization to the Autotask instance. |
| `currencyID` | integer | Currency on the Details panel In multi-currency databases, the billing currency associated with the organization. currencyID can be set at organization creation but then becomes read-only. This field is not required. If no currencyID is specified, the organization will use the organization's country's currencyID. If no currency is specified for the organization or the organization's country, the organization will use the internal currency. |
| `fax` | string (25) | Fax Number on the Details panel |
| `impersonatorCreatorResourceID` | integer | The ID of the API user who is impersonating the creator of the organization. |
| `invoiceEmailMessageID` | integer | The ID of the Invoice Email Message on the Invoice Settings accessory tab. |
| `invoiceMethod` | integer | Transmission Method on the Invoice Settings accessory tab.Options are: Print (2) - default Email (3) PrintAndEmail (4) When the QuickBooks extension is enabled, the default value is controlled by the Contracts System Setting QuickBooks Transmission Method ( > Features & Settings > Application-Wide > System Settings > Contracts ). |
| `invoiceNonContractItemsToParentCompany` | boolean | Invoice non-contract items to Parent Organization check box on the Invoice Settings accessory tab. Enabled for sub-organizations. Requires a value for billToAddressToUse . |
| `invoiceTemplateID` | integer | The ID of the Invoice Template on the Invoice Settings accessory tab. |
| `isActive` | boolean | Status on the Details panel. True if the status of the organization is active. |
| `isClientPortalActive` | boolean | Enabled for Client Portal on the Client Portal Organization Details page. True if the Client Portal for the organization is active. |
| `isEnabledForComanaged` | boolean | Select Enable/Disable Co-Management from the Tools menu. When changed from True to False during an update, we will delete any existing co-managed associations for the organization. |
| `isTaskFireActive` | boolean | Enabled for Taskfire on the Client Portal Organization Details page. True if Taskfire has been enabled for the organization. |
| `isTaxExempt` | boolean | Tax Exempt on the Invoice Settings accessory tab. |
| `lastActivityDate` | datetime | Tracked on the Tools > Organization History page and in the Last Activity field on the Main panel. A change to a linked dependent entity is considered an activity on the entity. The initiating resource is usually tracked, as well, but no additional details are available. |
| `lastTrackedModifiedDateTime` | datetime | Tracked on the Tools > Organization History page and in the Last Activity field on the Main panel. Any change to a field on the entity itself is considered a modification, and in addition to the date and time, the old and new values will be tracked. Changes to the following organization fields will update this field: Company Manager (ownerResourceID) isActive Additional Address Info Additional Info - Stock Symbol Address 1 Address 2 Alternate Phone 1 Alternate Phone 2 Asset Value City Classification isClientPortalActive Company Alert Company Name Company Number Company Type Company UDF's Competitor Country startDate currencyID Fax ID Market Segment New Ticket Alert Opted Out from Surveys Parent Company Name (ID) Phone & Extension Round-Trip Distance (Miles) SIC Code Site Configuration UDF's State Stock Market isTaskFireActive Tax Exempt Tax ID Tax Region Territory Name Ticket Detail Alert Web Site Zip |
| `marketSegmentID` | integer | Market Segment on the Details panel |
| `ownerResourceID` | integer | References the Account Manager on the Details panel. Resource Type for Owner resourceThe ownerResourceID must reference an active, standard Autotask resource with security level access to the CRM module. A resource with a non-standard security level, for example, API user (API only), is not a valid selection for ownerResourceID. |
| `parentCompanyID` | integer | References the Parent Organization on the Details panel. If the organization has a parentCompanyID specified and the parentCompanyID is removed (the Parent/Sub-Organization relationship is terminated), then all parentCompany Contacts associated with the Company's items will be cleared. |
| `phone` | string (25) | Phone on the Details panel |
| `postalCode` | string (30) | Zip Code on the Details panel |
| `purchaseOrderTemplateID` | integer | The ID of the Purchase Order Template on the Purchase Order Settings accessory tab. If purchaseOrderTemplateID is null in the database, during query, the field will return the associated country's purchaseOrderTemplateID if it exists. If no country is associated, or if the country is not associated with a purchaseOrderTemplateID, then the query will return the system default purchase order template ID. |
| `quoteEmailMessageID` | integer | The ID of the Quote Email Message on the Quote Settings accessory tab. |
| `quoteTemplateID` | integer | The ID of the Quote Template on the Quote Settings accessory tab. |
| `sicCode` | string (32) | SIC Code on the Details panel. This field cannot be queried. |
| `state` | string (50) | State on the Details panel |
| `stockMarket` | string (10) | Stock Market on the Details panel. This field cannot be queried. |
| `stockSymbol` | string (10) | Stock Symbol on the Details panel. This field cannot be queried. |
| `surveyCompanyRating` | decimal | Organization Survey Score on the Search Organizations table. The average survey rating of all feedback by this organization. |
| `taxID` | string (50) | The Tax ID of the organization on the Invoice Settings accessory tab. |
| `taxRegionID` | integer | The Tax Region of the organization on the Invoice Settings accessory tab. Can be null only when isTaxExempt is True. |
| `territoryID` | integer | Territory on the Details panel |
| `webAddress` | string (255) | Web on the Details panel |

