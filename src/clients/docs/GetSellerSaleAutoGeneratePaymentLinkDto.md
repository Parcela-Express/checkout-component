# ParcelaExpressApi.GetSellerSaleAutoGeneratePaymentLinkDto

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** |  | 
**description** | **String** |  | 
**created_at** | **String** |  | 
**original_amount** | **Number** |  | 
**type** | **String** |  | 
**payment_type** | [**GetSalePlanPaymentTypeDto**](GetSalePlanPaymentTypeDto.md) |  | 
**payer** | [**GetSalePayerDto**](GetSalePayerDto.md) |  | 
**billet** | [**GetBilletDto**](GetBilletDto.md) |  | 
**billet_payment_is_permitted** | **Boolean** |  | [optional] 
**qrcode_payment_is_permitted** | **Boolean** |  | [optional] 
**card_payment_is_permitted** | **Boolean** |  | [optional] 



## Enum: TypeEnum


* `boleto` (value: `"boleto"`)

* `pos` (value: `"pos"`)

* `payment_link` (value: `"payment_link"`)

* `protest_link` (value: `"protest_link"`)

* `online` (value: `"online"`)

* `auto_generate_payment_link` (value: `"auto_generate_payment_link"`)

* `auto_generate_protest_link` (value: `"auto_generate_protest_link"`)

* `billet_code` (value: `"billet_code"`)

* `bill_payment` (value: `"bill_payment"`)




