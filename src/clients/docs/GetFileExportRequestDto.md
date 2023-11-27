# ParcelaExpressApi.GetFileExportRequestDto

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** |  | 
**description** | **String** |  | 
**status** | **String** |  | 
**formattedStatus** | **String** |  | 
**type** | **String** |  | 
**formattedType** | **String** |  | 
**extension** | **String** |  | 
**startDate** | **String** |  | 
**endDate** | **String** |  | 
**user** | [**GetFileExportRequestUserDto**](GetFileExportRequestUserDto.md) |  | 
**seller** | [**GetFileExportRequestSellerDto**](GetFileExportRequestSellerDto.md) |  | 
**filename** | **String** |  | 
**key** | **String** |  | 
**url** | **String** |  | 
**createdAt** | **String** |  | 
**updatedAt** | **String** |  | 

<a name="StatusEnum"></a>
## Enum: StatusEnum

* `pending` (value: `"pending"`)
* `failed` (value: `"failed"`)
* `finished` (value: `"finished"`)


<a name="TypeEnum"></a>
## Enum: TypeEnum

* `sales` (value: `"sales"`)
* `salesConcil` (value: `"sales_concil"`)
* `payments` (value: `"payments"`)
* `settlement` (value: `"settlement"`)
* `settlementTransactions` (value: `"settlement_transactions"`)
* `settlementsBatchTransactions` (value: `"settlements_batch_transactions"`)


<a name="ExtensionEnum"></a>
## Enum: ExtensionEnum

* `xls` (value: `"xls"`)
* `csv` (value: `"csv"`)
* `json` (value: `"json"`)

