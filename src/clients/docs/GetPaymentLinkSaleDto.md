# ParcelaExpressApi.GetPaymentLinkSaleDto

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** |  | 
**description** | **String** |  | 
**createdAt** | **String** |  | 
**updatedAt** | **String** |  | 
**originalAmount** | **Number** |  | 
**amount** | **Number** |  | 
**absorbCosts** | **[String]** |  | [optional] 
**type** | **String** |  | 
**formPayment** | **String** |  | 
**formattedFormPayment** | **String** |  | 
**status** | **String** |  | 

<a name="TypeEnum"></a>
## Enum: TypeEnum

* `boleto` (value: `"boleto"`)
* `pos` (value: `"pos"`)
* `paymentLink` (value: `"payment_link"`)
* `protestLink` (value: `"protest_link"`)
* `online` (value: `"online"`)
* `autoGeneratePaymentLink` (value: `"auto_generate_payment_link"`)
* `autoGenerateProtestLink` (value: `"auto_generate_protest_link"`)


<a name="FormPaymentEnum"></a>
## Enum: FormPaymentEnum

* `credit` (value: `"credit"`)
* `debit` (value: `"debit"`)
* `billet` (value: `"billet"`)
* `pix` (value: `"pix"`)
* `pending` (value: `"pending"`)


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

