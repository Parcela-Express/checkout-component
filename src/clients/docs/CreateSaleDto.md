# ParcelaExpressApi.CreateSaleDto

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **String** |  | 
**originalAmount** | **Number** |  | 
**amount** | **Number** |  | [optional] 
**acquirerReference** | **String** |  | [optional] 
**formPayment** | **String** |  | [optional] 
**type** | **String** |  | 
**status** | **String** |  | 
**salePlanId** | **String** |  | 
**paymentTypeId** | **String** |  | 
**payerId** | **String** |  | [optional] 
**metadata** | **String** |  | [optional] 

<a name="TypeEnum"></a>
## Enum: TypeEnum

* `boleto` (value: `"boleto"`)
* `pos` (value: `"pos"`)
* `paymentLink` (value: `"payment_link"`)
* `protestLink` (value: `"protest_link"`)
* `online` (value: `"online"`)
* `autoGeneratePaymentLink` (value: `"auto_generate_payment_link"`)
* `autoGenerateProtestLink` (value: `"auto_generate_protest_link"`)


<a name="StatusEnum"></a>
## Enum: StatusEnum

* `pending` (value: `"pending"`)
* `pendingCapture` (value: `"pending_capture"`)
* `inProgressCapture` (value: `"in_progress_capture"`)
* `succeeded` (value: `"succeeded"`)
* `canceled` (value: `"canceled"`)
* `pendingCancel` (value: `"pending_cancel"`)
* `abort` (value: `"abort"`)
* `failed` (value: `"failed"`)

