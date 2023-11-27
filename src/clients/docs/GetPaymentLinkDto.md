# ParcelaExpressApi.GetPaymentLinkDto

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** |  | 
**amount** | **Number** |  | 
**description** | **String** |  | 
**url** | **String** |  | 
**email** | **String** |  | 
**phone** | **String** |  | 
**token** | **String** |  | 
**payer_name** | **String** |  | 
**payer_document** | **String** |  | 
**payer** | [**GetPaymentLinkPayerDto**](GetPaymentLinkPayerDto.md) |  | 
**user** | [**GetPaymentLinkUserDto**](GetPaymentLinkUserDto.md) |  | 
**status** | **String** |  | 
**formatted_status** | **String** |  | 
**generated_by_payer** | **Boolean** |  | 
**formatted_generated_by_payer** | **String** |  | 
**sale** | [**GetPaymentLinkSaleDto**](GetPaymentLinkSaleDto.md) |  | 
**seller** | [**GetPaymentLinkSellerDto**](GetPaymentLinkSellerDto.md) |  | 
**created_at** | **String** |  | 
**updated_at** | **String** |  | 
**expires_in** | **String** |  | 
**billet_payment_is_permitted** | **Boolean** |  | [optional] 
**qrcode_payment_is_permitted** | **Boolean** |  | [optional] 
**card_payment_is_permitted** | **Boolean** |  | [optional] 
**qrcode_url** | **String** |  | [optional] 
**payment_methods** | **[String]** |  | [optional] 
**pre_capture** | **Boolean** |  | 
**logo** | [**GetLogoDto**](GetLogoDto.md) |  | 
**theme** | [**GetThemeDto**](GetThemeDto.md) |  | 
**metadata** | **Object** |  | 
**note** | **String** |  | [optional] 
**service_value** | **Number** |  | [optional] 



## Enum: StatusEnum


* `active` (value: `"active"`)

* `pending_capture` (value: `"pending_capture"`)

* `expired` (value: `"expired"`)

* `canceled` (value: `"canceled"`)

* `paid` (value: `"paid"`)




