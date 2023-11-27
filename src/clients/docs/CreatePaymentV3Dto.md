# ParcelaExpressApi.CreatePaymentV3Dto

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**amount_cents** | **Number** | Valor em centavos | 
**description** | **String** | Descrição | 
**card_attributes** | [**CardDTO**](CardDTO.md) | Informações do cartão | 
**installment_plan** | [**InstallmentPlanDTO**](InstallmentPlanDTO.md) | Parcelamento | 
**customer** | [**CustomerDTO**](CustomerDTO.md) | Cliente | 
**pre_capture** | **Boolean** | Pré captura | [optional] 
**form_payment** | **String** | Forma de pagamento | [optional] 
**success_return_url** | **String** | Url de redirecionamento de sucesso (exclusivo 3DS) | [optional] 
**error_return_url** | **String** | Url de redirecionamento de erro (exclusivo 3DS) | [optional] 
**sale_id** | **String** |  | [optional] 
**protest_link** | **Boolean** |  | [optional] 
**amount_fee** | **Number** |  | [optional] 
**shopper** | [**ShopperPaymentV3DTO**](ShopperPaymentV3DTO.md) |  | [optional] 



## Enum: FormPaymentEnum


* `credit` (value: `"credit"`)

* `debit` (value: `"debit"`)

* `billet` (value: `"billet"`)

* `pix` (value: `"pix"`)

* `pending` (value: `"pending"`)

* `pix_pos` (value: `"pix_pos"`)




