# ParcelaExpressApi.CreatePaymentDto

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**amountCents** | **Number** |  | 
**description** | **String** |  | 
**cardAttributes** | **AllOfCreatePaymentDtoCardAttributes** |  | 
**installmentPlan** | **AllOfCreatePaymentDtoInstallmentPlan** |  | 
**customer** | [**CustomerDTO**](CustomerDTO.md) |  | 
**formPayment** | **String** |  | [optional] 
**successReturnUrl** | **String** |  | [optional] 
**errorReturnUrl** | **String** |  | [optional] 
**saleId** | **String** |  | [optional] 
**preCapture** | **Boolean** |  | [optional] 
**protestLink** | **Boolean** |  | [optional] 
**amountFee** | **Number** |  | [optional] 

<a name="FormPaymentEnum"></a>
## Enum: FormPaymentEnum

* `credit` (value: `"credit"`)
* `debit` (value: `"debit"`)
* `billet` (value: `"billet"`)
* `pix` (value: `"pix"`)
* `pending` (value: `"pending"`)

