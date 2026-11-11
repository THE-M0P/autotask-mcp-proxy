# ContractServiceBundles

Describes an Autotask Service Bundle added to a Recurring Service type contract. Autotask Service Bundles group multiple Services for purchase. In Autotask, Administrators create and manage Autotask Service Bundles from the Admin module: Products and Services > Services > Service Bundles . Service Bundles are added to a Contract when the contract is create or through the Contract Summary view.

- **Entity path:** `/atservicesrest/v1.0/ContractServiceBundles`
- **Capabilities:** create ✓ · update ✓ · query ✓ · delete —

## Fields (7)

| Field | Type | Notes |
|---|---|---|
| `adjustedPrice` | decimal | If the Multi-currency Installed Module is enabled, this field will return the relevant Customer Currency value instead of the Internal Currency value. adjustedUnitPrice allows a negative value (allows users to apply discount). |
| `invoiceDescription` | string (1000) | On Query(), if the contract service or bundle is configured to Use Standard Invoice Description in the UI, we will return the service/bundle’s invoice description from Admin. Otherwise we will return the custom invoice description value. On Create() or Update(), if no invoiceDescription value is supplied in the request, we will set the ContractService or ContractServiceBundle to Use Standard Invoice Description in the UI. Supplying an invoice description value matching the service/bundle’s invoice description in Admin will set the ContractService or ContractServiceBundle to Use Standard Invoice Description in the UI. Supplying any other value for invoice description will set the ContractService or ContractServiceBundle to Customize Invoice Description for this Contract ” in the UI. |
| `serviceBundleID` | integer | The same serviceBundleID can be added to the same contract more than once. |
| `unitPrice` | decimal | unitPrice allows a negative value (allows users to apply discount). If the Multi-currency Installed Module is enabled, this field will return the relevant Customer Currency value instead of the Internal Currency value. |
| `contractID` | integer | Contracts |
| `internalDescription` | string (100) |  |
| `quoteItemID` | long | QuoteItems |

