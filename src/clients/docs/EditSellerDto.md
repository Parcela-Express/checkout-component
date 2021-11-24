# ParcelaExpressApi.EditSellerDto

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **String** |  | 
**description** | **String** |  | 
**document** | **String** |  | 
**stateRegistration** | **String** |  | [optional] 
**code** | **String** |  | 
**createdAt** | **String** |  | [optional] 
**settlementType** | **String** |  | 
**address** | [**CreateAddressDto**](CreateAddressDto.md) |  | 
**bankAccount** | [**CreateBankAccountDto**](CreateBankAccountDto.md) |  | 
**monthlyBilling** | **Number** |  | 
**covenant** | **String** |  | [optional] 
**isSplit** | **Boolean** |  | [optional] 
**phone** | **String** |  | [optional] 
**absorbCosts** | **[String]** |  | [optional] 
**status** | **String** |  | 
**type** | **String** |  | 
**merchantId** | **String** |  | 
**salePlanId** | **String** |  | 
**pixPos** | **Boolean** |  | [optional] 
**billetProvider** | **String** |  | 
**noPaymentMethods** | **[String]** |  | [optional] 
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

