# ParcelaExpressApi.GetUserLoginSellerDto

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** |  | 
**name** | **String** |  | 
**description** | **String** |  | 
**document** | **String** |  | 
**stateRegistration** | **String** |  | 
**code** | **String** |  | 
**absorbCosts** | **[String]** |  | [optional] 
**settlementType** | **String** |  | 
**acquirers** | [**[GetAcquirerDto]**](GetAcquirerDto.md) |  | [optional] 
**address** | [**GetAddressDto**](GetAddressDto.md) |  | 
**bankAccount** | [**GetBankAccountDto**](GetBankAccountDto.md) |  | 
**isSplit** | **Boolean** |  | 
**phone** | **String** |  | 
**status** | **String** |  | 
**type** | **String** |  | 
**merchant** | [**GetMerchantDto**](GetMerchantDto.md) |  | 
**salePlan** | [**GetSellerSalePlanDto**](GetSellerSalePlanDto.md) |  | 
**pixPos** | **Boolean** |  | 
**billetProvider** | **String** |  | 
**noPaymentMethods** | **[String]** |  | [optional] 
**logo** | [**GetLogoDto**](GetLogoDto.md) |  | [optional] 
**theme** | [**GetThemeDto**](GetThemeDto.md) |  | [optional] 
**hasSplitRules** | **Boolean** |  | [optional] 

<a name="SettlementTypeEnum"></a>
## Enum: SettlementTypeEnum

* `PIX` (value: `"PIX"`)
* `TED` (value: `"TED"`)


<a name="StatusEnum"></a>
## Enum: StatusEnum

* `activated` (value: `"activated"`)
* `inactive` (value: `"inactive"`)
* `pending` (value: `"pending"`)


<a name="TypeEnum"></a>
## Enum: TypeEnum

* `transaction` (value: `"transaction"`)
* `registry` (value: `"registry"`)
* `group` (value: `"group"`)


<a name="BilletProviderEnum"></a>
## Enum: BilletProviderEnum

* `adyen` (value: `"adyen"`)
* `bradesco` (value: `"bradesco"`)

