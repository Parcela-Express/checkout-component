# ParcelaExpressApi.GetCostOptionDto

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** |  | 
**fixedAmount** | **Number** |  | 
**bankFixedAmount** | **Number** |  | 
**description** | **String** |  | 
**type** | **String** |  | 
**typeStatus** | **String** |  | 
**brand** | **String** |  | 
**brandFee** | **Number** |  | 
**brandFeeType** | **String** |  | [optional] 
**installments** | **Number** |  | 
**exchangeFeeType** | **String** |  | 
**exchangeFee** | **Number** |  | 
**anticipationFeeType** | **String** |  | [optional] 
**anticipationFee** | **Number** |  | 
**markupFeeType** | **String** |  | [optional] 
**markupFee** | **Number** |  | 
**isCap** | **Boolean** |  | 
**exchangeCap** | **Number** |  | 

<a name="TypeEnum"></a>
## Enum: TypeEnum

* `credit` (value: `"credit"`)
* `debit` (value: `"debit"`)
* `pix` (value: `"pix"`)
* `billet` (value: `"billet"`)


<a name="TypeStatusEnum"></a>
## Enum: TypeStatusEnum

* `pending` (value: `"pending"`)
* `paid` (value: `"paid"`)


<a name="BrandEnum"></a>
## Enum: BrandEnum

* `visa` (value: `"visa"`)
* `elo` (value: `"elo"`)
* `mc` (value: `"mc"`)
* `amex` (value: `"amex"`)
* `hipercard` (value: `"hipercard"`)
* `_default` (value: `"default"`)


<a name="BrandFeeTypeEnum"></a>
## Enum: BrandFeeTypeEnum

* `fixed` (value: `"fixed"`)
* `percent` (value: `"percent"`)


<a name="ExchangeFeeTypeEnum"></a>
## Enum: ExchangeFeeTypeEnum

* `fixed` (value: `"fixed"`)
* `percent` (value: `"percent"`)


<a name="AnticipationFeeTypeEnum"></a>
## Enum: AnticipationFeeTypeEnum

* `fixed` (value: `"fixed"`)
* `percent` (value: `"percent"`)


<a name="MarkupFeeTypeEnum"></a>
## Enum: MarkupFeeTypeEnum

* `fixed` (value: `"fixed"`)
* `percent` (value: `"percent"`)

