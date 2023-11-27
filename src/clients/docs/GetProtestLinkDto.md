# ParcelaExpressApi.GetProtestLinkDto

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** |  | 
**amount** | **Number** |  | 
**fee** | **Number** |  | 
**description** | **String** |  | 
**url** | **String** |  | 
**email** | **String** |  | 
**token** | **String** |  | 
**payer** | [**GetProtestLinkPayerDto**](GetProtestLinkPayerDto.md) |  | 
**user** | [**GetProtestLinkUserDto**](GetProtestLinkUserDto.md) |  | 
**status** | **String** |  | 
**formatted_status** | **String** |  | 
**generated_by_payer** | **Boolean** |  | 
**formatted_generated_by_payer** | **String** |  | 
**sale** | [**GetProtestLinkSaleDto**](GetProtestLinkSaleDto.md) |  | 
**seller** | [**GetProtestLinkSellerDto**](GetProtestLinkSellerDto.md) |  | 
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



## Enum: StatusEnum


* `active` (value: `"active"`)

* `pending_capture` (value: `"pending_capture"`)

* `expired` (value: `"expired"`)

* `canceled` (value: `"canceled"`)

* `paid` (value: `"paid"`)




