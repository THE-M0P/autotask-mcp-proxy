# Contracts

The Contracts entity describes an Autotask Contract. Contracts specify a billing arrangement with a Company. Autotask users manage contracts through the Contracts module. Autotask currently provides six contract types: Time and Materials, Fixed Price, Block Hours, Retainer, Incident, and Recurring Service. When creating a Contract, you must specify a Contract Type (contract.contractType).

- **Entity path:** `/atservicesrest/v1.0/Contracts`
- **Capabilities:** create ✓ · update ✓ · query ✓ · delete —
- **Parent:** None
- **Children:** ContractBillingRules, ContractBlockHourFactors, ContractBlocks, ContractCharges, ContractExclusionBillingCodes, ContractExclusionRoles, ContractMilestones, ContractNotes, ContractRates, ContractRetainers, ContractRoleCosts, ContractServiceAdjustments, ContractServiceBundleAdjustments, ContractServiceBundles, ContractServiceBundleUnits, ContractServices, ContractServiceUnits, ContractTicketPurchases

## Access URLs

- `Contracts/query (GET, POST)`
- `Contracts/{id} (GET)`
- `Contracts/query/count (GET, POST)`
- `Contracts (PUT, POST, PATCH)`
- `Contracts/entityInformation (GET)`
- `Contracts/entityInformation/fields (GET)`
- `Contracts/entityInformation/userDefinedFields (GET)`

## Fields (32)

| Field | Type | Notes |
|---|---|---|
| `billingPreference` | integer | billingPreference field is required for all Contract types. On create, if no value is provided for contract.billingPreference, the value defaults to 2 (Reconcile Billing, that is, Manually). On update, if no value is provided for contract.billingPreference, the existing value will not update. |
| `billToCompanyID` | integer | When multi-currency is enabled, billToCompanyID must have the same currency as companyID. billToCompanyID is required if supplying a value for billToCompanyContactID. |
| `isCompliant` | boolean | contract.isCompliant can be set to True for all ContractTypes, but can only be set to False for ContractType = 7 (Recurring Service contract). Recurring Service is the only contract type that includes a compliance component. |
| `contactID` | integer | On create and update: The API will first look for a contactID. If one is provided and it is valid, it will be associated with the Contract and contract.contactName will be ignored. If an invalid contactID is provided, the call will fail. If no contactID is provided, the API will compare contactName (sorting full name) to active Contacts with company.id equal to contract.companyID and to active Contacts associated with that Company's parentCompany, if applicable. If a match is found, contract.contactName will map to contactID for that Contact. If no match is found, contract.contactID will be set to Null, but the call will not fail. |
| `contactName` | string (250) | On create and update, contract.contactName must be in firstName, lastName format. On create and update, contract.contactName must be in firstName, lastName format. Query on contactName must use sorting full name formatting "firstName, lastName." If multiple Contacts are returned with the same sorting full name and associated with the same account, the isActive contact with the most recent lastActivityDate value (based on ContactId) will be selected. contactName will accept contact names from a parentCompany associated with the contract.companyID. |
| `contractExclusionSetID` | integer | The contractExclusionSetID field must reference an active ContractExclusionSet when making a create call or when changing the field value during an update call. |
| `contractPeriodType` | integer | contractPeriodType field is required for Recurring Service type contracts. |
| `exclusionContractID` | long | exclusionContractID cannot equal contract.id as exclusionContractID is a read-only field. |
| `timeReportingRequiresStartAndStopTimes` |  | timeReportingRequiresStartAndStopTimes allows only 0 or 1. |
| `opportunityID` | integer | An associated opportunity must belong to the contract’s account or to any child account of the contract’s account. That is, contract.opportunityID must reference an Opportunity where opportunity.companyID either equals contract.companyID or references a Company where company.parentCompanyID equals contract.companyID |
| `setupFee` | decimal | setupFee field is Required for Recurring Service type Contracts. |
| `setupFeeBillingCodeID` | long | You cannot select the RMA system material code for setupFeeBillingCodeID. |
| `startDate` | datetime | contract.startDate must be < contract.endDate. |
| `billToCompanyContactID` | integer | Contacts |
| `companyID` | integer | Companies |
| `contractCategory` | integer |  |
| `contractName` | string (100) |  |
| `contractNumber` | string (50) |  |
| `contractType` | integer |  |
| `description` | string (2000) |  |
| `endDate` | datetime |  |
| `estimatedCost` | decimal |  |
| `estimatedHours` | decimal |  |
| `estimatedRevenue` | decimal |  |
| `isDefaultContract` | boolean |  |
| `lastModifiedDateTime` | datetime |  |
| `organizationalLevelAssociationID` | integer | OrganizationalLevelAssociations |
| `overageBillingRate` | decimal |  |
| `purchaseOrderNumber` | string (50) |  |
| `renewedContractID` | long |  |
| `serviceLevelAgreementID` | integer |  |
| `status` | integer |  |

