# ConfigurationItems

About this entity This entity describes Autotask devices (previously known as assets or configuration items). Devices are products that are associated with an organization. Autotask users manage devices through the CRM Module ( CRM > Devices , or on the Devices tab of the Organization page).

- **Capabilities:** create — · update — · query — · delete —

## Fields (108)

| Field | Type |
|---|---|
| `true` | false |
| `apiVendorID` | The Tracking Identifier of the integration vendor that synced the device to Autotask. |
| `companyID` | References the Organization that owns the device on the Detail panel. companyID cannot be updated. Any companyID value provided on update is ignored. |
| `companylocationID` | References the Location on the Details panel. |
| `configurationItemCategoryID` | References the Device Category on the Main panel. If the API does not receive a value for configurationItemCategoryID during Create, the default device category will be assigned. The default values for all fields stored on the utilized device category will be applied. If the user specifies a value for a field that is also defaulted by the device category, the user's specified value will be used. All fields will be available on the configurationItem entity regardless of their visibility settings on the device category. The "required" status and available list value settings for fields stored on the device's device category will NOT be respected when creating or editing devices in the API. The system categories Domain and SSL Certificate are not displayed in the API. |
| `configurationItemType` | Device Type . Before Autotask introduced device categories, the main function of device types was the selection of the correct user-defined fields for a product and the devices based on it. This function has been transferred to device categories. We are maintaining this field for legacy integrations. |
| `contactID` | References the Contact on the Details panel. The contact must be: associated with the company referenced by the companyID or its parent company an active contact on Create and Update, although no error is thrown if the already associated contact was set to inactive |
| `contractID` | References the Contract on the Detail panel. The associated contract can be inactive. If the contract is associated with a Service Level Agreement (serviceLevelAgreementID), the Contract Service Level Agreement will not automatically be associated with the serviceLevelAgreementID, even if configurationItem does not have an associated Service Level Agreement. |
| `contractServiceBundleID` | References the Service or Bundle on the Details panel. You can either supply info for the service (serviceID or contractServiceID) or the bundle (serviceBundleID or contractServiceBundleID) but not both. |
| `contractServiceID` | integer |
| `createDate` | The Created date on the Main panel. The date the device was created in Autotask or in the syncing integration. |
| `createdByPersonID` | References the creator on the Main panel. The unique identifier of the contact or resource who created the device. |
| `dailyCost` | The Daily Cost on the Details panel. |
| `dattoAvailableKilobytes` | The fields starting with "datto" are fields that are synced from Datto BCDR. |
| `dattoDeviceMemoryMegabytes` | integer |
| `dattoDrivesErrors` | boolean |
| `dattoHostname` | string (255) |
| `dattoInternalIP` | string (255) |
| `dattoKernelVersionID` | integer |
| `dattoLastCheckInDateTime` | datetime |
| `dattoNICSpeedKilobitsPerSecond` | integer |
| `dattoNumberOfAgents` | integer |
| `dattoNumberOfDrives` | integer |
| `dattoNumberOfVolumes` | integer |
| `dattoOffsiteUsedBytes` | long |
| `dattoOSVersionID` | integer |
| `dattoPercentageUsed` | decimal |
| `dattoProtectedKilobytes` | long |
| `dattoRemoteIP` | string (255) |
| `dattoSerialNumber` | string (100) |
| `dattoUptimeSeconds` | integer |
| `dattoUsedKilobytes` | long |
| `dattoZFSVersionID` | integer |
| `deviceNetworkingID` | string (100) |
| `domain` | The Domain field on the Main panel when the category is Domain . To successfully create and store a domain name for a device, the domain value must adhere to the requirements described in our Creating and updating a Domain device > Populating the Domain field article. |
| `domainExpirationDateTime` | Expiration Date and Expiration Time fields on the Details panel when the category is Domain . |
| `domainLastUpdatedDateTime` | Last Updated Date and Last Updated Time fields on the Details panel when the category is Domain . |
| `domainRegistrarID` | References the Registrar of the domain on the Details panel when the category is Domain . |
| `domainRegistrationDateTime` | Registration Date and RegistrationTime fields on the Details panel when the category is Domain . |
| `hourlyCost` | The Hourly Cost on the Details panel. |
| `impersonatorCreatorResourceID` | The resource ID of the API user who impersonated the resource who created the device. |
| `installDate` | The Install Date on the Details panel. |
| `installedByContactID` | The unique identifier of the Client Portal user who created the device. |
| `installedByID` | References the resource that populates the Installed B y field on the Details panel. |
| `isActive` | Status on the Details panel. True if the status of the device is active. |
| `lastActivityPersonID` | References the resource who performed the last activity on the device. |
| `lastActivityPersonType` | Indicates whether the last activity was performed by a resource or a contact. This field cannot be queried. |
| `lastModifiedTime` | The Date field on the Tools > Device History page. |
| `location` | The Area field on the Details panel. |
| `monthlyCost` | The Monthly Cost on the Details panel. |
| `notes` | The Description field on the Main panel. |
| `numberOfUsers` | The Number of Users field on the Details panel. |
| `parentConfigurationItemID` | References the Parent Device on the Details panel. A device can have a two-level dependency with another device, called a parent-child relationship. For example, a desktop computer might be a parent to a printer, scanner, and monitors. There are no billing implications for this relationship. |
| `perUseCost` | The Per-Use Cost on the Details panel. |
| `productID` | References the Product field on the Main panel. If the configuration item was sourced from an InventoryStockedItems entity, its product ID will be tied to the product ID of the inventory item and cannot be changed via the API. You can tell if a configuration item is associated with an inventoryStockItem by querying the inventoryStockItem.configurationItemID field. |
| `referenceNumber` | The Reference Number on the Details panel. Reference numbers work like serial numbers, but you can assign them by using your own system. Reference numbers are not required by product categories. |
| `referenceTitle` | The Reference Name on the Details panel. |
| `rmmDeviceAuditAntivirusStatusID` | All fields that begin with "rmm" track data collected by the Datto RMM integration. All RMM fields are read-only. The rmmDeviceAuditOperatingSystem field cannot be queried. |
| `rmmDeviceAuditArchitectureID` | integer |
| `rmmDeviceAuditBackupStatusID` | integer |
| `rmmDeviceAuditDescription` | string (255) |
| `rmmDeviceAuditDeviceTypeID` | integer |
| `rmmDeviceAuditDisplayAdaptorID` | integer |
| `rmmDeviceAuditDomainID` | integer |
| `rmmDeviceAuditExternalIPAddress` | string (255) |
| `rmmDeviceAuditFirmwareID` | integer |
| `rmmDeviceAuditHostname` | string (255) |
| `rmmDeviceAuditIPAddress` | string (255) |
| `rmmDeviceAuditLastUser` | string (50) |
| `rmmDeviceAuditMacAddress` | string (255) |
| `rmmDeviceAuditManufacturerID` | integer |
| `rmmDeviceAuditMemoryBytes` | long |
| `rmmDeviceAuditMissingPatchCount` | integer |
| `rmmDeviceAuditMobileNetworkOperatorID` | integer |
| `rmmDeviceAuditMobileNumber` | string (255) |
| `rmmDeviceAuditModelID` | integer |
| `rmmDeviceAuditMotherboardID` | integer |
| `rmmDeviceAuditOperatingSystem` | string (255) |
| `rmmDeviceAuditPatchStatusID` | integer |
| `rmmDeviceAuditProcessorID` | integer |
| `rmmDeviceAuditServicePackID` | integer |
| `rmmDeviceAuditSNMPContact` | string (255) |
| `rmmDeviceAuditSNMPLocation` | string (255) |
| `rmmDeviceAuditSNMPName` | string (255) |
| `rmmDeviceAuditSoftwareStatusID` | integer |
| `rmmDeviceAuditStorageBytes` | long |
| `rmmDeviceID` |  |
| `rmmDeviceUID` |  |
| `rmmOpenAlertCount` |  |
| `serialNumber` | The Serial Number on the Details panel. If the configuration item was sourced from an InventoryStockedItems entity, the serial number will come from the inventoryStockedItem. If the serial number is updated via the API, the serial number for the related inventoryStockedItem will also be updated. |
| `serviceBundleID` | The Service or Bundle on the Details panel. The contract service or service bundle associated with the device for billing purposes. |
| `serviceID` | integer |
| `serviceLevelAgreementID` | The Service Level Agreement assigned to the device on the Details panel. |
| `setupFee` | The setup fee of the contract associated with the device. |
| `sourceChargeID` | The ID of the associated charge item (TicketCharge, ProjectCharge, ContractCharge, QuoteItem). This field is empty for devices that were not created from a charge or quote item. |
| `sourceChargeType` | The possible options are: Ticket Cost, Project Cost, Contract Cost, and Quote Item. This field is empty for devices that were not created from a charge or quote item. |
| `sslCommonName` | These fields appear on the SSL certificate linked to the device in the Related Devices section of the Main panel. They cannot be edited manually, only via update by the certificate authority. |
| `sslIssuedBy` | string (255) |
| `sslLocation` | string (255) |
| `sslOrganization` | string (255) |
| `sslOrganizationUnit` | string (255) |
| `sslSerialNumber` | string (100) |
| `sslSignatureAlgorithm` | string (255) |
| `sslSource` | string (32000) |
| `sslValidFromDateTime` | datetime |
| `sslValidUntilDateTime` | datetime |
| `vendorID` | References the organization ID of the Vendor on the Details panel. |
| `warrantyExpirationDate` | The Warranty Expiration Date on the Details panel. |

