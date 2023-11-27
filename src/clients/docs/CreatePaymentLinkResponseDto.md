# ParcelaExpressApi.CreatePaymentLinkResponseDto

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
**payer** | [**CreatePaymentLinkPayerResponseDto**](CreatePaymentLinkPayerResponseDto.md) |  | 
**status** | **String** |  | 
**formatted_status** | **String** |  | 
**sale** | [**CreatePaymentLinkSaleResponseDto**](CreatePaymentLinkSaleResponseDto.md) |  | 
**seller** | [**CreatePaymentLinkSellerResponseDto**](CreatePaymentLinkSellerResponseDto.md) |  | 
**created_at** | **String** |  | 
**expires_in** | **String** |  | 
**qrcode_url** | **String** |  | [optional] 
**payment_methods** | **[String]** |  | [optional] 
**pre_capture** | **Boolean** |  | 
**metadata** | **Object** |  | 
**note** | **String** |  | [optional] 
**billet** | [**CreateBilletDto**](CreateBilletDto.md) |  | 



## Enum: StatusEnum


* `active` (value: `"active"`)

* `pending_capture` (value: `"pending_capture"`)

* `expired` (value: `"expired"`)

* `canceled` (value: `"canceled"`)

* `paid` (value: `"paid"`)




