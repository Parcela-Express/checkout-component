# ParcelaExpressApi.CreateSalePlanDto

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **String** |  | 
**description** | **String** |  | 
**payment_types** | [**[CreateSalePlanPaymentTypeDto]**](CreateSalePlanPaymentTypeDto.md) |  | [optional] 
**type** | **String** |  | 
**payment_method** | **String** |  | 
**merchant_id** | **String** |  | 
**acquirer_id** | **String** |  | 
**settlement_plan_id** | **String** |  | 
**cost_plan_id** | **String** |  | 



## Enum: TypeEnum


* `markup` (value: `"markup"`)

* `spread` (value: `"spread"`)

* `split` (value: `"split"`)





## Enum: PaymentMethodEnum


* `pos` (value: `"pos"`)

* `online` (value: `"online"`)




