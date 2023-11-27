# ParcelaExpressApi.CreateSaleDto

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **String** | Descricão | 
**original_amount** | **Number** | Valor original | 
**amount** | **Number** | Valor | [optional] 
**acquirer_reference** | **String** | Id na adquirente | [optional] 
**form_payment** | **String** | Forma de pagamento | [optional] 
**type** | **String** | Tipo de venda | 
**terminal_id** | **String** | Id da máquina de pagamento | [optional] 
**status** | **String** |  | 
**sale_plan_id** | **String** |  | 
**payment_type_id** | **String** |  | 
**payer_id** | **String** |  | [optional] 
**metadata** | **String** |  | [optional] 



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




