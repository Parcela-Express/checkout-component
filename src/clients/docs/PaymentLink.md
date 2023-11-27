# ParcelaExpressApi.PaymentLink

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** |  | [optional] 
**amount** | **Number** |  | 
**description** | **String** |  | 
**url** | **String** |  | 
**token** | **String** |  | 
**email** | **String** |  | [optional] 
**phone** | **String** |  | [optional] 
**payer** | [**Payer**](Payer.md) |  | 
**payer_id** | **String** |  | [optional] 
**payer_name** | **String** |  | [optional] 
**payer_document** | **String** |  | 
**user** | [**User**](User.md) |  | [optional] 
**user_id** | **String** |  | [optional] 
**status** | **String** |  | 
**generated_by_payer** | **Boolean** |  | 
**sale** | [**Sale**](Sale.md) |  | 
**sale_id** | **String** |  | [optional] 
**sale_form_payment** | **String** |  | [optional] 
**seller** | [**Seller**](Seller.md) |  | 
**seller_id** | **String** |  | [optional] 
**created_at** | **String** |  | 
**created_at_time** | **Number** |  | [optional] 
**updated_at** | **String** |  | [optional] 
**updated_at_time** | **Number** |  | [optional] 
**expires_in** | **String** |  | 
**expires_in_time** | **Number** |  | [optional] 
**billet_payment_is_permitted** | **Boolean** |  | [optional] 
**qrcode_payment_is_permitted** | **Boolean** |  | [optional] 
**card_payment_is_permitted** | **Boolean** |  | [optional] 
**qrcode_url** | **String** |  | [optional] 
**payment_methods** | **[String]** |  | [optional] 
**pre_capture** | **Boolean** |  | [optional] 
**logo** | [**Logo**](Logo.md) |  | [optional] 
**logo_id** | **String** |  | [optional] 
**theme** | [**Theme**](Theme.md) |  | [optional] 
**theme_id** | **String** |  | [optional] 
**metadata** | **String** |  | [optional] 
**note** | **String** |  | [optional] 
**service_value** | **Number** |  | [optional] 



## Enum: StatusEnum


* `active` (value: `"active"`)

* `pending_capture` (value: `"pending_capture"`)

* `expired` (value: `"expired"`)

* `canceled` (value: `"canceled"`)

* `paid` (value: `"paid"`)





## Enum: SaleFormPaymentEnum


* `credit` (value: `"credit"`)

* `debit` (value: `"debit"`)

* `billet` (value: `"billet"`)

* `pix` (value: `"pix"`)

* `pending` (value: `"pending"`)

* `pix_pos` (value: `"pix_pos"`)





## Enum: [PaymentMethodsEnum]


* `card` (value: `"card"`)

* `billet` (value: `"billet"`)

* `pix` (value: `"pix"`)




