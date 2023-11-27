# ParcelaExpressApi.UpdateProtocolDto

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**value_cents** | **Number** | Valor em centavos | [optional] 
**status_date** | **String** | Data de atualização do status | [optional] 
**creation_date** | **String** | Data de criação | [optional] 
**due_date** | **String** | Data de vencimento | [optional] 
**payment_method** | **String** | Método de pagamento | [optional] 
**has_email_notification** | **Boolean** | Há notificação por email | [optional] 
**payer_email** | **String** | Email do pagador | [optional] 
**email_content** | **String** | Conteúdo do email | [optional] 
**has_payment_link** | **Boolean** | Há link de pagamento | [optional] 
**payment_link** | [**CreatePaymentLinkFromProtocolDto**](CreatePaymentLinkFromProtocolDto.md) | Link de pagamento | [optional] 
**status** | **String** |  | [optional] 



## Enum: PaymentMethodEnum


* `credit` (value: `"credit"`)

* `credit_in_installments` (value: `"credit_in_installments"`)

* `debit` (value: `"debit"`)

* `billet` (value: `"billet"`)

* `pix` (value: `"pix"`)

* `transference` (value: `"transference"`)

* `cash` (value: `"cash"`)

* `bank_check` (value: `"bank_check"`)





## Enum: StatusEnum


* `pending` (value: `"pending"`)

* `alert` (value: `"alert"`)

* `paid` (value: `"paid"`)

* `overdued` (value: `"overdued"`)

* `canceled` (value: `"canceled"`)




