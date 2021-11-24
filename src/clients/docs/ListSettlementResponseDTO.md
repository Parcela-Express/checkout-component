# ParcelaExpressApi.ListSettlementResponseDTO

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**settlementDay** | **String** | Formato: yyyy-mm-dd | 
**total** | **Number** |  | 
**id** | **String** |  | 
**sellerDocument** | **String** |  | 
**status** | **String** |  | 
**type** | **String** |  | 
**seller** | [**ListSettlementSellerDto**](ListSettlementSellerDto.md) |  | 

<a name="StatusEnum"></a>
## Enum: StatusEnum

* `pending` (value: `"pending"`)
* `paid` (value: `"paid"`)
* `sent` (value: `"sent"`)
* `pendingCancel` (value: `"pending_cancel"`)
* `canceled` (value: `"canceled"`)
* `failed` (value: `"failed"`)


<a name="TypeEnum"></a>
## Enum: TypeEnum

* `PIX` (value: `"PIX"`)
* `TED` (value: `"TED"`)

