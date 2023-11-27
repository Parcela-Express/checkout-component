# ParcelaExpressApi.Sale

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** |  | [optional] 
**description** | **String** |  | 
**protocol** | **String** |  | [optional] 
**acquirer_reference** | **String** |  | [optional] 
**acquirer_code** | **String** |  | [optional] 
**acquirer_document** | **String** |  | [optional] 
**created_at** | **String** |  | [optional] 
**updated_at** | **String** |  | [optional] 
**original_amount** | **Number** |  | 
**amount** | **Number** |  | [optional] 
**fee** | **Number** |  | [optional] 
**absorb_costs** | **[String]** |  | [optional] 
**status** | **String** |  | 
**settlement_status** | **String** |  | [optional] 
**form_payment** | **String** |  | [optional] 
**type** | **String** |  | 
**seller** | [**Seller**](Seller.md) |  | 
**merchant** | [**Merchant**](Merchant.md) |  | 
**sale_plan** | [**SalePlan**](SalePlan.md) |  | 
**cost_plan** | [**CostPlan**](CostPlan.md) |  | 
**settlement_day** | **String** |  | [optional] 
**user** | [**User**](User.md) |  | [optional] 
**payment_type** | [**PaymentType**](PaymentType.md) |  | [optional] 
**payment_type_id** | **String** |  | [optional] 
**payer** | [**Payer**](Payer.md) |  | [optional] 
**payer_id** | **String** |  | [optional] 
**settlement_batch** | [**SettlementBatch**](SettlementBatch.md) |  | [optional] 
**settlement_batch_id** | **String** |  | [optional] 
**billet** | [**Billet**](Billet.md) |  | [optional] 
**billet_id** | **String** |  | [optional] 
**is_summed** | **Boolean** |  | [optional] 
**is_visible** | **Boolean** |  | [optional] 
**installments** | **Number** |  | [optional] 
**seller_id** | **String** |  | [optional] 
**seller_name** | **String** |  | [optional] 
**seller_document** | **String** |  | [optional] 
**seller_description** | **String** |  | 
**merchant_id** | **String** |  | [optional] 
**merchant_name** | **String** |  | [optional] 
**merchant_document** | **String** |  | [optional] 
**payment_type_code** | **String** |  | [optional] 
**payment_type_description** | **String** |  | [optional] 
**payment_type_installments** | **Number** |  | [optional] 
**payer_name** | **String** |  | [optional] 
**payer_email** | **String** |  | [optional] 
**payer_document** | **String** |  | [optional] 
**payer_phone** | **String** |  | [optional] 
**payer_address** | [**GetSalePayerAddressDto**](GetSalePayerAddressDto.md) |  | [optional] 
**sale_plan_id** | **String** |  | [optional] 
**sale_plan_name** | **String** |  | [optional] 
**cost_plan_name** | **String** |  | [optional] 
**cost_plan_options** | [**[CostOption]**](CostOption.md) |  | [optional] 
**created_by_user_name** | **String** |  | [optional] 
**created_by_user_email** | **String** |  | [optional] 
**created_at_unix_time** | **Number** |  | [optional] 
**created_at_time** | **Number** |  | [optional] 
**pre_capture** | **Boolean** |  | [optional] 
**settlement_status_cancellation** | **String** |  | [optional] 
**settlement_day_cancellation** | **String** |  | [optional] 
**settlement_batch_cancellation** | [**SettlementBatch**](SettlementBatch.md) |  | [optional] 
**settlement_batch_cancellation_id** | **String** |  | [optional] 
**settlement_batch_retry** | [**SettlementBatch**](SettlementBatch.md) |  | [optional] 
**settlement_batch_retry_id** | **String** |  | [optional] 
**settlement_batch_retry_status** | **String** |  | [optional] 
**settlement_batch_retry_day** | **String** |  | [optional] 
**payment_day** | **String** |  | [optional] 
**payment_day_time** | **Number** |  | [optional] 
**order_number** | **Number** |  | 
**has_split_rules** | **Boolean** |  | [optional] 
**split_rules** | [**SplitRules**](SplitRules.md) |  | [optional] 
**split_rules_id** | **String** |  | [optional] 
**metadata** | **String** |  | [optional] 
**card_number** | **String** |  | [optional] 
**card_brand** | **String** |  | [optional] 
**card_holder_name** | **String** |  | [optional] 
**success_return_url** | **String** |  | [optional] 
**error_return_url** | **String** |  | [optional] 
**confirmation_required** | **Boolean** |  | [optional] 
**confirmation_day** | **Date** |  | [optional] 
**risk_active** | **Boolean** |  | [optional] 
**is_capture** | **Boolean** |  | [optional] 
**split_description** | **String** |  | [optional] 
**extract_identification** | **String** |  | [optional] 
**terminal_id** | **String** |  | [optional] 
**service_id** | **String** |  | [optional] 
**spread** | **Number** |  | [optional] 
**supportResponsible** | **String** |  | [optional] 
**commercialResponsible** | **String** |  | [optional] 
**qrcode_data** | **String** |  | [optional] 
**three_ds_active** | **Boolean** |  | [optional] 
**celcoin_id** | **String** |  | [optional] 
**write_off_file_generated** | **Boolean** |  | [optional] 
**celcoin** | [**Celcoin**](Celcoin.md) |  | [optional] 



## Enum: AcquirerCodeEnum


* `zoop` (value: `"zoop"`)

* `adyen` (value: `"adyen"`)

* `bradesco` (value: `"bradesco"`)

* `itau` (value: `"itau"`)





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





## Enum: SettlementStatusEnum


* `pending` (value: `"pending"`)

* `paid` (value: `"paid"`)

* `sent` (value: `"sent"`)

* `pending_cancel` (value: `"pending_cancel"`)

* `canceled` (value: `"canceled"`)

* `failed` (value: `"failed"`)

* `resent` (value: `"resent"`)





## Enum: FormPaymentEnum


* `credit` (value: `"credit"`)

* `debit` (value: `"debit"`)

* `billet` (value: `"billet"`)

* `pix` (value: `"pix"`)

* `pending` (value: `"pending"`)

* `pix_pos` (value: `"pix_pos"`)





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





## Enum: SettlementStatusCancellationEnum


* `pending` (value: `"pending"`)

* `paid` (value: `"paid"`)

* `sent` (value: `"sent"`)

* `pending_cancel` (value: `"pending_cancel"`)

* `canceled` (value: `"canceled"`)

* `failed` (value: `"failed"`)

* `resent` (value: `"resent"`)





## Enum: SettlementBatchRetryStatusEnum


* `pending` (value: `"pending"`)

* `paid` (value: `"paid"`)

* `sent` (value: `"sent"`)

* `pending_cancel` (value: `"pending_cancel"`)

* `canceled` (value: `"canceled"`)

* `failed` (value: `"failed"`)

* `resent` (value: `"resent"`)




