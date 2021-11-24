# ParcelaExpressApi.CreateExportSettlementListDto

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**startDate** | **String** | Formato: yyyy-mm-dd | [optional] 
**endDate** | **String** | Formato: yyyy-mm-dd | [optional] 
**id** | **String** |  | [optional] 
**status** | **[String]** |  | [optional] 
**type** | **[String]** |  | [optional] 
**extension** | **String** |  | [optional] 
**sellerId** | **String** |  | [optional] 

<a name="[StatusEnum]"></a>
## Enum: [StatusEnum]

* `pending` (value: `"pending"`)
* `paid` (value: `"paid"`)
* `sent` (value: `"sent"`)
* `pendingCancel` (value: `"pending_cancel"`)
* `canceled` (value: `"canceled"`)
* `failed` (value: `"failed"`)


<a name="[TypeEnum]"></a>
## Enum: [TypeEnum]

* `PIX` (value: `"PIX"`)
* `TED` (value: `"TED"`)


<a name="ExtensionEnum"></a>
## Enum: ExtensionEnum

* `xls` (value: `"xls"`)
* `csv` (value: `"csv"`)
* `json` (value: `"json"`)

