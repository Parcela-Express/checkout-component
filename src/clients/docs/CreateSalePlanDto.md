# ParcelaExpressApi.CreateSalePlanDto

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **String** |  | 
**description** | **String** |  | 
**paymentTypes** | [**[CreateSalePlanPaymentTypeDto]**](CreateSalePlanPaymentTypeDto.md) |  | [optional] 
**type** | **String** |  | 
**paymentMethod** | **String** |  | 
**merchantId** | **String** |  | 
**acquirerId** | **String** |  | 
**settlementPlanId** | **String** |  | 
**costPlanId** | **String** |  | 

<a name="TypeEnum"></a>
## Enum: TypeEnum

* `markup` (value: `"markup"`)
* `spread` (value: `"spread"`)
* `split` (value: `"split"`)


<a name="PaymentMethodEnum"></a>
## Enum: PaymentMethodEnum

* `pos` (value: `"pos"`)
* `online` (value: `"online"`)

