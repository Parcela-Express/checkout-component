# ParcelaExpressApi.GetSessionDto

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** |  | [optional] 
**amount** | **Number** |  | 
**form_payment** | **String** |  | 
**recurrence_day** | **Number** |  | 
**installments** | **Number** |  | 
**card_token** | **String** |  | 
**confirmation_required** | **Boolean** |  | [optional] 
**service_id** | **String** |  | 
**protocol** | **String** |  | 
**split_rules** | [**[GetSplitRulesSessionDto]**](GetSplitRulesSessionDto.md) |  | [optional] 
**main_sales_created** | **[String]** |  | 
**status** | **String** |  | 
**description** | **String** |  | 
**payer_name** | **String** |  | 
**payer_email** | **String** |  | 
**payer_document** | **String** |  | 
**payer_phone** | **String** |  | [optional] 
**seller_id** | **String** |  | 
**created_at** | **String** |  | [optional] 
**updated_at** | **Date** |  | [optional] 



## Enum: StatusEnum


* `active` (value: `"active"`)

* `inactive` (value: `"inactive"`)




