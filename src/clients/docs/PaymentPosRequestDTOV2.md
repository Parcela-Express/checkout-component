# ParcelaExpressApi.PaymentPosRequestDTOV2

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**terminal_id** | **String** | Id da máquina de pagamento | 
**amount** | **Number** | Valor | 
**is_debit** | **Boolean** | É débito | 
**instalments** | **Number** | Parcelas | 
**is_pix** | **Boolean** | É pix | 
**description** | **String** | Descrição | [optional] 
**document** | **String** | Documento | [optional] 
**has_split_rules** | **Boolean** | Há divisão de pagamento | 
**split_rules** | [**[CreateSplitRulesDto]**](CreateSplitRulesDto.md) | Divisão de pagamento | 
**confirmation_required** | **Boolean** | Há confirmação de pagamento | [optional] 
**service_id** | **String** |  | 


