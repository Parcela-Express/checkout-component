# ParcelaExpressApi.SalePlan

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** |  | [optional] 
**name** | **String** |  | 
**description** | **String** |  | 
**payment_types** | [**[PaymentType]**](PaymentType.md) |  | [optional] 
**type** | **String** |  | 
**payment_method** | **String** |  | 
**merchant** | [**Merchant**](Merchant.md) |  | 
**merchant_id** | **String** |  | [optional] 
**acquirer** | [**Acquirer**](Acquirer.md) |  | 
**acquirer_id** | **String** |  | [optional] 
**settlement_plan** | [**SettlementPlan**](SettlementPlan.md) |  | 
**settlement_plan_id** | **String** |  | [optional] 
**cost_plan** | [**CostPlan**](CostPlan.md) |  | 
**cost_plan_id** | **String** |  | [optional] 
**risk_value** | **Number** |  | [optional] 
**inactive** | **Boolean** |  | [optional] 



## Enum: TypeEnum


* `markup` (value: `"markup"`)

* `spread` (value: `"spread"`)

* `split` (value: `"split"`)





## Enum: PaymentMethodEnum


* `pos` (value: `"pos"`)

* `online` (value: `"online"`)




