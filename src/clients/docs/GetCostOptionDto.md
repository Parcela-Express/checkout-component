# ParcelaExpressApi.GetCostOptionDto

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** |  | 
**fixed_amount** | **Number** |  | 
**bank_fixed_amount** | **Number** |  | 
**description** | **String** |  | 
**type** | **String** |  | 
**type_status** | **String** |  | 
**brand** | **String** |  | 
**brand_fee** | **Number** |  | 
**brand_fee_type** | **String** |  | [optional] 
**installments** | **Number** |  | 
**exchange_fee_type** | **String** |  | 
**exchange_fee** | **Number** |  | 
**anticipation_fee_type** | **String** |  | [optional] 
**anticipation_fee** | **Number** |  | 
**markup_fee_type** | **String** |  | [optional] 
**markup_fee** | **Number** |  | 
**is_cap** | **Boolean** |  | 
**exchange_cap** | **Number** |  | 



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




