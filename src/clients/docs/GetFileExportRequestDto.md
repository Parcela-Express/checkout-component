# ParcelaExpressApi.GetFileExportRequestDto

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** |  | 
**description** | **String** |  | 
**status** | **String** |  | 
**formatted_status** | **String** |  | 
**type** | **String** |  | 
**formatted_type** | **String** |  | 
**extension** | **String** |  | 
**start_date** | **String** |  | 
**end_date** | **String** |  | 
**user** | [**GetFileExportRequestUserDto**](GetFileExportRequestUserDto.md) |  | 
**seller** | [**GetFileExportRequestSellerDto**](GetFileExportRequestSellerDto.md) |  | 
**filename** | **String** |  | 
**key** | **String** |  | 
**url** | **String** |  | 
**created_at** | **String** |  | 
**updated_at** | **String** |  | 



## Enum: StatusEnum


* `pending` (value: `"pending"`)

* `failed` (value: `"failed"`)

* `finished` (value: `"finished"`)





## Enum: TypeEnum


* `sales` (value: `"sales"`)

* `sales_concil` (value: `"sales_concil"`)

* `payments` (value: `"payments"`)

* `settlement` (value: `"settlement"`)

* `settlement_transactions` (value: `"settlement_transactions"`)

* `settlements_batch_transactions` (value: `"settlements_batch_transactions"`)

* `protocols` (value: `"protocols"`)

* `sales_history` (value: `"sales_history"`)

* `sellers` (value: `"sellers"`)

* `sales_bill_payment` (value: `"sales_bill_payment"`)





## Enum: ExtensionEnum


* `xls` (value: `"xls"`)

* `csv` (value: `"csv"`)

* `json` (value: `"json"`)

* `pdf` (value: `"pdf"`)




