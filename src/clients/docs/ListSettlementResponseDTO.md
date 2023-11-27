# ParcelaExpressApi.ListSettlementResponseDTO

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**settlement_day** | **String** | Formato: yyyy-mm-dd | [readonly] 
**total** | **Number** |  | [readonly] 
**id** | **String** |  | 
**seller_document** | **String** |  | 
**status** | **String** |  | 
**type** | **String** |  | 
**seller** | [**ListSettlementSellerDto**](ListSettlementSellerDto.md) |  | 
**cnab_id** | **String** |  | [optional] 
**is_retry** | **Boolean** |  | [optional] 



## Enum: StatusEnum


* `pending` (value: `"pending"`)

* `paid` (value: `"paid"`)

* `sent` (value: `"sent"`)

* `pending_cancel` (value: `"pending_cancel"`)

* `canceled` (value: `"canceled"`)

* `failed` (value: `"failed"`)

* `resent` (value: `"resent"`)





## Enum: TypeEnum


* `PIX` (value: `"PIX"`)

* `TED` (value: `"TED"`)




