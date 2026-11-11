# Companies

About this entity The Companies entity describes an organization with which you do business. It is the pivotal entity in Autotask: all other entities such as contacts, tickets, or projects are directly or indirectly associated with an organization.

- **Capabilities:** create — · update — · query — · delete —

## Fields (59)

| Field | Type |
|---|---|
| `true` | false |
| `additionalAddressInformation` | Additional Address Information on the Details panel |
| `address1` | Address 1 on the Details panel |
| `address2` | Address 2 on the Details panel |
| `alternatePhone1` | Alternate Phone 1 on the Details panel |
| `alternatePhone2` | Alternate Phone 2 on the Details panel |
| `apiVendorID` | If the organization is of the type Vendor and has created an integration with Autotask that is listed on the Integration Center page, this field will show the API Tracking Identifier that must be used for integrations by this vendor. |
| `assetValue` | Asset Value on the Details panel The total asset value of a publicly traded company. This field cannot be queried. |
| `billToAddressToUse` | The Billing Address on the Invoice Settings accessory tab. In the UI, Invoice Settings are created separately from the Company entity and the Company entity must exist before they can be added. When using create() in the API, the organization doesn't exist yet and there are no additional locations, so the billToAddressToUse field will always default to the selection Use Organization Address . Any values provided for the related fields on create() are ignored. The billing address can only be changed in the UI. Users can choose the Organization Address or another Location Address , and if the organization is a sub-organization, the Parent Organization Address or the Parent Organization Billing Address . |
| `billingAddress1` | These fields are populated by the organization or location address fields selected in billToAddressToUse. |
| `billingAddress2` | string (150) |
| `billToAdditionalAddressInformation` | string (100 ) |
| `billToCity` | string (50) |
| `billToCountryID` | integer |
| `billToState` | string (128) |
| `billToZipCode` | string (50) |
| `billToCompanyLocationID` | References the location selected in billToAddressToUse. |
| `billToAttention` | Attention on the Invoice Settings accessory tab. |
| `city` | City on the Details panel |
| `classification` | Classification on the Details panel |
| `companyCategoryID` | References the Organization Category on the Main panel. The category must be active. While it is not possible to do so in the UI, you can use the API to create organizations with a companyCategory of API . |
| `companyName` | Organization Name on the Main panel |
| `companyNumber` | Organization Number on the Details panel |
| `companyType` | Organization Type on the Main panel companyType cannot be updated when isTaskFireActive is True. companyType cannot be changed from vendor if the organization is associated with any existing services. |
| `competitorID` | References the Competitor on the Details panel |
| `countryID` | References the Country on the Details panel |
| `createDate` | This system field tracks the date the organization was added to the database instance. |
| `createdByResourceID` | The resource ID of the user who added the organization to the Autotask instance. |
| `currencyID` | Currency on the Details panel In multi-currency databases, the billing currency associated with the organization. currencyID can be set at organization creation but then becomes read-only. This field is not required. If no currencyID is specified, the organization will use the organization's country's currencyID. If no currency is specified for the organization or the organization's country, the organization will use the internal currency. |
| `fax` | Fax Number on the Details panel |
| `impersonatorCreatorResourceID` | The ID of the API user who is impersonating the creator of the organization. |
| `invoiceEmailMessageID` | The ID of the Invoice Email Message on the Invoice Settings accessory tab. |
| `invoiceMethod` | Transmission Method on the Invoice Settings accessory tab.Options are: Print (2) - default Email (3) PrintAndEmail (4) When the QuickBooks extension is enabled, the default value is controlled by the Contracts System Setting QuickBooks Transmission Method ( > Features & Settings > Application-Wide > System Settings > Contracts ). |
| `invoiceNonContractItemsToParentCompany` | Invoice non-contract items to Parent Organization check box on the Invoice Settings accessory tab. Enabled for sub-organizations. Requires a value for billToAddressToUse . |
| `invoiceTemplateID` | The ID of the Invoice Template on the Invoice Settings accessory tab. |
| `isActive` | Status on the Details panel. True if the status of the organization is active. |
| `isClientPortalActive` | Enabled for Client Portal on the Client Portal Organization Details page. True if the Client Portal for the organization is active. |
| `isEnabledForComanaged` | Select Enable/Disable Co-Management from the Tools menu. When changed from True to False during an update, we will delete any existing co-managed associations for the organization. |
| `isTaskFireActive` | Enabled for Taskfire on the Client Portal Organization Details page. True if Taskfire has been enabled for the organization. |
| `isTaxExempt` | Tax Exempt on the Invoice Settings accessory tab. |
| `lastActivityDate` | Tracked on the Tools > Organization History page and in the Last Activity field on the Main panel. A change to a linked dependent entity is considered an activity on the entity. The initiating resource is usually tracked, as well, but no additional details are available. |
| `lastTrackedModifiedDateTime` | Tracked on the Tools > Organization History page and in the Last Activity field on the Main panel. Any change to a field on the entity itself is considered a modification, and in addition to the date and time, the old and new values will be tracked. Changes to the following organization fields will update this field: Company Manager (ownerResourceID) isActive Additional Address Info Additional Info - Stock Symbol Address 1 Address 2 Alternate Phone 1 Alternate Phone 2 Asset Value City Classification isClientPortalActive Company Alert Company Name Company Number Company Type Company UDF's Competitor Country startDate currencyID Fax ID Market Segment New Ticket Alert Opted Out from Surveys Parent Company Name (ID) Phone & Extension Round-Trip Distance (Miles) SIC Code Site Configuration UDF's State Stock Market isTaskFireActive Tax Exempt Tax ID Tax Region Territory Name Ticket Detail Alert Web Site Zip |
| `marketSegmentID` | Market Segment on the Details panel |
| `ownerResourceID` | References the Account Manager on the Details panel. Resource Type for Owner resourceThe ownerResourceID must reference an active, standard Autotask resource with security level access to the CRM module. A resource with a non-standard security level, for example, API user (API only), is not a valid selection for ownerResourceID. |
| `parentCompanyID` | References the Parent Organization on the Details panel. If the organization has a parentCompanyID specified and the parentCompanyID is removed (the Parent/Sub-Organization relationship is terminated), then all parentCompany Contacts associated with the Company's items will be cleared. |
| `phone` | Phone on the Details panel |
| `postalCode` | Zip Code on the Details panel |
| `purchaseOrderTemplateID` | The ID of the Purchase Order Template on the Purchase Order Settings accessory tab. If purchaseOrderTemplateID is null in the database, during query, the field will return the associated country's purchaseOrderTemplateID if it exists. If no country is associated, or if the country is not associated with a purchaseOrderTemplateID, then the query will return the system default purchase order template ID. |
| `quoteEmailMessageID` | The ID of the Quote Email Message on the Quote Settings accessory tab. |
| `quoteTemplateID` | The ID of the Quote Template on the Quote Settings accessory tab. |
| `sicCode` | SIC Code on the Details panel. This field cannot be queried. |
| `state` | State on the Details panel |
| `stockMarket` | Stock Market on the Details panel. This field cannot be queried. |
| `stockSymbol` | Stock Symbol on the Details panel. This field cannot be queried. |
| `surveyCompanyRating` | Organization Survey Score on the Search Organizations table. The average survey rating of all feedback by this organization. |
| `taxID` | The Tax ID of the organization on the Invoice Settings accessory tab. |
| `taxRegionID` | The Tax Region of the organization on the Invoice Settings accessory tab. Can be null only when isTaxExempt is True. |
| `territoryID` | Territory on the Details panel |
| `webAddress` | Web on the Details panel |

