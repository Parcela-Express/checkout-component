# ParcelaExpressApi.TransactionDto

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** |  | 
**seller_id** | **String** |  | 
**transaction_number** | **String** | Número de controle para agrupar transações da mesma venda. ex.: compra + estorno/cancelamento. | 
**amount_without_fees** | **Number** |  | 
**amount_with_fees** | **Number** |  | 
**description** | **String** |  | 
**fees** | [**[FeeTransactionDto]**](FeeTransactionDto.md) |  | 
**payment_method** | [**PaymentMethodTransactionDto**](PaymentMethodTransactionDto.md) |  | 
**operation_type** | [**OperationEnum**](OperationEnum.md) |  | 
**currency** | [**CurrencyEnum**](CurrencyEnum.md) |  | 
**source** | [**SourceTransactionDto**](SourceTransactionDto.md) |  | 
**status** | [**StatusEnum**](StatusEnum.md) |  | 
**metadata** | [**CreateMetadataDto**](CreateMetadataDto.md) |  | 
**created_at** | **String** |  | 
**updated_at** | **String** |  | 
**accounting_account_id** | **String** |  | 
**merchant_has_pre_capture** | **Boolean** |  | 
**pre_capture** | **Boolean** |  | 
**installments** | **Number** |  | 
**created_at_timestamp** | **Number** |  | 
**order_number** | **Number** |  | 
**seller_code** | **String** |  | 
**card_brand** | **String** |  | 
**competence_date** | **String** |  | 
**payment_type_id** | **String** |  | 
**payment_type_code** | **String** |  | 
**event_code** | **String** |  | 
**type** | **String** |  | 
**form_payment** | **String** |  | [optional] 
**is_standalone** | **Boolean** |  | [optional] 



## Enum: CardBrandEnum


* `visa` (value: `"visa"`)

* `elo` (value: `"elo"`)

* `mc` (value: `"mc"`)

* `amex` (value: `"amex"`)

* `hipercard` (value: `"hipercard"`)




