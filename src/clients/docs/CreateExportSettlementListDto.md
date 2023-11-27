# ParcelaExpressApi.CreateExportSettlementListDto

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**start_date** | **String** | Formato: yyyy-mm-dd | [optional] 
**end_date** | **String** | Formato: yyyy-mm-dd | [optional] 
**id** | **String** |  | [optional] 
**status** | **[String]** |  | [optional] 
**type** | **[String]** |  | [optional] 
**extension** | **String** |  | [optional] 
**seller_id** | **String** |  | [optional] 



## Enum: [StatusEnum]


* `pending` (value: `"pending"`)

* `paid` (value: `"paid"`)

* `sent` (value: `"sent"`)

* `pending_cancel` (value: `"pending_cancel"`)

* `canceled` (value: `"canceled"`)

* `failed` (value: `"failed"`)

* `resent` (value: `"resent"`)





## Enum: [TypeEnum]


* `PIX` (value: `"PIX"`)

* `TED` (value: `"TED"`)





## Enum: ExtensionEnum


* `xls` (value: `"xls"`)

* `csv` (value: `"csv"`)

* `json` (value: `"json"`)

* `pdf` (value: `"pdf"`)




