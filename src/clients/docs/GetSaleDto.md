# ParcelaExpressApi.GetSaleDto

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** |  | 
**description** | **String** |  | 
**protocol** | **String** |  | 
**created_at** | **String** |  | 
**updated_at** | **String** |  | 
**original_amount** | **Number** |  | 
**amount** | **Number** |  | 
**type** | **String** |  | 
**formatted_type** | **String** |  | [optional] 
**form_payment** | **String** |  | 
**status** | **String** |  | 
**settlement_day** | **String** |  | [optional] 
**settlement_status** | **String** |  | [optional] 
**seller** | [**GetSaleSellerDto**](GetSaleSellerDto.md) |  | 
**sale_plan** | [**GetSaleSalesPlanDto**](GetSaleSalesPlanDto.md) |  | 
**user** | [**GetSaleUserDto**](GetSaleUserDto.md) |  | 
**payment_type** | [**GetSalePlanPaymentTypeDto**](GetSalePlanPaymentTypeDto.md) |  | 
**payer** | [**GetSalePayerDto**](GetSalePayerDto.md) |  | 
**billet** | [**GetBilletDto**](GetBilletDto.md) |  | 
**billet_id** | **String** |  | 
**payment_link** | [**GetPaymentLinkDto**](GetPaymentLinkDto.md) |  | 
**split_rules** | [**GetSplitRulesDto**](GetSplitRulesDto.md) |  | 
**has_split_rules** | **Boolean** |  | [optional] 
**formatted_description** | **String** |  | [optional] 
**installments** | **Number** |  | 
**seller_name** | **String** |  | 
**seller_document** | **String** |  | 
**seller_description** | **String** |  | 
**payment_type_code** | **String** |  | 
**payment_type_description** | **String** |  | 
**payment_type_installments** | **Number** |  | 
**payer_name** | **String** |  | 
**payer_email** | **String** |  | 
**payer_document** | **String** |  | 
**payer_phone** | **String** |  | 
**payer_address** | [**GetSalePayerAddressDto**](GetSalePayerAddressDto.md) |  | 
**sale_plan_name** | **String** |  | 
**created_by_user_name** | **String** |  | 
**created_by_user_email** | **String** |  | 
**pre_capture** | **Boolean** |  | 
**settlement_day_cancellation** | **String** |  | [optional] 
**settlement_status_cancellation** | **String** |  | [optional] 
**settlement_batch_cancellation** | [**SettlementBatch**](SettlementBatch.md) |  | [optional] 
**payment_day** | **String** |  | [optional] 
**fee** | **Number** |  | [optional] 
**absorb_costs** | **[String]** |  | [optional] 
**order_number** | **Number** |  | 
**metadata** | **Object** |  | 
**card_number** | **String** |  | [optional] 
**card_brand** | **String** |  | [optional] 
**card_holder_name** | **String** |  | [optional] 
**acquirer_code** | **String** |  | [optional] 
**confirmation_required** | **Boolean** |  | [optional] 
**extract_identification** | **String** |  | [optional] 
**confirmation_day** | **String** |  | [optional] 
**service_id** | **String** |  | [optional] 
**split_description** | **String** |  | [optional] 
**formatted_split_description** | **String** |  | [optional] 
**cnab_id** | **String** |  | [optional] 
**generate_payer** | **Boolean** |  | [optional] 
**is_main_sale** | **Boolean** |  | [optional] 
**acquirer_reference** | **String** |  | [optional] 
**celcoin** | [**Celcoin**](Celcoin.md) |  | 



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





## Enum: SettlementStatusEnum


* `pending` (value: `"pending"`)

* `paid` (value: `"paid"`)

* `sent` (value: `"sent"`)

* `pending_cancel` (value: `"pending_cancel"`)

* `canceled` (value: `"canceled"`)

* `failed` (value: `"failed"`)

* `resent` (value: `"resent"`)




