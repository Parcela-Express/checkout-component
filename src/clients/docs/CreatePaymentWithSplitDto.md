# ParcelaExpressApi.CreatePaymentWithSplitDto

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**amount_cents** | **Number** | Valor em centavos | 
**description** | **String** | Descrição | 
**card_attributes** | [**CardDTO**](CardDTO.md) |  | 
**installment_plan** | [**InstallmentPlanDTO**](InstallmentPlanDTO.md) | Parcelamento | 
**customer** | [**CustomerDTO**](CustomerDTO.md) | Cliente | 
**sale_id** | **String** | Id da venda | [optional] 
**protest_link** | **Boolean** | Criado via link de protesto | [optional] 
**amount_fee** | **Number** | Valor da taxa | [optional] 
**pre_capture** | **Boolean** | Pré captura | [optional] 
**form_payment** | **String** | Forma de pagamento | [optional] 
**success_return_url** | **String** | Url de redirecionamento de sucesso (exclusivo 3DS) | [optional] 
**error_return_url** | **String** | Url de redirecionamento de erro (exclusivo 3DS) | [optional] 
**has_split_rules** | **Boolean** | Há Divisão de pagamento | [optional] 
**split_rules** | [**[CreateSplitRulesDto]**](CreateSplitRulesDto.md) | Divisão de pagamento | [optional] 
**confirmation_required** | **Boolean** | Há confirmação de pagamento | [optional] 
**extract_identification** | **String** | Identificação do extrato. Recomenda-se usar até 22 caracteres, pois o banco pode excluir o excedente | [optional] 
**active_3ds** | **Boolean** | Ativar 3DS | [optional] 
**risk_custom_field** | **String** | Campo de risco customizável | [optional] 
**service_id** | **String** | Identificador externo | [optional] 
**protocol** | **String** | Número do protocolo | [optional] 



## Enum: FormPaymentEnum


* `credit` (value: `"credit"`)

* `debit` (value: `"debit"`)

* `billet` (value: `"billet"`)

* `pix` (value: `"pix"`)

* `pending` (value: `"pending"`)

* `pix_pos` (value: `"pix_pos"`)




