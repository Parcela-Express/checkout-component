# ParcelaExpressApi.CreateCostPlanOptionsDto

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**fixedAmount** | **Number** |  | 
**bankFixedAmount** | **Number** |  | 
**description** | **String** |  | 
**type** | **String** |  | 
**typeStatus** | **String** |  | [optional] 
**brand** | **String** |  | [optional] 
**brandFee** | **Number** |  | [optional] 
**brandFeeType** | **String** |  | [optional] 
**installments** | **Number** |  | [optional] 
**exchangeFeeType** | **String** |  | 
**exchangeFee** | **Number** |  | 
**anticipationFeeType** | **String** |  | [optional] 
**anticipationFee** | **Number** |  | [optional] 
**markupFeeType** | **String** |  | [optional] 
**markupFee** | **Number** |  | [optional] 
**isCap** | **Boolean** |  | [optional] 
**exchangeCap** | **Number** |  | [optional] 

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

