# ParcelaExpressApi.GetProtocolDto

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**change_history** | **[Object]** |  | 
**id** | **String** |  | [optional] 
**seller_id** | **String** |  | 
**number** | **Number** |  | 
**presenter_name** | **String** |  | 
**value_cents** | **Number** |  | [optional] 
**status** | **String** |  | 
**status_date** | **String** |  | 
**status_date_unix_time** | **Number** |  | 
**status_update_history** | [**[ProtocolStatusUpdateHistory]**](ProtocolStatusUpdateHistory.md) |  | 
**has_email_notification** | **Boolean** |  | 
**payer_email** | **String** |  | [optional] 
**email_content** | **String** |  | [optional] 
**has_payment_link** | **Boolean** |  | 
**payment_link_id** | **String** |  | [optional] 
**payment_link** | [**PaymentLink**](PaymentLink.md) |  | [optional] 
**due_date** | **String** |  | 
**due_date_unix_time** | **Object** |  | 
**due_date_update_history** | [**[ProtocolDueDateUpdateHistory]**](ProtocolDueDateUpdateHistory.md) |  | 
**alert_date** | **String** |  | [optional] 
**alert_date_unix_time** | **Object** |  | [optional] 
**payment_method** | **String** |  | [optional] 
**payment_type** | **String** |  | 
**created_at** | **String** |  | 
**created_at_unix_time** | **Number** |  | 
**created_at_time** | **Number** |  | 
**updated_at** | **String** |  | [optional] 



## Enum: StatusEnum


* `pending` (value: `"pending"`)

* `alert` (value: `"alert"`)

* `paid` (value: `"paid"`)

* `overdued` (value: `"overdued"`)

* `canceled` (value: `"canceled"`)





## Enum: PaymentMethodEnum


* `credit` (value: `"credit"`)

* `credit_in_installments` (value: `"credit_in_installments"`)

* `debit` (value: `"debit"`)

* `billet` (value: `"billet"`)

* `pix` (value: `"pix"`)

* `transference` (value: `"transference"`)

* `cash` (value: `"cash"`)

* `bank_check` (value: `"bank_check"`)





## Enum: PaymentTypeEnum


* `boleto` (value: `"boleto"`)

* `pos` (value: `"pos"`)

* `payment_link` (value: `"payment_link"`)

* `protest_link` (value: `"protest_link"`)

* `online` (value: `"online"`)

* `auto_generate_payment_link` (value: `"auto_generate_payment_link"`)

* `auto_generate_protest_link` (value: `"auto_generate_protest_link"`)

* `others` (value: `"others"`)




