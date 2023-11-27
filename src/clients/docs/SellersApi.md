# ParcelaExpressApi.SellersApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addAcquirer**](SellersApi.md#addAcquirer) | **POST** /v1/sellers/{sellerId}/acquirers | Associar uma adquirente a um estabelecimento
[**addSalePlan**](SellersApi.md#addSalePlan) | **POST** /v1/sellers/{sellerId}/sales-plans | Associar um plano de vendas a um estabelecimento
[**confirmSales**](SellersApi.md#confirmSales) | **POST** /v1/sellers/{sellerId}/sales/confirm | Autorizar liquidação das vendas que estão aguardando confirmação
[**createSaleAutoGenerateLinkPayment**](SellersApi.md#createSaleAutoGenerateLinkPayment) | **POST** /v1/sellers/{sellerId}/sales/payment-link-auto | Gerar uma venda com status pendente para um estabelecimento pelo link auto gerável
[**createSeller**](SellersApi.md#createSeller) | **POST** /v1/sellers | Criar estabelecimento
[**createSellerCredential**](SellersApi.md#createSellerCredential) | **POST** /v1/sellers/{sellerId}/credentials | Criar uma nova credencial para o estabelecimento
[**createSellerPayer**](SellersApi.md#createSellerPayer) | **POST** /v1/sellers/{sellerId}/payers | Criar pagador do estabelecimento
[**createSellerPos**](SellersApi.md#createSellerPos) | **POST** /v1/sellers/{sellerId}/pos | Incluir um POS em um estabelecimento
[**createSellerSale**](SellersApi.md#createSellerSale) | **POST** /v1/sellers/{sellerId}/sales | Realizar venda para um estabelecimento
[**createSellerUser**](SellersApi.md#createSellerUser) | **POST** /v1/sellers/{sellerId}/users | Criar usuário do estabelecimento
[**createSellersListExportRequest**](SellersApi.md#createSellersListExportRequest) | **POST** /v1/sellers/list/export/requests | Gerar uma requisição de exportação da lista de estabelecimentos
[**deleteSellerCredential**](SellersApi.md#deleteSellerCredential) | **DELETE** /v1/sellers/{sellerId}/credentials/{credentialId} | Deletar uma credencial de estabelecimento
[**editSeller**](SellersApi.md#editSeller) | **PUT** /v1/sellers/{sellerId} | Editar estabelecimento
[**editSellerCredential**](SellersApi.md#editSellerCredential) | **PUT** /v1/sellers/{sellerId}/credentials/{credentialId} | Editar uma credencial de estabelecimento
[**editSellerPartial**](SellersApi.md#editSellerPartial) | **PATCH** /v1/sellers/{sellerId} | Editar o seller parcialmente
[**getAcceptedPaymentMethodsBySellerId**](SellersApi.md#getAcceptedPaymentMethodsBySellerId) | **GET** /v1/sellers/{sellerId}/accepted-payment-methods | Retornar os métodos de pagamento aceito pelo estabelecimento
[**getAllSellerSalesSummaryChart**](SellersApi.md#getAllSellerSalesSummaryChart) | **GET** /v1/sellers/summary-chart/{sellerId} | Listar resumo dos ultimos 6 meses de um Estabelecimentos
[**getNotarysOfficesByCns**](SellersApi.md#getNotarysOfficesByCns) | **GET** /v1/sellers/get-notarys-office-data/{cns} | Retornar informações do cartório pelo cns
[**getReportCustomizationBySellerId**](SellersApi.md#getReportCustomizationBySellerId) | **GET** /v1/sellers/{sellerId}/report-customizations | Retornar as customizações de relatórios pelo estabelecimento
[**getSaleByServiceId**](SellersApi.md#getSaleByServiceId) | **GET** /v1/sellers/{sellerId}/sales/{serviceId}/service-id | Buscar venda pelo service id
[**getSeller**](SellersApi.md#getSeller) | **GET** /v1/sellers/{sellerId} | Retornar os dados do estabelecimento informado
[**getSellerByCode**](SellersApi.md#getSellerByCode) | **GET** /v1/sellers/code/{codeId} | Retornar os dados do estabelecimento informado pelo código
[**getSellerCredential**](SellersApi.md#getSellerCredential) | **GET** /v1/sellers/{sellerId}/credentials/{credentialId} | Buscar uma credencial
[**getSellerPos**](SellersApi.md#getSellerPos) | **GET** /v1/sellers/{sellerId}/pos/{sellerPosId} | Retornar os dados do POS informado
[**getSellerSale**](SellersApi.md#getSellerSale) | **GET** /v1/sellers/{sellerId}/sales/{saleId} | Retornar a venda informada
[**getSellerSaleBillet**](SellersApi.md#getSellerSaleBillet) | **GET** /v1/sellers/{sellerId}/sales/{saleId}/billets | Retornar o boleto da venda informada
[**getSellerSalesSummary**](SellersApi.md#getSellerSalesSummary) | **GET** /v1/sellers/{sellerId}/summary | Listar o resumo de todas as vendas de um estabelecimento
[**getSellerSalev2**](SellersApi.md#getSellerSalev2) | **GET** /v2/sellers/{sellerId}/sales/{saleId} | Retornar a venda informada
[**getSellersByResponsibleId**](SellersApi.md#getSellersByResponsibleId) | **GET** /v1/sellers/responsible/{responsibleId} | Obter cartórios do responsável
[**internalListSellerSales**](SellersApi.md#internalListSellerSales) | **GET** /v1/sellers/{sellerId}/sales/internal/list | Listar vendas de um estabelecimento
[**listMerchantSellers**](SellersApi.md#listMerchantSellers) | **GET** /v1/sellers/{sellerId}/list-sellers | Listar os sellers do mesmo merchant
[**listSellerAcquirers**](SellersApi.md#listSellerAcquirers) | **GET** /v1/sellers/{sellerId}/acquirers | Listar as adquirentes do estabelecimento informado
[**listSellerBillets**](SellersApi.md#listSellerBillets) | **GET** /v1/sellers/{sellerId}/billets | Listar os boletos do estabelecimento informado
[**listSellerCredential**](SellersApi.md#listSellerCredential) | **GET** /v1/sellers/{sellerId}/credentials | Listar credenciais de um estabelecimento
[**listSellerPaginatedPos**](SellersApi.md#listSellerPaginatedPos) | **GET** /v1/sellers/{sellerId}/paginated/pos | Listar os POS de um estabelecimento paginado
[**listSellerPayer**](SellersApi.md#listSellerPayer) | **GET** /v1/sellers/{sellerId}/payers/{payerDocument} | Listar um pagador do estabelecimento
[**listSellerPayers**](SellersApi.md#listSellerPayers) | **GET** /v1/sellers/{sellerId}/payers | Listar pagadores do estabelecimento
[**listSellerPaymentLinks**](SellersApi.md#listSellerPaymentLinks) | **GET** /v1/sellers/{sellerId}/payment-links | Listar os links de pagamento do estabelecimento informado
[**listSellerPos**](SellersApi.md#listSellerPos) | **GET** /v1/sellers/{sellerId}/pos | Listar os POS de um estabelecimento
[**listSellerProtestLinks**](SellersApi.md#listSellerProtestLinks) | **GET** /v1/sellers/{sellerId}/protest-links | Listar os links de protesto do estabelecimento informado
[**listSellerSales**](SellersApi.md#listSellerSales) | **GET** /v1/sellers/{sellerId}/sales | Listar vendas de um estabelecimento
[**listSellerSalesV2**](SellersApi.md#listSellerSalesV2) | **GET** /v2/sellers/{sellerId}/sales | Listar vendas de um estabelecimento
[**listSellerUsers**](SellersApi.md#listSellerUsers) | **GET** /v1/sellers/{sellerId}/users | Listar os usuários do estabelecimento
[**listSellers**](SellersApi.md#listSellers) | **GET** /v1/sellers | Listar estabelecimentos
[**newConfirmSales**](SellersApi.md#newConfirmSales) | **POST** /v2/sellers/{sellerId}/sales/confirm | Autorizar liquidação das vendas que estão aguardando confirmação
[**searchSeller**](SellersApi.md#searchSeller) | **GET** /v1/sellers/search | Buscar em estabelecimentos
[**splitSale**](SellersApi.md#splitSale) | **POST** /v1/sellers/{sellerId}/sales/{saleId}/split | Splitar uma venda pelos estabelecimentos informados
[**updateSellerTheme**](SellersApi.md#updateSellerTheme) | **PUT** /v1/sellers/{sellerId}/theme | Atualizar o tema do estabelecimento
[**updateSellerUser**](SellersApi.md#updateSellerUser) | **PATCH** /v1/sellers/{sellerId}/users/{userId} | Atualizar um usuário do estabelecimento
[**uploadSellerLogo**](SellersApi.md#uploadSellerLogo) | **POST** /v1/sellers/{sellerId}/logo | Realizar upload da logo do estabelecimento



## addAcquirer

> GetSellerDto addAcquirer(sellerId, IncludeAcquirerDto)

Associar uma adquirente a um estabelecimento

### Example

```javascript
import ParcelaExpressApi from 'parcela_express_api';
let defaultClient = ParcelaExpressApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new ParcelaExpressApi.SellersApi();
let sellerId = "sellerId_example"; // String | 
let IncludeAcquirerDto = new ParcelaExpressApi.IncludeAcquirerDto(); // IncludeAcquirerDto | 
apiInstance.addAcquirer(sellerId, IncludeAcquirerDto, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sellerId** | **String**|  | 
 **IncludeAcquirerDto** | [**IncludeAcquirerDto**](IncludeAcquirerDto.md)|  | 

### Return type

[**GetSellerDto**](GetSellerDto.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## addSalePlan

> GetSellerDto addSalePlan(sellerId, IncludeSalePlanDto)

Associar um plano de vendas a um estabelecimento

### Example

```javascript
import ParcelaExpressApi from 'parcela_express_api';
let defaultClient = ParcelaExpressApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new ParcelaExpressApi.SellersApi();
let sellerId = "sellerId_example"; // String | 
let IncludeSalePlanDto = new ParcelaExpressApi.IncludeSalePlanDto(); // IncludeSalePlanDto | 
apiInstance.addSalePlan(sellerId, IncludeSalePlanDto, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sellerId** | **String**|  | 
 **IncludeSalePlanDto** | [**IncludeSalePlanDto**](IncludeSalePlanDto.md)|  | 

### Return type

[**GetSellerDto**](GetSellerDto.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## confirmSales

> String confirmSales(sellerId, ConfirmPaymentDto)

Autorizar liquidação das vendas que estão aguardando confirmação

Em alternativa a esta rota, utilize a [v2](#/Sellers/newConfirmSales)

### Example

```javascript
import ParcelaExpressApi from 'parcela_express_api';
let defaultClient = ParcelaExpressApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new ParcelaExpressApi.SellersApi();
let sellerId = "sellerId_example"; // String | 
let ConfirmPaymentDto = new ParcelaExpressApi.ConfirmPaymentDto(); // ConfirmPaymentDto | 
apiInstance.confirmSales(sellerId, ConfirmPaymentDto, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sellerId** | **String**|  | 
 **ConfirmPaymentDto** | [**ConfirmPaymentDto**](ConfirmPaymentDto.md)|  | 

### Return type

**String**

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## createSaleAutoGenerateLinkPayment

> GetSellerSaleAutoGeneratePaymentLinkDto createSaleAutoGenerateLinkPayment(sellerId, CreateSaleAutoGeneratePaymentLinkDto)

Gerar uma venda com status pendente para um estabelecimento pelo link auto gerável

### Example

```javascript
import ParcelaExpressApi from 'parcela_express_api';

let apiInstance = new ParcelaExpressApi.SellersApi();
let sellerId = "sellerId_example"; // String | 
let CreateSaleAutoGeneratePaymentLinkDto = new ParcelaExpressApi.CreateSaleAutoGeneratePaymentLinkDto(); // CreateSaleAutoGeneratePaymentLinkDto | 
apiInstance.createSaleAutoGenerateLinkPayment(sellerId, CreateSaleAutoGeneratePaymentLinkDto, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sellerId** | **String**|  | 
 **CreateSaleAutoGeneratePaymentLinkDto** | [**CreateSaleAutoGeneratePaymentLinkDto**](CreateSaleAutoGeneratePaymentLinkDto.md)|  | 

### Return type

[**GetSellerSaleAutoGeneratePaymentLinkDto**](GetSellerSaleAutoGeneratePaymentLinkDto.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## createSeller

> GetSellerDto createSeller(CreateSellerDto)

Criar estabelecimento

### Example

```javascript
import ParcelaExpressApi from 'parcela_express_api';
let defaultClient = ParcelaExpressApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new ParcelaExpressApi.SellersApi();
let CreateSellerDto = new ParcelaExpressApi.CreateSellerDto(); // CreateSellerDto | 
apiInstance.createSeller(CreateSellerDto, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **CreateSellerDto** | [**CreateSellerDto**](CreateSellerDto.md)|  | 

### Return type

[**GetSellerDto**](GetSellerDto.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## createSellerCredential

> CreateSellerCredentialResponseDto createSellerCredential(sellerId, CreateSellerCredentialDto)

Criar uma nova credencial para o estabelecimento

### Example

```javascript
import ParcelaExpressApi from 'parcela_express_api';
let defaultClient = ParcelaExpressApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new ParcelaExpressApi.SellersApi();
let sellerId = "sellerId_example"; // String | 
let CreateSellerCredentialDto = new ParcelaExpressApi.CreateSellerCredentialDto(); // CreateSellerCredentialDto | 
apiInstance.createSellerCredential(sellerId, CreateSellerCredentialDto, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sellerId** | **String**|  | 
 **CreateSellerCredentialDto** | [**CreateSellerCredentialDto**](CreateSellerCredentialDto.md)|  | 

### Return type

[**CreateSellerCredentialResponseDto**](CreateSellerCredentialResponseDto.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## createSellerPayer

> CreatePayerDto createSellerPayer(sellerId, CreatePayerDto)

Criar pagador do estabelecimento

### Example

```javascript
import ParcelaExpressApi from 'parcela_express_api';
let defaultClient = ParcelaExpressApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new ParcelaExpressApi.SellersApi();
let sellerId = "sellerId_example"; // String | 
let CreatePayerDto = new ParcelaExpressApi.CreatePayerDto(); // CreatePayerDto | 
apiInstance.createSellerPayer(sellerId, CreatePayerDto, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sellerId** | **String**|  | 
 **CreatePayerDto** | [**CreatePayerDto**](CreatePayerDto.md)|  | 

### Return type

[**CreatePayerDto**](CreatePayerDto.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## createSellerPos

> GetSellerPosDto createSellerPos(sellerId, CreateSellerPosDto)

Incluir um POS em um estabelecimento

### Example

```javascript
import ParcelaExpressApi from 'parcela_express_api';
let defaultClient = ParcelaExpressApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new ParcelaExpressApi.SellersApi();
let sellerId = "sellerId_example"; // String | 
let CreateSellerPosDto = new ParcelaExpressApi.CreateSellerPosDto(); // CreateSellerPosDto | 
apiInstance.createSellerPos(sellerId, CreateSellerPosDto, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sellerId** | **String**|  | 
 **CreateSellerPosDto** | [**CreateSellerPosDto**](CreateSellerPosDto.md)|  | 

### Return type

[**GetSellerPosDto**](GetSellerPosDto.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## createSellerSale

> GetSellerSaleDto createSellerSale(sellerId, CreateSaleDto)

Realizar venda para um estabelecimento

### Example

```javascript
import ParcelaExpressApi from 'parcela_express_api';
let defaultClient = ParcelaExpressApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new ParcelaExpressApi.SellersApi();
let sellerId = "sellerId_example"; // String | 
let CreateSaleDto = new ParcelaExpressApi.CreateSaleDto(); // CreateSaleDto | 
apiInstance.createSellerSale(sellerId, CreateSaleDto, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sellerId** | **String**|  | 
 **CreateSaleDto** | [**CreateSaleDto**](CreateSaleDto.md)|  | 

### Return type

[**GetSellerSaleDto**](GetSellerSaleDto.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## createSellerUser

> GetSellerUserDto createSellerUser(sellerId, CreateSellerUserDto)

Criar usuário do estabelecimento

### Example

```javascript
import ParcelaExpressApi from 'parcela_express_api';
let defaultClient = ParcelaExpressApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new ParcelaExpressApi.SellersApi();
let sellerId = "sellerId_example"; // String | 
let CreateSellerUserDto = new ParcelaExpressApi.CreateSellerUserDto(); // CreateSellerUserDto | 
apiInstance.createSellerUser(sellerId, CreateSellerUserDto, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sellerId** | **String**|  | 
 **CreateSellerUserDto** | [**CreateSellerUserDto**](CreateSellerUserDto.md)|  | 

### Return type

[**GetSellerUserDto**](GetSellerUserDto.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## createSellersListExportRequest

> GetFileExportRequestDto createSellersListExportRequest(CreateExportSellersListDto)

Gerar uma requisição de exportação da lista de estabelecimentos

### Example

```javascript
import ParcelaExpressApi from 'parcela_express_api';
let defaultClient = ParcelaExpressApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new ParcelaExpressApi.SellersApi();
let CreateExportSellersListDto = new ParcelaExpressApi.CreateExportSellersListDto(); // CreateExportSellersListDto | 
apiInstance.createSellersListExportRequest(CreateExportSellersListDto, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **CreateExportSellersListDto** | [**CreateExportSellersListDto**](CreateExportSellersListDto.md)|  | 

### Return type

[**GetFileExportRequestDto**](GetFileExportRequestDto.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteSellerCredential

> deleteSellerCredential(sellerId, credentialId)

Deletar uma credencial de estabelecimento

### Example

```javascript
import ParcelaExpressApi from 'parcela_express_api';
let defaultClient = ParcelaExpressApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new ParcelaExpressApi.SellersApi();
let sellerId = "sellerId_example"; // String | 
let credentialId = "credentialId_example"; // String | 
apiInstance.deleteSellerCredential(sellerId, credentialId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sellerId** | **String**|  | 
 **credentialId** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## editSeller

> editSeller(sellerId, EditSellerDto)

Editar estabelecimento

### Example

```javascript
import ParcelaExpressApi from 'parcela_express_api';
let defaultClient = ParcelaExpressApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new ParcelaExpressApi.SellersApi();
let sellerId = "sellerId_example"; // String | 
let EditSellerDto = new ParcelaExpressApi.EditSellerDto(); // EditSellerDto | 
apiInstance.editSeller(sellerId, EditSellerDto, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sellerId** | **String**|  | 
 **EditSellerDto** | [**EditSellerDto**](EditSellerDto.md)|  | 

### Return type

null (empty response body)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: Not defined


## editSellerCredential

> editSellerCredential(sellerId, credentialId, EditSellerCredentialDto)

Editar uma credencial de estabelecimento

### Example

```javascript
import ParcelaExpressApi from 'parcela_express_api';
let defaultClient = ParcelaExpressApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new ParcelaExpressApi.SellersApi();
let sellerId = "sellerId_example"; // String | 
let credentialId = "credentialId_example"; // String | 
let EditSellerCredentialDto = new ParcelaExpressApi.EditSellerCredentialDto(); // EditSellerCredentialDto | 
apiInstance.editSellerCredential(sellerId, credentialId, EditSellerCredentialDto, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sellerId** | **String**|  | 
 **credentialId** | **String**|  | 
 **EditSellerCredentialDto** | [**EditSellerCredentialDto**](EditSellerCredentialDto.md)|  | 

### Return type

null (empty response body)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: Not defined


## editSellerPartial

> GetSellerDto editSellerPartial(sellerId, EditSellerPartialDto)

Editar o seller parcialmente

### Example

```javascript
import ParcelaExpressApi from 'parcela_express_api';
let defaultClient = ParcelaExpressApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new ParcelaExpressApi.SellersApi();
let sellerId = "sellerId_example"; // String | 
let EditSellerPartialDto = new ParcelaExpressApi.EditSellerPartialDto(); // EditSellerPartialDto | 
apiInstance.editSellerPartial(sellerId, EditSellerPartialDto, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sellerId** | **String**|  | 
 **EditSellerPartialDto** | [**EditSellerPartialDto**](EditSellerPartialDto.md)|  | 

### Return type

[**GetSellerDto**](GetSellerDto.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## getAcceptedPaymentMethodsBySellerId

> GetSellerAcceptedPaymentMethodsDto getAcceptedPaymentMethodsBySellerId(sellerId, opts)

Retornar os métodos de pagamento aceito pelo estabelecimento

### Example

```javascript
import ParcelaExpressApi from 'parcela_express_api';

let apiInstance = new ParcelaExpressApi.SellersApi();
let sellerId = "sellerId_example"; // String | 
let opts = {
  'valueCents': 3.4 // Number | 
};
apiInstance.getAcceptedPaymentMethodsBySellerId(sellerId, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sellerId** | **String**|  | 
 **valueCents** | **Number**|  | [optional] 

### Return type

[**GetSellerAcceptedPaymentMethodsDto**](GetSellerAcceptedPaymentMethodsDto.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getAllSellerSalesSummaryChart

> GetSaleSummaryChartDto getAllSellerSalesSummaryChart(sellerId)

Listar resumo dos ultimos 6 meses de um Estabelecimentos

### Example

```javascript
import ParcelaExpressApi from 'parcela_express_api';
let defaultClient = ParcelaExpressApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new ParcelaExpressApi.SellersApi();
let sellerId = "sellerId_example"; // String | 
apiInstance.getAllSellerSalesSummaryChart(sellerId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sellerId** | **String**|  | 

### Return type

[**GetSaleSummaryChartDto**](GetSaleSummaryChartDto.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getNotarysOfficesByCns

> NotaryOffice getNotarysOfficesByCns(cns)

Retornar informações do cartório pelo cns

### Example

```javascript
import ParcelaExpressApi from 'parcela_express_api';

let apiInstance = new ParcelaExpressApi.SellersApi();
let cns = "cns_example"; // String | 
apiInstance.getNotarysOfficesByCns(cns, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cns** | **String**|  | 

### Return type

[**NotaryOffice**](NotaryOffice.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getReportCustomizationBySellerId

> GetSellerReportCustomizationDto getReportCustomizationBySellerId(sellerId)

Retornar as customizações de relatórios pelo estabelecimento

### Example

```javascript
import ParcelaExpressApi from 'parcela_express_api';

let apiInstance = new ParcelaExpressApi.SellersApi();
let sellerId = "sellerId_example"; // String | 
apiInstance.getReportCustomizationBySellerId(sellerId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sellerId** | **String**|  | 

### Return type

[**GetSellerReportCustomizationDto**](GetSellerReportCustomizationDto.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getSaleByServiceId

> [GetSaleDto] getSaleByServiceId(sellerId, serviceId)

Buscar venda pelo service id

### Example

```javascript
import ParcelaExpressApi from 'parcela_express_api';
let defaultClient = ParcelaExpressApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new ParcelaExpressApi.SellersApi();
let sellerId = "sellerId_example"; // String | 
let serviceId = "serviceId_example"; // String | 
apiInstance.getSaleByServiceId(sellerId, serviceId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sellerId** | **String**|  | 
 **serviceId** | **String**|  | 

### Return type

[**[GetSaleDto]**](GetSaleDto.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getSeller

> GetSellerDto getSeller(sellerId)

Retornar os dados do estabelecimento informado

### Example

```javascript
import ParcelaExpressApi from 'parcela_express_api';
let defaultClient = ParcelaExpressApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new ParcelaExpressApi.SellersApi();
let sellerId = "sellerId_example"; // String | 
apiInstance.getSeller(sellerId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sellerId** | **String**|  | 

### Return type

[**GetSellerDto**](GetSellerDto.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getSellerByCode

> GetSellerDto getSellerByCode(codeId)

Retornar os dados do estabelecimento informado pelo código

### Example

```javascript
import ParcelaExpressApi from 'parcela_express_api';

let apiInstance = new ParcelaExpressApi.SellersApi();
let codeId = "codeId_example"; // String | 
apiInstance.getSellerByCode(codeId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **codeId** | **String**|  | 

### Return type

[**GetSellerDto**](GetSellerDto.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getSellerCredential

> GetSellerCredentialResponseDto getSellerCredential(sellerId, credentialId)

Buscar uma credencial

### Example

```javascript
import ParcelaExpressApi from 'parcela_express_api';
let defaultClient = ParcelaExpressApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new ParcelaExpressApi.SellersApi();
let sellerId = "sellerId_example"; // String | 
let credentialId = "credentialId_example"; // String | 
apiInstance.getSellerCredential(sellerId, credentialId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sellerId** | **String**|  | 
 **credentialId** | **String**|  | 

### Return type

[**GetSellerCredentialResponseDto**](GetSellerCredentialResponseDto.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getSellerPos

> GetSellerPosDto getSellerPos(sellerId, sellerPosId)

Retornar os dados do POS informado

### Example

```javascript
import ParcelaExpressApi from 'parcela_express_api';
let defaultClient = ParcelaExpressApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new ParcelaExpressApi.SellersApi();
let sellerId = "sellerId_example"; // String | 
let sellerPosId = "sellerPosId_example"; // String | 
apiInstance.getSellerPos(sellerId, sellerPosId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sellerId** | **String**|  | 
 **sellerPosId** | **String**|  | 

### Return type

[**GetSellerPosDto**](GetSellerPosDto.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getSellerSale

> GetSaleDto getSellerSale(sellerId, saleId)

Retornar a venda informada

### Example

```javascript
import ParcelaExpressApi from 'parcela_express_api';
let defaultClient = ParcelaExpressApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new ParcelaExpressApi.SellersApi();
let sellerId = "sellerId_example"; // String | 
let saleId = "saleId_example"; // String | 
apiInstance.getSellerSale(sellerId, saleId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sellerId** | **String**|  | 
 **saleId** | **String**|  | 

### Return type

[**GetSaleDto**](GetSaleDto.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getSellerSaleBillet

> GetBilletDto getSellerSaleBillet(sellerId, saleId)

Retornar o boleto da venda informada

### Example

```javascript
import ParcelaExpressApi from 'parcela_express_api';
let defaultClient = ParcelaExpressApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new ParcelaExpressApi.SellersApi();
let sellerId = "sellerId_example"; // String | 
let saleId = "saleId_example"; // String | 
apiInstance.getSellerSaleBillet(sellerId, saleId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sellerId** | **String**|  | 
 **saleId** | **String**|  | 

### Return type

[**GetBilletDto**](GetBilletDto.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getSellerSalesSummary

> GetSaleSummaryDto getSellerSalesSummary(sellerId, opts)

Listar o resumo de todas as vendas de um estabelecimento

### Example

```javascript
import ParcelaExpressApi from 'parcela_express_api';
let defaultClient = ParcelaExpressApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new ParcelaExpressApi.SellersApi();
let sellerId = "sellerId_example"; // String | 
let opts = {
  'startDate': "startDate_example", // String | 
  'endDate': "endDate_example", // String | 
  'status': "status_example" // String | 
};
apiInstance.getSellerSalesSummary(sellerId, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sellerId** | **String**|  | 
 **startDate** | **String**|  | [optional] 
 **endDate** | **String**|  | [optional] 
 **status** | **String**|  | [optional] 

### Return type

[**GetSaleSummaryDto**](GetSaleSummaryDto.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getSellerSalev2

> GetSaleWithAcquirerDocumentDto getSellerSalev2(sellerId, saleId)

Retornar a venda informada

### Example

```javascript
import ParcelaExpressApi from 'parcela_express_api';
let defaultClient = ParcelaExpressApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new ParcelaExpressApi.SellersApi();
let sellerId = "sellerId_example"; // String | 
let saleId = "saleId_example"; // String | 
apiInstance.getSellerSalev2(sellerId, saleId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sellerId** | **String**|  | 
 **saleId** | **String**|  | 

### Return type

[**GetSaleWithAcquirerDocumentDto**](GetSaleWithAcquirerDocumentDto.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getSellersByResponsibleId

> [GetSellerDto] getSellersByResponsibleId(responsibleId)

Obter cartórios do responsável

### Example

```javascript
import ParcelaExpressApi from 'parcela_express_api';
let defaultClient = ParcelaExpressApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new ParcelaExpressApi.SellersApi();
let responsibleId = "responsibleId_example"; // String | 
apiInstance.getSellersByResponsibleId(responsibleId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **responsibleId** | **String**|  | 

### Return type

[**[GetSellerDto]**](GetSellerDto.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## internalListSellerSales

> PaginatedDto internalListSellerSales(limit, current_page, sellerId, opts)

Listar vendas de um estabelecimento

### Example

```javascript
import ParcelaExpressApi from 'parcela_express_api';
let defaultClient = ParcelaExpressApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new ParcelaExpressApi.SellersApi();
let limit = 10; // Number | 
let current_page = 1; // Number | 
let sellerId = "sellerId_example"; // String | 
let opts = {
  'description': "description_example", // String | Descricão
  'search': "search_example", // String | Busca por descrição, id ou referencia da adquirente
  'amount': 3.4, // Number | Valor
  'original_amount': 3.4, // Number | Valor original
  'type': ["null"], // [String] | Tipo de pagamento
  'name': "name_example", // String | Nome
  'payer_name': "payer_name_example", // String | Nome do pagador
  'user': "user_example", // String | Usuário
  'form_payment': ["null"], // [String] | Forma de pagamento
  'startDate': "startDate_example", // String | Data de inicio. Formato: yyyy-mm-dd
  'endDate': "endDate_example", // String | Data de fim. Formato: yyyy-mm-dd
  'last_number_sales': 3.4, // Number | Quantidade de vendas
  'payment_day': true, // Boolean | Dia do pagamento
  'payer_email': "payer_email_example", // String | Email do pagador
  'payer_phone': "payer_phone_example", // String | Telefone do pagador
  'updated_day': true, // Boolean | Dia da atualização
  'created_by_user_name': "created_by_user_name_example", // String | Usuário logado
  'sort': "'time-descending'", // String | 
  'id': "id_example", // String | 
  'status': ["null"] // [String] | 
};
apiInstance.internalListSellerSales(limit, current_page, sellerId, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **limit** | **Number**|  | [default to 10]
 **current_page** | **Number**|  | [default to 1]
 **sellerId** | **String**|  | 
 **description** | **String**| Descricão | [optional] 
 **search** | **String**| Busca por descrição, id ou referencia da adquirente | [optional] 
 **amount** | **Number**| Valor | [optional] 
 **original_amount** | **Number**| Valor original | [optional] 
 **type** | [**[String]**](String.md)| Tipo de pagamento | [optional] 
 **name** | **String**| Nome | [optional] 
 **payer_name** | **String**| Nome do pagador | [optional] 
 **user** | **String**| Usuário | [optional] 
 **form_payment** | [**[String]**](String.md)| Forma de pagamento | [optional] 
 **startDate** | **String**| Data de inicio. Formato: yyyy-mm-dd | [optional] 
 **endDate** | **String**| Data de fim. Formato: yyyy-mm-dd | [optional] 
 **last_number_sales** | **Number**| Quantidade de vendas | [optional] 
 **payment_day** | **Boolean**| Dia do pagamento | [optional] 
 **payer_email** | **String**| Email do pagador | [optional] 
 **payer_phone** | **String**| Telefone do pagador | [optional] 
 **updated_day** | **Boolean**| Dia da atualização | [optional] 
 **created_by_user_name** | **String**| Usuário logado | [optional] 
 **sort** | **String**|  | [optional] [default to &#39;time-descending&#39;]
 **id** | **String**|  | [optional] 
 **status** | [**[String]**](String.md)|  | [optional] 

### Return type

[**PaginatedDto**](PaginatedDto.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listMerchantSellers

> [GetMerchantSellerDto] listMerchantSellers(sellerId, opts)

Listar os sellers do mesmo merchant

### Example

```javascript
import ParcelaExpressApi from 'parcela_express_api';

let apiInstance = new ParcelaExpressApi.SellersApi();
let sellerId = "sellerId_example"; // String | 
let opts = {
  'text': "text_example" // String | 
};
apiInstance.listMerchantSellers(sellerId, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sellerId** | **String**|  | 
 **text** | **String**|  | [optional] 

### Return type

[**[GetMerchantSellerDto]**](GetMerchantSellerDto.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listSellerAcquirers

> [GetAcquirerDto] listSellerAcquirers(sellerId)

Listar as adquirentes do estabelecimento informado

### Example

```javascript
import ParcelaExpressApi from 'parcela_express_api';
let defaultClient = ParcelaExpressApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new ParcelaExpressApi.SellersApi();
let sellerId = "sellerId_example"; // String | 
apiInstance.listSellerAcquirers(sellerId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sellerId** | **String**|  | 

### Return type

[**[GetAcquirerDto]**](GetAcquirerDto.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listSellerBillets

> PaginatedDto listSellerBillets(limit, current_page, sellerId, opts)

Listar os boletos do estabelecimento informado

### Example

```javascript
import ParcelaExpressApi from 'parcela_express_api';
let defaultClient = ParcelaExpressApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new ParcelaExpressApi.SellersApi();
let limit = 10; // Number | 
let current_page = 1; // Number | 
let sellerId = "sellerId_example"; // String | 
let opts = {
  'sort': "'time-descending'" // String | 
};
apiInstance.listSellerBillets(limit, current_page, sellerId, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **limit** | **Number**|  | [default to 10]
 **current_page** | **Number**|  | [default to 1]
 **sellerId** | **String**|  | 
 **sort** | **String**|  | [optional] [default to &#39;time-descending&#39;]

### Return type

[**PaginatedDto**](PaginatedDto.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listSellerCredential

> [GetSellerCredentialResponseDto] listSellerCredential(sellerId)

Listar credenciais de um estabelecimento

### Example

```javascript
import ParcelaExpressApi from 'parcela_express_api';
let defaultClient = ParcelaExpressApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new ParcelaExpressApi.SellersApi();
let sellerId = "sellerId_example"; // String | 
apiInstance.listSellerCredential(sellerId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sellerId** | **String**|  | 

### Return type

[**[GetSellerCredentialResponseDto]**](GetSellerCredentialResponseDto.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listSellerPaginatedPos

> PaginatedDto listSellerPaginatedPos(limit, current_page, status, sellerId, opts)

Listar os POS de um estabelecimento paginado

### Example

```javascript
import ParcelaExpressApi from 'parcela_express_api';
let defaultClient = ParcelaExpressApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new ParcelaExpressApi.SellersApi();
let limit = 10; // Number | 
let current_page = 1; // Number | 
let status = "status_example"; // String | 
let sellerId = "sellerId_example"; // String | 
let opts = {
  'sort': "'asc'" // String | 
};
apiInstance.listSellerPaginatedPos(limit, current_page, status, sellerId, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **limit** | **Number**|  | [default to 10]
 **current_page** | **Number**|  | [default to 1]
 **status** | **String**|  | 
 **sellerId** | **String**|  | 
 **sort** | **String**|  | [optional] [default to &#39;asc&#39;]

### Return type

[**PaginatedDto**](PaginatedDto.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listSellerPayer

> GetPayerDto listSellerPayer(sellerId, payerDocument)

Listar um pagador do estabelecimento

### Example

```javascript
import ParcelaExpressApi from 'parcela_express_api';
let defaultClient = ParcelaExpressApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new ParcelaExpressApi.SellersApi();
let sellerId = "sellerId_example"; // String | 
let payerDocument = "payerDocument_example"; // String | 
apiInstance.listSellerPayer(sellerId, payerDocument, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sellerId** | **String**|  | 
 **payerDocument** | **String**|  | 

### Return type

[**GetPayerDto**](GetPayerDto.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listSellerPayers

> PaginatedDto listSellerPayers(limit, current_page, sellerId, opts)

Listar pagadores do estabelecimento

### Example

```javascript
import ParcelaExpressApi from 'parcela_express_api';
let defaultClient = ParcelaExpressApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new ParcelaExpressApi.SellersApi();
let limit = 10; // Number | 
let current_page = 1; // Number | 
let sellerId = "sellerId_example"; // String | 
let opts = {
  'sort': "'time-descending'", // String | 
  'name': "name_example", // String | 
  'document': "document_example" // String | 
};
apiInstance.listSellerPayers(limit, current_page, sellerId, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **limit** | **Number**|  | [default to 10]
 **current_page** | **Number**|  | [default to 1]
 **sellerId** | **String**|  | 
 **sort** | **String**|  | [optional] [default to &#39;time-descending&#39;]
 **name** | **String**|  | [optional] 
 **document** | **String**|  | [optional] 

### Return type

[**PaginatedDto**](PaginatedDto.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listSellerPaymentLinks

> PaginatedDto listSellerPaymentLinks(limit, current_page, sellerId, opts)

Listar os links de pagamento do estabelecimento informado

### Example

```javascript
import ParcelaExpressApi from 'parcela_express_api';
let defaultClient = ParcelaExpressApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new ParcelaExpressApi.SellersApi();
let limit = 10; // Number | 
let current_page = 1; // Number | 
let sellerId = "sellerId_example"; // String | 
let opts = {
  'start_date': "start_date_example", // String | Formato: yyyy-mm-dd
  'end_date': "end_date_example", // String | Formato: yyyy-mm-dd
  'id': "id_example", // String | 
  'email': "email_example", // String | 
  'description': "description_example", // String | 
  'payer_name': "payer_name_example", // String | 
  'status': ["null"], // [String] | 
  'form_payment': ["null"] // [String] | 
};
apiInstance.listSellerPaymentLinks(limit, current_page, sellerId, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **limit** | **Number**|  | [default to 10]
 **current_page** | **Number**|  | [default to 1]
 **sellerId** | **String**|  | 
 **start_date** | **String**| Formato: yyyy-mm-dd | [optional] 
 **end_date** | **String**| Formato: yyyy-mm-dd | [optional] 
 **id** | **String**|  | [optional] 
 **email** | **String**|  | [optional] 
 **description** | **String**|  | [optional] 
 **payer_name** | **String**|  | [optional] 
 **status** | [**[String]**](String.md)|  | [optional] 
 **form_payment** | [**[String]**](String.md)|  | [optional] 

### Return type

[**PaginatedDto**](PaginatedDto.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listSellerPos

> [GetSellerPosDto] listSellerPos(sellerId)

Listar os POS de um estabelecimento

### Example

```javascript
import ParcelaExpressApi from 'parcela_express_api';
let defaultClient = ParcelaExpressApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new ParcelaExpressApi.SellersApi();
let sellerId = "sellerId_example"; // String | 
apiInstance.listSellerPos(sellerId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sellerId** | **String**|  | 

### Return type

[**[GetSellerPosDto]**](GetSellerPosDto.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listSellerProtestLinks

> PaginatedDto listSellerProtestLinks(limit, current_page, sellerId, opts)

Listar os links de protesto do estabelecimento informado

### Example

```javascript
import ParcelaExpressApi from 'parcela_express_api';
let defaultClient = ParcelaExpressApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new ParcelaExpressApi.SellersApi();
let limit = 10; // Number | 
let current_page = 1; // Number | 
let sellerId = "sellerId_example"; // String | 
let opts = {
  'start_date': "start_date_example", // String | Formato: yyyy-mm-dd
  'end_date': "end_date_example", // String | Formato: yyyy-mm-dd
  'id': "id_example", // String | 
  'email': "email_example", // String | 
  'status': ["null"], // [String] | 
  'form_payment': ["null"] // [String] | 
};
apiInstance.listSellerProtestLinks(limit, current_page, sellerId, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **limit** | **Number**|  | [default to 10]
 **current_page** | **Number**|  | [default to 1]
 **sellerId** | **String**|  | 
 **start_date** | **String**| Formato: yyyy-mm-dd | [optional] 
 **end_date** | **String**| Formato: yyyy-mm-dd | [optional] 
 **id** | **String**|  | [optional] 
 **email** | **String**|  | [optional] 
 **status** | [**[String]**](String.md)|  | [optional] 
 **form_payment** | [**[String]**](String.md)|  | [optional] 

### Return type

[**PaginatedDto**](PaginatedDto.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listSellerSales

> PaginatedDto listSellerSales(limit, current_page, sellerId, opts)

Listar vendas de um estabelecimento

### Example

```javascript
import ParcelaExpressApi from 'parcela_express_api';
let defaultClient = ParcelaExpressApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new ParcelaExpressApi.SellersApi();
let limit = 10; // Number | 
let current_page = 1; // Number | 
let sellerId = "sellerId_example"; // String | 
let opts = {
  'description': "description_example", // String | Descricão
  'search': "search_example", // String | Busca por descrição, protocolo, id ou referencia da adquirente
  'amount': 3.4, // Number | Valor
  'original_amount': 3.4, // Number | Valor original
  'type': ["null"], // [String] | Tipo de pagamento
  'name': "name_example", // String | Nome
  'payer_name': "payer_name_example", // String | Nome do pagador
  'user': "user_example", // String | Usuário
  'form_payment': ["null"], // [String] | Forma de pagamento
  'startDate': "startDate_example", // String | Data de inicio. Formato: yyyy-mm-dd
  'endDate': "endDate_example", // String | Data de fim. Formato: yyyy-mm-dd
  'last_number_sales': 3.4, // Number | Quantidade de vendas
  'payment_day': true, // Boolean | Dia do pagamento
  'payer_email': "payer_email_example", // String | Email do pagador
  'payer_phone': "payer_phone_example", // String | Telefone do pagador
  'settlement_batch_id': "settlement_batch_id_example", // String | ID do lote
  'settlement_batch_day': "settlement_batch_day_example", // String | Data de liquidação do lote
  'updated_day': true, // Boolean | Dia da atualização
  'created_by_user_name': "created_by_user_name_example", // String | Usuário logado
  'sort': "'time-descending'", // String | 
  'id': "id_example", // String | 
  'status': ["null"] // [String] | 
};
apiInstance.listSellerSales(limit, current_page, sellerId, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **limit** | **Number**|  | [default to 10]
 **current_page** | **Number**|  | [default to 1]
 **sellerId** | **String**|  | 
 **description** | **String**| Descricão | [optional] 
 **search** | **String**| Busca por descrição, protocolo, id ou referencia da adquirente | [optional] 
 **amount** | **Number**| Valor | [optional] 
 **original_amount** | **Number**| Valor original | [optional] 
 **type** | [**[String]**](String.md)| Tipo de pagamento | [optional] 
 **name** | **String**| Nome | [optional] 
 **payer_name** | **String**| Nome do pagador | [optional] 
 **user** | **String**| Usuário | [optional] 
 **form_payment** | [**[String]**](String.md)| Forma de pagamento | [optional] 
 **startDate** | **String**| Data de inicio. Formato: yyyy-mm-dd | [optional] 
 **endDate** | **String**| Data de fim. Formato: yyyy-mm-dd | [optional] 
 **last_number_sales** | **Number**| Quantidade de vendas | [optional] 
 **payment_day** | **Boolean**| Dia do pagamento | [optional] 
 **payer_email** | **String**| Email do pagador | [optional] 
 **payer_phone** | **String**| Telefone do pagador | [optional] 
 **settlement_batch_id** | **String**| ID do lote | [optional] 
 **settlement_batch_day** | **String**| Data de liquidação do lote | [optional] 
 **updated_day** | **Boolean**| Dia da atualização | [optional] 
 **created_by_user_name** | **String**| Usuário logado | [optional] 
 **sort** | **String**|  | [optional] [default to &#39;time-descending&#39;]
 **id** | **String**|  | [optional] 
 **status** | [**[String]**](String.md)|  | [optional] 

### Return type

[**PaginatedDto**](PaginatedDto.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listSellerSalesV2

> PaginatedDto listSellerSalesV2(limit, current_page, sellerId, opts)

Listar vendas de um estabelecimento

### Example

```javascript
import ParcelaExpressApi from 'parcela_express_api';
let defaultClient = ParcelaExpressApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new ParcelaExpressApi.SellersApi();
let limit = 10; // Number | 
let current_page = 1; // Number | 
let sellerId = "sellerId_example"; // String | 
let opts = {
  'description': "description_example", // String | Descricão
  'search': "search_example", // String | Busca por descrição, protocolo, id ou referencia da adquirente
  'amount': 3.4, // Number | Valor
  'original_amount': 3.4, // Number | Valor original
  'type': ["null"], // [String] | Tipo de pagamento
  'name': "name_example", // String | Nome
  'payer_name': "payer_name_example", // String | Nome do pagador
  'user': "user_example", // String | Usuário
  'form_payment': ["null"], // [String] | Forma de pagamento
  'startDate': "startDate_example", // String | Data de inicio. Formato: yyyy-mm-dd
  'endDate': "endDate_example", // String | Data de fim. Formato: yyyy-mm-dd
  'last_number_sales': 3.4, // Number | Quantidade de vendas
  'payment_day': true, // Boolean | Dia do pagamento
  'payer_email': "payer_email_example", // String | Email do pagador
  'payer_phone': "payer_phone_example", // String | Telefone do pagador
  'settlement_batch_id': "settlement_batch_id_example", // String | ID do lote
  'settlement_batch_day': "settlement_batch_day_example", // String | Data de liquidação do lote
  'updated_day': true, // Boolean | Dia da atualização
  'created_by_user_name': "created_by_user_name_example", // String | Usuário logado
  'sort': "'time-descending'", // String | 
  'id': "id_example", // String | 
  'status': ["null"] // [String] | 
};
apiInstance.listSellerSalesV2(limit, current_page, sellerId, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **limit** | **Number**|  | [default to 10]
 **current_page** | **Number**|  | [default to 1]
 **sellerId** | **String**|  | 
 **description** | **String**| Descricão | [optional] 
 **search** | **String**| Busca por descrição, protocolo, id ou referencia da adquirente | [optional] 
 **amount** | **Number**| Valor | [optional] 
 **original_amount** | **Number**| Valor original | [optional] 
 **type** | [**[String]**](String.md)| Tipo de pagamento | [optional] 
 **name** | **String**| Nome | [optional] 
 **payer_name** | **String**| Nome do pagador | [optional] 
 **user** | **String**| Usuário | [optional] 
 **form_payment** | [**[String]**](String.md)| Forma de pagamento | [optional] 
 **startDate** | **String**| Data de inicio. Formato: yyyy-mm-dd | [optional] 
 **endDate** | **String**| Data de fim. Formato: yyyy-mm-dd | [optional] 
 **last_number_sales** | **Number**| Quantidade de vendas | [optional] 
 **payment_day** | **Boolean**| Dia do pagamento | [optional] 
 **payer_email** | **String**| Email do pagador | [optional] 
 **payer_phone** | **String**| Telefone do pagador | [optional] 
 **settlement_batch_id** | **String**| ID do lote | [optional] 
 **settlement_batch_day** | **String**| Data de liquidação do lote | [optional] 
 **updated_day** | **Boolean**| Dia da atualização | [optional] 
 **created_by_user_name** | **String**| Usuário logado | [optional] 
 **sort** | **String**|  | [optional] [default to &#39;time-descending&#39;]
 **id** | **String**|  | [optional] 
 **status** | [**[String]**](String.md)|  | [optional] 

### Return type

[**PaginatedDto**](PaginatedDto.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listSellerUsers

> PaginatedDto listSellerUsers(limit, current_page, sellerId, opts)

Listar os usuários do estabelecimento

### Example

```javascript
import ParcelaExpressApi from 'parcela_express_api';
let defaultClient = ParcelaExpressApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new ParcelaExpressApi.SellersApi();
let limit = 10; // Number | 
let current_page = 1; // Number | 
let sellerId = "sellerId_example"; // String | 
let opts = {
  'sort': "'time-descending'" // String | 
};
apiInstance.listSellerUsers(limit, current_page, sellerId, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **limit** | **Number**|  | [default to 10]
 **current_page** | **Number**|  | [default to 1]
 **sellerId** | **String**|  | 
 **sort** | **String**|  | [optional] [default to &#39;time-descending&#39;]

### Return type

[**PaginatedDto**](PaginatedDto.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listSellers

> PaginatedDto listSellers(limit, current_page, opts)

Listar estabelecimentos

### Example

```javascript
import ParcelaExpressApi from 'parcela_express_api';
let defaultClient = ParcelaExpressApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new ParcelaExpressApi.SellersApi();
let limit = 10; // Number | 
let current_page = 1; // Number | 
let opts = {
  'sort': "'time-descending'", // String | 
  'text': "text_example", // String | 
  'status': ["null"], // [String] | 
  'document': "document_example", // String | 
  'name': "name_example", // String | 
  'sellerId': "sellerId_example", // String | 
  'mode': "mode_example", // String | 
  'billet_provider': "billet_provider_example", // String | 
  'cns': "cns_example", // String | 
  'code': "code_example" // String | 
};
apiInstance.listSellers(limit, current_page, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **limit** | **Number**|  | [default to 10]
 **current_page** | **Number**|  | [default to 1]
 **sort** | **String**|  | [optional] [default to &#39;time-descending&#39;]
 **text** | **String**|  | [optional] 
 **status** | [**[String]**](String.md)|  | [optional] 
 **document** | **String**|  | [optional] 
 **name** | **String**|  | [optional] 
 **sellerId** | **String**|  | [optional] 
 **mode** | **String**|  | [optional] 
 **billet_provider** | **String**|  | [optional] 
 **cns** | **String**|  | [optional] 
 **code** | **String**|  | [optional] 

### Return type

[**PaginatedDto**](PaginatedDto.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## newConfirmSales

> Object newConfirmSales(sellerId, ConfirmPaymentDto)

Autorizar liquidação das vendas que estão aguardando confirmação

### Example

```javascript
import ParcelaExpressApi from 'parcela_express_api';
let defaultClient = ParcelaExpressApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new ParcelaExpressApi.SellersApi();
let sellerId = "sellerId_example"; // String | 
let ConfirmPaymentDto = new ParcelaExpressApi.ConfirmPaymentDto(); // ConfirmPaymentDto | 
apiInstance.newConfirmSales(sellerId, ConfirmPaymentDto, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sellerId** | **String**|  | 
 **ConfirmPaymentDto** | [**ConfirmPaymentDto**](ConfirmPaymentDto.md)|  | 

### Return type

**Object**

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## searchSeller

> [SearchSellerDto] searchSeller(opts)

Buscar em estabelecimentos

### Example

```javascript
import ParcelaExpressApi from 'parcela_express_api';
let defaultClient = ParcelaExpressApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new ParcelaExpressApi.SellersApi();
let opts = {
  'search': "search_example" // String | 
};
apiInstance.searchSeller(opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **search** | **String**|  | [optional] 

### Return type

[**[SearchSellerDto]**](SearchSellerDto.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## splitSale

> SplitRulesDto splitSale(sellerId, saleId, CreateSplitRulesDto)

Splitar uma venda pelos estabelecimentos informados

### Example

```javascript
import ParcelaExpressApi from 'parcela_express_api';
let defaultClient = ParcelaExpressApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new ParcelaExpressApi.SellersApi();
let sellerId = "sellerId_example"; // String | 
let saleId = "saleId_example"; // String | 
let CreateSplitRulesDto = [new ParcelaExpressApi.CreateSplitRulesDto()]; // [CreateSplitRulesDto] | 
apiInstance.splitSale(sellerId, saleId, CreateSplitRulesDto, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sellerId** | **String**|  | 
 **saleId** | **String**|  | 
 **CreateSplitRulesDto** | [**[CreateSplitRulesDto]**](CreateSplitRulesDto.md)|  | 

### Return type

[**SplitRulesDto**](SplitRulesDto.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## updateSellerTheme

> updateSellerTheme(sellerId, UpdateSellerThemeDto)

Atualizar o tema do estabelecimento

### Example

```javascript
import ParcelaExpressApi from 'parcela_express_api';
let defaultClient = ParcelaExpressApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new ParcelaExpressApi.SellersApi();
let sellerId = "sellerId_example"; // String | 
let UpdateSellerThemeDto = new ParcelaExpressApi.UpdateSellerThemeDto(); // UpdateSellerThemeDto | 
apiInstance.updateSellerTheme(sellerId, UpdateSellerThemeDto, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sellerId** | **String**|  | 
 **UpdateSellerThemeDto** | [**UpdateSellerThemeDto**](UpdateSellerThemeDto.md)|  | 

### Return type

null (empty response body)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: Not defined


## updateSellerUser

> GetSellerUserDto updateSellerUser(sellerId, userId, UpdateSellerUserDto)

Atualizar um usuário do estabelecimento

### Example

```javascript
import ParcelaExpressApi from 'parcela_express_api';
let defaultClient = ParcelaExpressApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new ParcelaExpressApi.SellersApi();
let sellerId = "sellerId_example"; // String | 
let userId = "userId_example"; // String | 
let UpdateSellerUserDto = new ParcelaExpressApi.UpdateSellerUserDto(); // UpdateSellerUserDto | 
apiInstance.updateSellerUser(sellerId, userId, UpdateSellerUserDto, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sellerId** | **String**|  | 
 **userId** | **String**|  | 
 **UpdateSellerUserDto** | [**UpdateSellerUserDto**](UpdateSellerUserDto.md)|  | 

### Return type

[**GetSellerUserDto**](GetSellerUserDto.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## uploadSellerLogo

> GetLogoDto uploadSellerLogo(sellerId, file)

Realizar upload da logo do estabelecimento

### Example

```javascript
import ParcelaExpressApi from 'parcela_express_api';
let defaultClient = ParcelaExpressApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new ParcelaExpressApi.SellersApi();
let sellerId = "sellerId_example"; // String | 
let file = "/path/to/file"; // File | 
apiInstance.uploadSellerLogo(sellerId, file, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sellerId** | **String**|  | 
 **file** | **File**|  | 

### Return type

[**GetLogoDto**](GetLogoDto.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: multipart/form-data
- **Accept**: application/json

