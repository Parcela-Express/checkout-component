# ParcelaExpressApi.GetSalePlanDto

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** |  | 
**name** | **String** |  | 
**description** | **String** |  | 
**paymentTypes** | [**[GetPaymentTypeDto]**](GetPaymentTypeDto.md) |  | 
**type** | **String** |  | 
**merchant** | [**GetMerchantDto**](GetMerchantDto.md) |  | 
**acquirer** | [**GetAcquirerDto**](GetAcquirerDto.md) |  | 
**settlementPlan** | [**GetSettlementPlanDto**](GetSettlementPlanDto.md) |  | 
**costPlan** | [**GetCostPlanDto**](GetCostPlanDto.md) |  | 

<a name="TypeEnum"></a>
## Enum: TypeEnum

* `markup` (value: `"markup"`)
* `spread` (value: `"spread"`)
* `split` (value: `"split"`)

