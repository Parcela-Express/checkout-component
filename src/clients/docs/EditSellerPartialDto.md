# ParcelaExpressApi.EditSellerPartialDto

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **String** | Nome | [optional] 
**description** | **String** | Descrição | [optional] 
**document** | **String** | Documento | [optional] 
**state_registration** | **String** | Registro estadual | [optional] 
**code** | **String** | Chave do Estabelecimento | [optional] 
**settlement_type** | **String** | Tipo de liquidação | [optional] 
**address** | [**CreateAddressDto**](CreateAddressDto.md) | Endereço | [optional] 
**bank_account** | [**CreateBankAccountDto**](CreateBankAccountDto.md) | Conta bancária | [optional] 
**monthly_billing** | **Number** | Faturamento Mensal | [optional] 
**covenant** | **String** | Convênio | [optional] 
**is_split** | **Boolean** | Tem divisão de pagamento | [optional] 
**phone** | **String** | Telefone | [optional] 
**absorb_costs** | **[String]** | Absorver Custos | [optional] 
**pix_pos** | **Boolean** | Há PIX POS | [optional] 
**no_payment_methods** | **[String]** | Pagamentos não utilizados | [optional] 
**has_split_rules** | **Boolean** | Há divisão de pagamento | [optional] 
**protocol_customizations** | [**ProtocolCustomizations**](ProtocolCustomizations.md) | Customização de protocolos | [optional] 
**custom_emails** | [**SellerEmails**](SellerEmails.md) | Customização de emails | [optional] 
**report_customization** | [**ReportCustomization**](ReportCustomization.md) | Personalização de relatórios | [optional] 
**responsibles** | **[String]** | Responsáveis pelo estabelecimento | [optional] 
**cns** | **String** | Código do cartório de registro | [optional] 
**cnae** | **String** | Classificação de atividades econômicas | [optional] 
**assignment** | **String** | Atribuição do cartório | [optional] 
**owner_name** | **String** | Nome do proprietário | [optional] 
**owner_document** | **String** | Documento do proprietário | [optional] 
**erp** | **String** | Sistema de gestão utilizado | [optional] 
**document_ofac** | **Boolean** |  | [optional] 
**document_onu** | **Boolean** |  | [optional] 
**document_rf** | **Boolean** |  | [optional] 
**created_at** | **String** |  | [optional] 
**status** | **String** |  | [optional] 
**type** | **String** |  | [optional] 
**merchant_id** | **String** |  | [optional] 
**sale_plan_id** | **String** |  | [optional] 
**billet_provider** | **String** |  | [optional] 
**pix_provider** | **String** |  | [optional] 
**owner_document_ofac** | **Boolean** |  | [optional] 
**owner_document_onu** | **Boolean** |  | [optional] 
**owner_document_pep** | **Boolean** |  | [optional] 
**owner_document_ref** | **Boolean** |  | [optional] 
**owner_birth** | **Date** |  | [optional] 
**frontier** | **Boolean** |  | [optional] 
**extract_name** | **String** |  | [optional] 
**registered_omie** | **Boolean** |  | [optional] 



## Enum: SettlementTypeEnum


* `PIX` (value: `"PIX"`)

* `TED` (value: `"TED"`)





## Enum: AssignmentEnum


* `legal_entity` (value: `"legal_entity"`)

* `civil` (value: `"civil"`)

* `protest` (value: `"protest"`)

* `note` (value: `"note"`)

* `properties` (value: `"properties"`)





## Enum: StatusEnum


* `activated` (value: `"activated"`)

* `inactive` (value: `"inactive"`)

* `pending` (value: `"pending"`)

* `activation_sent` (value: `"activation_sent"`)





## Enum: TypeEnum


* `transaction` (value: `"transaction"`)

* `registry` (value: `"registry"`)

* `group` (value: `"group"`)

* `restricted_seller` (value: `"restricted_seller"`)





## Enum: BilletProviderEnum


* `adyen` (value: `"adyen"`)

* `bradesco` (value: `"bradesco"`)

* `itau` (value: `"itau"`)





## Enum: PixProviderEnum


* `adyen` (value: `"adyen"`)

* `bradesco` (value: `"bradesco"`)

* `itau` (value: `"itau"`)




