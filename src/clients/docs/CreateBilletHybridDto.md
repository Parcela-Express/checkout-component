# ParcelaExpressApi.CreateBilletHybridDto

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**value** | **Number** | Valor | 
**social_security_number** | **String** | CPF ou CNPJ | 
**shopper_statement** | **String** | Descrição do boleto | 
**description** | **String** | Descrição | 
**delivery_date** | **Date** | Data de vencimento | 
**shopper** | [**ShopperDTO**](ShopperDTO.md) | Dados do cliente | 
**has_split_rules** | **Boolean** | Há divisão de pagamento | [optional] 
**split_rules** | [**[CreateSplitRulesDto]**](CreateSplitRulesDto.md) | Divisão de pagamento | [optional] 
**confirmation_required** | **Boolean** | Há confirmação de pagamento | [optional] 
**protocol** | **String** | Número do protocolo | [optional] 
**instructions** | **String** | Instruções para o boleto(caso vazio será usado o campo description) | [optional] 
**metadata** | **Object** |  | [optional] 


