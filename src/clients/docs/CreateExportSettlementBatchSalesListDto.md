# ParcelaExpressApi.CreateExportSettlementBatchSalesListDto

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**status** | **[String]** |  | [optional] 
**description** | **String** |  | [optional] 
**amount** | **Number** |  | [optional] 
**originalAmount** | **Number** |  | [optional] 
**type** | **[String]** |  | [optional] 
**name** | **String** |  | [optional] 
**formPayment** | **[String]** |  | [optional] 
**extension** | **String** |  | [optional] 
**sellerId** | **String** |  | [optional] 

<a name="[StatusEnum]"></a>
## Enum: [StatusEnum]

* `pending` (value: `"pending"`)
* `pendingCapture` (value: `"pending_capture"`)
* `inProgressCapture` (value: `"in_progress_capture"`)
* `succeeded` (value: `"succeeded"`)
* `canceled` (value: `"canceled"`)
* `pendingCancel` (value: `"pending_cancel"`)
* `abort` (value: `"abort"`)
* `failed` (value: `"failed"`)


<a name="[TypeEnum]"></a>
## Enum: [TypeEnum]

* `boleto` (value: `"boleto"`)
* `pos` (value: `"pos"`)
* `paymentLink` (value: `"payment_link"`)
* `protestLink` (value: `"protest_link"`)
* `online` (value: `"online"`)
* `autoGeneratePaymentLink` (value: `"auto_generate_payment_link"`)
* `autoGenerateProtestLink` (value: `"auto_generate_protest_link"`)


<a name="[FormPaymentEnum]"></a>
## Enum: [FormPaymentEnum]

* `credit` (value: `"credit"`)
* `debit` (value: `"debit"`)
* `pix` (value: `"pix"`)
* `billet` (value: `"billet"`)


<a name="ExtensionEnum"></a>
## Enum: ExtensionEnum

* `xls` (value: `"xls"`)
* `csv` (value: `"csv"`)
* `json` (value: `"json"`)

