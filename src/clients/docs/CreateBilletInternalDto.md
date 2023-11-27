# ParcelaExpressApi.CreateBilletInternalDto

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**value** | **Number** | Valor | 
**social_security_number** | **String** | CPF ou CNPJ | 
**shopper_statement** | **String** | Descrição do boleto | 
**description** | **String** | Descrição | 
**delivery_date** | **Date** | Data de vencimento | 
**shopper** | [**ShopperDTO**](ShopperDTO.md) | Dados do cliente | 
**sale_id** | **String** | Id da venda | [optional] 
**protest_link** | **Boolean** | Criado via link de protesto | [optional] 
**amount_fee** | **Number** | Valor da taxa | [optional] 
**has_split_rules** | **Boolean** | Há divisão de pagamento | [optional] 
**split_rules** | [**[CreateSplitRulesDto]**](CreateSplitRulesDto.md) | Divisão de pagamento | [optional] 
**confirmation_required** | **Boolean** | Há confirmação de pagamento | [optional] 
**with_payment_link** | **Boolean** | Há link de pagamento | [optional] 
**metadata** | **Object** |  | [optional] 


