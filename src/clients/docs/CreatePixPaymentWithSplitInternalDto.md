# ParcelaExpressApi.CreatePixPaymentWithSplitInternalDto

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**amount_cents** | **Number** | Valor em centavos | 
**description** | **String** | Descrição | 
**customer** | [**CustomerDTO**](CustomerDTO.md) | Cliente | 
**sale_id** | **String** | Id da venda | [optional] 
**protest_link** | **Boolean** | Criado via link de protesto | [optional] 
**amount_fee** | **Number** | Valor da taxa | [optional] 
**has_split_rules** | **Boolean** | Há divisão de pagamento | [optional] 
**split_rules** | [**[CreateSplitRulesDto]**](CreateSplitRulesDto.md) | Divisão de pagamento | [optional] 
**confirmation_required** | **Boolean** | Há confirmação de pagamento | [optional] 
**extract_identification** | **String** | Identificação do extrato | [optional] 
**service_id** | **String** | Identificador externo | [optional] 


