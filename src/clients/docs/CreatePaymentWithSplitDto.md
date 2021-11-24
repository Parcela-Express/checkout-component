# ParcelaExpressApi.CreatePaymentWithSplitDto

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**amountCents** | **Number** |  | 
**description** | **String** |  | 
**cardAttributes** | **AllOfCreatePaymentWithSplitDtoCardAttributes** |  | 
**installmentPlan** | **AllOfCreatePaymentWithSplitDtoInstallmentPlan** |  | 
**customer** | [**CustomerDTO**](CustomerDTO.md) |  | 
**saleId** | **String** |  | [optional] 
**preCapture** | **Boolean** |  | [optional] 
**protestLink** | **Boolean** |  | [optional] 
**amountFee** | **Number** |  | [optional] 
**hasSplitRules** | **Boolean** |  | [optional] 
**splitRules** | [**[CreateSplitRulesDto]**](CreateSplitRulesDto.md) |  | [optional] 
