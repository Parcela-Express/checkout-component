# ParcelaExpressApi.GetSellerSaleAutoGeneratePaymentLinkDto

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** |  | 
**description** | **String** |  | 
**createdAt** | **String** |  | 
**originalAmount** | **Number** |  | 
**type** | **String** |  | 
**paymentType** | [**GetSalePlanPaymentTypeDto**](GetSalePlanPaymentTypeDto.md) |  | 
**payer** | [**GetSalePayerDto**](GetSalePayerDto.md) |  | 
**billet** | [**GetBilletDto**](GetBilletDto.md) |  | 
**billetPaymentIsPermitted** | **Boolean** |  | [optional] 
**qrcodePaymentIsPermitted** | **Boolean** |  | [optional] 
**cardPaymentIsPermitted** | **Boolean** |  | [optional] 

<a name="TypeEnum"></a>
## Enum: TypeEnum

* `boleto` (value: `"boleto"`)
* `pos` (value: `"pos"`)
* `paymentLink` (value: `"payment_link"`)
* `protestLink` (value: `"protest_link"`)
* `online` (value: `"online"`)
* `autoGeneratePaymentLink` (value: `"auto_generate_payment_link"`)
* `autoGenerateProtestLink` (value: `"auto_generate_protest_link"`)

