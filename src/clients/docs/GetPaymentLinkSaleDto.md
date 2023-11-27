# ParcelaExpressApi.GetPaymentLinkSaleDto

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** |  | 
**description** | **String** |  | 
**created_at** | **String** |  | 
**updated_at** | **String** |  | 
**original_amount** | **Number** |  | 
**amount** | **Number** |  | 
**absorb_costs** | **[String]** |  | [optional] 
**type** | **String** |  | 
**form_payment** | **String** |  | 
**formatted_form_payment** | **String** |  | 
**status** | **String** |  | 



## Enum: TypeEnum


* `boleto` (value: `"boleto"`)

* `pos` (value: `"pos"`)

* `payment_link` (value: `"payment_link"`)

* `protest_link` (value: `"protest_link"`)

* `online` (value: `"online"`)

* `auto_generate_payment_link` (value: `"auto_generate_payment_link"`)

* `auto_generate_protest_link` (value: `"auto_generate_protest_link"`)

* `billet_code` (value: `"billet_code"`)

* `bill_payment` (value: `"bill_payment"`)





## Enum: FormPaymentEnum


* `credit` (value: `"credit"`)

* `debit` (value: `"debit"`)

* `billet` (value: `"billet"`)

* `pix` (value: `"pix"`)

* `pending` (value: `"pending"`)

* `pix_pos` (value: `"pix_pos"`)





## Enum: StatusEnum


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




