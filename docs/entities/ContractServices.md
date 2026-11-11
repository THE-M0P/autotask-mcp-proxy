# ContractServices

Describes an Autotask Service that has been added to a Recurring Service type contract. In Autotask, users add and manage Autotask Services from the Admin module: Products and Services > Services > Services . You add Services to a Contract when your create the contract or from the Contract Summary page.

- **Entity path:** `/atservicesrest/v1.0/ContractServices`
- **Capabilities:** create ✓ · update ✓ · query ✓ · delete —

## Fields (8)

| Field | Type | Notes |
|---|---|---|
| `adjustedPrice` |  | If the Multi-currency Installed Module is enabled, this field will return the relevant Customer Currency value instead of the Internal Currency value. adjustedUnitPrice allows a negative value (allows users to apply discount). |
| `invoiceDescription` | string (1000) | On Query(), if the contract service or bundle is configured to Use Standard Invoice Description in the UI, we will return the service/bundle’s invoice description from Admin. Otherwise we will return the custom invoice description value. On Create() or Update(), if no invoiceDescription value is supplied in the request, we will set the ContractService or ContractServiceBundle to Use Standard Invoice Description in the UI. Supplying an invoice description value matching the service/bundle’s invoice description in Admin will set the ContractService or ContractServiceBundle to Use Standard Invoice Description in the UI. Supplying any other value for invoice description will set the ContractService or ContractServiceBundle to Customize Invoice Description for this Contract ” in the UI. |
| `serviceID` | integer | The same Service ID can be added to a contract more than once. |
| `unitCost` | decimal | unitCost does not allow a negative value. On create, if no unitCost is supplied, it will default to the unitCost of the associated service. This entity field will return no information if the user account making the query does not have sufficient privileges to view cost data in the Autotask UI. Additionally, if an update request does not have the necessary permissions, the API will ignore the call's values for the field even if they are blank or would be otherwise required. |
| `unitPrice` | decimal | unitPrice allows a negative value (allows users to apply discount). If the Multi-currency Installed Module is enabled, this field will return the relevant Customer Currency value instead of the Internal Currency value. |
| `contractID` | integer |  |
| `internalDescription` | string (100) |  |
| `quoteItemID` | long |  |

