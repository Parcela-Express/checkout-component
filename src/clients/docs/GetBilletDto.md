# ParcelaExpressApi.GetBilletDto

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** |  | 
**url** | **String** |  | 
**sale_id** | **String** |  | [optional] 
**acquirer_reference** | **String** |  | [optional] 
**created_at** | **String** |  | [optional] 
**expires_at** | **String** |  | 
**barcode** | **String** |  | 
**type** | **String** |  | [optional] 
**formatted_type** | **String** |  | [optional] 
**description** | **String** |  | [optional] 
**formatted_description** | **String** |  | [optional] 
**email** | **String** |  | [optional] 
**original_amount** | **Object** |  | [optional] 
**status** | **String** |  | [optional] 
**seller_name** | **String** |  | [optional] 
**seller_document** | **String** |  | [optional] 
**payer_name** | **String** |  | [optional] 
**payer_email** | **String** |  | [optional] 
**payer_document** | **String** |  | [optional] 
**payer_address** | [**GetBilletPayerAddressDto**](GetBilletPayerAddressDto.md) |  | [optional] 
**billet_data** | [**GetBilletDataDto**](GetBilletDataDto.md) |  | [optional] 
**has_split_rules** | **Boolean** |  | [optional] 
**split_rules** | [**[CreateSplitRules]**](CreateSplitRules.md) |  | [optional] 
**metadata** | **Object** |  | 



## Enum: StatusEnum


* `pending` (value: `"pending"`)

* `pending_capture` (value: `"pending_capture"`)

* `in_progress_capture` (value: `"in_progress_capture"`)

* `succeeded` (value: `"succeeded"`)

* `canceled` (value: `"canceled"`)

* `pending_cancel` (value: `"pending_cancel"`)

* `abort` (value: `"abort"`)

* `failed` (value: `"failed"`)

* `waiting_confirmation` (value: `"waiting_confirmation"`)

* `expired` (value: `"expired"`)

* `waiting_cashIn` (value: `"waiting_cashIn"`)




