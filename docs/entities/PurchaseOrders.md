# PurchaseOrders

Describes an Autotask Inventory module Purchase Order. Purchase orders allow users to track one or more products ordered and received from Vendor type accounts. Purchase orders must be submitted (Status = Submitted ) before items can be received. Autotask users create and manage purchase orders from the Inventory module.

- **Entity path:** `/atservicesrest/v1.0/PurchaseOrders`
- **Capabilities:** create ✓ · update ✓ · query ✓ · delete —
- **Parent:** None
- **Children:** PurchaseOrderItems

## Access URLs

- `PurchaseOrders/query (GET, POST)`
- `PurchaseOrders/{id} (GET)`
- `PurchaseOrders/query/count (GET, POST)`
- `PurchaseOrders (PUT, POST, PATCH)`
- `PurchaseOrders/entityInformation (GET)`
- `PurchaseOrders/entityInformation/fields (GET)`
- `PurchaseOrders/entityInformation/userDefinedFields (GET)`

## Fields (32)

| Field | Type | Notes |
|---|---|---|
| `freight` | decimal | In multi-currency databases, the provided value is assumed to be in the vendor's currency. |
| `purchaseOrderTemplateID` | integer | If purchaseOrderTemplateID is null in the database, during query, the field will return the associated vendor account's (VendorID) purchaseOrderTemplateID, if it exists. If no VendorID is associated, or if the VendorID is not associated with a purchaseOrderTemplateID, then the system default purchase order template ID will return during query. |
| `showTaxCategory` | boolean | showTaxCategory defaults to false. |
| `status` | integer | On create, status = New On update: Current status can = New, Received Full, Received Partial, Canceled, or Submitted. When status = 'Received Full' or 'Received Partial', PurchaseOrder update is limited to the following fields: vendorInvoiceNumber externalPONumber paymentTerm taxRegionID showTaxCategory showEachTaxInGroup generalMemo purchaseForCompanyID status cannot be updated to ‘New’ or ‘Received in Full/Part’ status cannot be updated from 'New' to 'Submitted' unless Purchase Order Items have been created for the Purchase Order. status can be updated to Canceled when current status = 'Submitted', but cannot be updated to 'Canceled' when the current status = ‘ReceivedFull, or ReceivedPartial’. On update, the API will allow PurchaseOrderItem.Quantity to be updated when the status of the associated PurchaseOrder is ReceivedPartial or ReceivedFull. For additional details refer to Conditions and Requirements for PurchaseOrderItems . When the current PurchaseOrder status is 'Received Full', and the PurchaseOrderItem.Quantity value for one or more associated PurchaseOrderItems is debited, the PurchaseOrder status is updated as follows: If there are still received PurchaseOrderItem units associated with the PurchaseOrder, the status changes to 'Received Partial'. If there are no received units associated with the PurchaseOrder after PurchaseOrderItem(s) are debited, the status changes to 'Submitted'. The PurchaseOrder status 'Submitted' can be changed to 'Canceled'. When the current PurchaseOrder status is 'Received Partial', and the PurchaseOrderItem.Quantity value for one or more associated PurchaseOrderItems is debited, the PurchaseOrder status is updated as follows: If there are still received PurchaseOrderItem units associated with the PurchaseOrder after the PurchaseOrderItem.Quantity is debited, the status remains 'Received Partial'. If there are no received units remaining after PurchaseOrderItem.Quantity is debited, the status changes to 'Submitted'. The status 'Submitted' can be changed to 'Canceled'. |
| `taxRegionID` | integer | In Autotask, Tax Regions have replaced Tax Groups. To preserve existing API code, PurchaseOrder.taxRegionID passes the taxRegionID. |
| `useItemDescriptionsFrom` | integer | If no value is provided for useItemDescriptionsFrom, the API will use the default value specified in the Autotask Inventory system setting "Default Description to use for purchase order items." |
| `vendorID` | integer | vendorID must reference an active Company of companyType = Vendor |
| `vendorInvoiceNumber` | string (50) | During update, this field will act as read-only if any items on the purchase order have been received. During query, this field will return the vendor invoice number associated directly with the purchase order, if one exists. Otherwise, the field will return the vendor invoice number associated with receipt of the first item on the purchase order. When filtering, this field will do so on both the vendorInvoiceNumber and the additionalVendorInvoiceNumbers fields. For example, a filter for vendorInvoiceNumber equal to "VIN1" will return any POs where the vendorInvoiceNumber or any additionalVendorInvoiceNumber values are "VIN1." A filter for vendorInvoiceNumber not equal to "VIN1" will return any POs where the vendorInvoiceNumber and any additionalVendorInvoiceNumbers are not "VIN1." |
| `additionalVendorInvoiceNumbers` | string (8000) |  |
| `cancelDateTime` | datetime |  |
| `createDateTime` | datetime |  |
| `creatorResourceID` | integer |  |
| `externalPONumber` | string (50) |  |
| `fax` | string (25) |  |
| `generalMemo` | string (4000) |  |
| `impersonatorCreatorResourceID` | integer |  |
| `internalCurrencyFreight` | decimal |  |
| `latestEstimatedArrivalDate` | datetime |  |
| `paymentTerm` | integer |  |
| `phone` | string (25) |  |
| `purchaseForCompanyID` | integer |  |
| `purchaseOrderNumber` | string (50) |  |
| `shippingDate` | datetime |  |
| `shippingType` | integer |  |
| `shipToAddress1` | string (128) |  |
| `shipToAddress2` | string (128) |  |
| `shipToCity` | string (30) |  |
| `shipToName` | string (100) |  |
| `shipToPostalCode` | string (10) |  |
| `shipToState` | string (25) |  |
| `showEachTaxInGroup` | boolean |  |
| `submitDateTime` | datetime |  |

