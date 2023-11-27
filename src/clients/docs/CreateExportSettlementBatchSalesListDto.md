# ParcelaExpressApi.CreateExportSettlementBatchSalesListDto

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**status** | **[String]** |  | [optional] 
**description** | **String** |  | [optional] 
**amount** | **Number** |  | [optional] 
**original_amount** | **Number** |  | [optional] 
**type** | **[String]** |  | [optional] 
**name** | **String** |  | [optional] 
**form_payment** | **[String]** |  | [optional] 
**extension** | **String** |  | [optional] 
**seller_id** | **String** |  | [optional] 



## Enum: [StatusEnum]


* `pending` (value: `"pending"`)

* `pending_capture` (value: `"pending_capture"`)

* `in_progress_capture` (value: `"in_progress_capture"`)

* `succeeded` (value: `"succeeded"`)

* `canceled` (value: `"canceled"`)

* `pending_cancel` (value: `"pending_cancel"`)

* `abort` (value: `"abort"`)

* `failed` (value: `"failed"`)

* `waiting_confirmation` (value: `"waiting_confirmation"`)

* `expired` (value: `"expired"`)

* `waiting_cashIn` (value: `"waiting_cashIn"`)





## Enum: [TypeEnum]


* `boleto` (value: `"boleto"`)

* `pos` (value: `"pos"`)

* `payment_link` (value: `"payment_link"`)

* `protest_link` (value: `"protest_link"`)

* `online` (value: `"online"`)

* `auto_generate_payment_link` (value: `"auto_generate_payment_link"`)

* `auto_generate_protest_link` (value: `"auto_generate_protest_link"`)

* `billet_code` (value: `"billet_code"`)

* `bill_payment` (value: `"bill_payment"`)





## Enum: [FormPaymentEnum]


* `credit` (value: `"credit"`)

* `debit` (value: `"debit"`)

* `pix` (value: `"pix"`)

* `billet` (value: `"billet"`)

* `billet_code` (value: `"billet_code"`)

* `pix_pos` (value: `"pix_pos"`)





## Enum: ExtensionEnum


* `xls` (value: `"xls"`)

* `csv` (value: `"csv"`)

* `json` (value: `"json"`)

* `pdf` (value: `"pdf"`)




