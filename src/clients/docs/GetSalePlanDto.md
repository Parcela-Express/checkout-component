# ParcelaExpressApi.GetSalePlanDto

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** |  | 
**name** | **String** |  | 
**description** | **String** |  | 
**payment_types** | [**[GetSalePlanPaymentTypeDto]**](GetSalePlanPaymentTypeDto.md) |  | 
**type** | **String** |  | 
**merchant** | [**GetMerchantDto**](GetMerchantDto.md) |  | 
**acquirer** | [**GetAcquirerDto**](GetAcquirerDto.md) |  | 
**settlement_plan** | [**GetSettlementPlanDto**](GetSettlementPlanDto.md) |  | 
**cost_plan** | [**GetCostPlanDto**](GetCostPlanDto.md) |  | 
**payment_method** | **String** |  | 
**risk_value** | **Number** |  | [optional] 
**inactive** | **Boolean** |  | [optional] 



## Enum: TypeEnum


* `markup` (value: `"markup"`)

* `spread` (value: `"spread"`)

* `split` (value: `"split"`)




