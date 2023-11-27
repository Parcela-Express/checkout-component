# ParcelaExpressApi.CostOption

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** |  | [optional] 
**fixed_amount** | **Number** |  | 
**bank_fixed_amount** | **Number** |  | 
**description** | **String** |  | 
**type** | **String** |  | 
**type_status** | **String** |  | [optional] 
**brand** | **String** |  | [optional] 
**brand_fee_type** | **String** |  | [optional] 
**brand_fee** | **Number** |  | [optional] 
**installments** | **Number** |  | [optional] 
**exchange_fee_type** | **String** |  | 
**exchange_fee** | **Number** |  | 
**anticipation_fee_type** | **String** |  | [optional] 
**anticipation_fee** | **Number** |  | [optional] 
**markup_fee_type** | **String** |  | [optional] 
**markup_fee** | **Number** |  | [optional] 
**is_cap** | **Boolean** |  | [optional] 
**exchange_cap** | **Number** |  | [optional] 



## Enum: TypeEnum


* `credit` (value: `"credit"`)

* `debit` (value: `"debit"`)

* `pix` (value: `"pix"`)

* `billet` (value: `"billet"`)

* `pix_pos` (value: `"pix_pos"`)





## Enum: TypeStatusEnum


* `pending` (value: `"pending"`)

* `paid` (value: `"paid"`)





## Enum: BrandEnum


* `visa` (value: `"visa"`)

* `elo` (value: `"elo"`)

* `mc` (value: `"mc"`)

* `amex` (value: `"amex"`)

* `hipercard` (value: `"hipercard"`)

* `default` (value: `"default"`)





## Enum: BrandFeeTypeEnum


* `fixed` (value: `"fixed"`)

* `percent` (value: `"percent"`)





## Enum: ExchangeFeeTypeEnum


* `fixed` (value: `"fixed"`)

* `percent` (value: `"percent"`)





## Enum: AnticipationFeeTypeEnum


* `fixed` (value: `"fixed"`)

* `percent` (value: `"percent"`)





## Enum: MarkupFeeTypeEnum


* `fixed` (value: `"fixed"`)

* `percent` (value: `"percent"`)




