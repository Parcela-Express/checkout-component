# ParcelaExpressApi.SellersApi

All URIs are relative to */*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addAcquirer**](SellersApi.md#addAcquirer) | **POST** /v1/sellers/{sellerId}/acquirers | Associar uma adquirente a um estabelecimento
[**addSalePlan**](SellersApi.md#addSalePlan) | **POST** /v1/sellers/{sellerId}/sales-plans | Associar um plano de vendas a um estabelecimento
[**createSaleAutoGenerateLinkPayment**](SellersApi.md#createSaleAutoGenerateLinkPayment) | **POST** /v1/sellers/{sellerId}/sales/payment-link-auto | Gerar uma venda com status pendente para um estabelecimento pelo link auto gerável
[**createSeller**](SellersApi.md#createSeller) | **POST** /v1/sellers | Criar estabelecimento
[**createSellerPayer**](SellersApi.md#createSellerPayer) | **POST** /v1/sellers/{sellerId}/payers | Criar pagador do estabelecimento
[**createSellerPos**](SellersApi.md#createSellerPos) | **POST** /v1/sellers/{sellerId}/pos | Incluir um POS em um estabelecimento
[**createSellerSale**](SellersApi.md#createSellerSale) | **POST** /v1/sellers/{sellerId}/sales | Realizar venda para um estabelecimento
[**createSellerUser**](SellersApi.md#createSellerUser) | **POST** /v1/sellers/{sellerId}/users | Criar usuário do estabelecimento
[**editSeller**](SellersApi.md#editSeller) | **PUT** /v1/sellers/{sellerId} | Editar estabelecimento
[**getAcceptedPaymentMethodsBySellerId**](SellersApi.md#getAcceptedPaymentMethodsBySellerId) | **GET** /v1/sellers/{sellerId}/accepted-payment-methods | Retornar os métodos de pagamento aceito pelo estabelecimento
[**getAllSellerSalesSummaryChart**](SellersApi.md#getAllSellerSalesSummaryChart) | **GET** /v1/sellers/summary-chart/{sellerId} | Listar resumo dos ultimos 6 meses de um Estabelecimentos
[**getSeller**](SellersApi.md#getSeller) | **GET** /v1/sellers/{sellerId} | Retornar os dados do estabelecimento informado
[**getSellerByCode**](SellersApi.md#getSellerByCode) | **GET** /v1/sellers/code/{codeId} | Retornar os dados do estabelecimento informado pelo código
[**getSellerPos**](SellersApi.md#getSellerPos) | **GET** /v1/sellers/{sellerId}/pos/{sellerPosId} | Retornar os dados do POS informado
[**getSellerSale**](SellersApi.md#getSellerSale) | **GET** /v1/sellers/{sellerId}/sales/{saleId} | Retornar a venda informada
[**getSellerSaleBillet**](SellersApi.md#getSellerSaleBillet) | **GET** /v1/sellers/{sellerId}/sales/{saleId}/billets | Retornar o boleto da venda informada
[**getSellerSalesSummary**](SellersApi.md#getSellerSalesSummary) | **GET** /v1/sellers/{sellerId}/summary | Listar o resumo de todas as vendas de um estabelecimento
[**listMerchantSellers**](SellersApi.md#listMerchantSellers) | **GET** /v1/sellers/{sellerId}/list-sellers | Listar os sellers do mesmo merchant
[**listSellerAcquirers**](SellersApi.md#listSellerAcquirers) | **GET** /v1/sellers/{sellerId}/acquirers | Listar as adquirentes do estabelecimento informado
[**listSellerPaginatedPos**](SellersApi.md#listSellerPaginatedPos) | **GET** /v1/sellers/{sellerId}/paginated/pos | Listar os POS de um estabelecimento paginado
[**listSellerPayer**](SellersApi.md#listSellerPayer) | **GET** /v1/sellers/payers/{payerDocument} | Listar um pagador do estabelecimento
[**listSellerPayers**](SellersApi.md#listSellerPayers) | **GET** /v1/sellers/{sellerId}/payers | Listar pagadores do estabelecimento
[**listSellerPaymentLinks**](SellersApi.md#listSellerPaymentLinks) | **GET** /v1/sellers/{sellerId}/payment-links | Listar os links de pagamento do estabelecimento informado
[**listSellerPos**](SellersApi.md#listSellerPos) | **GET** /v1/sellers/{sellerId}/pos | Listar os POS de um estabelecimento
[**listSellerProtestLinks**](SellersApi.md#listSellerProtestLinks) | **GET** /v1/sellers/{sellerId}/protest-links | Listar os links de protesto do estabelecimento informado
[**listSellerSales**](SellersApi.md#listSellerSales) | **GET** /v1/sellers/{sellerId}/sales | Listar vendas de um estabelecimento
[**listSellerUsers**](SellersApi.md#listSellerUsers) | **GET** /v1/sellers/{sellerId}/users | Listar os usuários do estabelecimento
[**listSellers**](SellersApi.md#listSellers) | **GET** /v1/sellers | Listar estabelecimentos
[**updateSellerTheme**](SellersApi.md#updateSellerTheme) | **PUT** /v1/sellers/{sellerId}/theme | Atualizar o tema do estabelecimento
[**updateSellerUser**](SellersApi.md#updateSellerUser) | **PATCH** /v1/sellers/{sellerId}/users/{userId} | Atualizar um usuário do estabelecimento
[**uploadSellerLogo**](SellersApi.md#uploadSellerLogo) | **POST** /v1/sellers/{sellerId}/logo | Realizar upload da logo do estabelecimento

<a name="addAcquirer"></a>
# **addAcquirer**
> GetSellerDto addAcquirer(body, sellerId)

Associar uma adquirente a um estabelecimento

### Example
```javascript
import {ParcelaExpressApi} from 'parcela_express_api';
let defaultClient = ParcelaExpressApi.ApiClient.instance;


let apiInstance = new ParcelaExpressApi.SellersApi();
let body = new ParcelaExpressApi.IncludeAcquirerDto(); // IncludeAcquirerDto | 
let sellerId = "sellerId_example"; // String | 

apiInstance.addAcquirer(body, sellerId, (error, data, response) => {
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
 **body** | [**IncludeAcquirerDto**](IncludeAcquirerDto.md)|  | 
 **sellerId** | **String**|  | 

### Return type

[**GetSellerDto**](GetSellerDto.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="addSalePlan"></a>
# **addSalePlan**
> GetSellerDto addSalePlan(body, sellerId)

Associar um plano de vendas a um estabelecimento

### Example
```javascript
import {ParcelaExpressApi} from 'parcela_express_api';
let defaultClient = ParcelaExpressApi.ApiClient.instance;


let apiInstance = new ParcelaExpressApi.SellersApi();
let body = new ParcelaExpressApi.IncludeSalePlanDto(); // IncludeSalePlanDto | 
let sellerId = "sellerId_example"; // String | 

apiInstance.addSalePlan(body, sellerId, (error, data, response) => {
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
 **body** | [**IncludeSalePlanDto**](IncludeSalePlanDto.md)|  | 
 **sellerId** | **String**|  | 

### Return type

[**GetSellerDto**](GetSellerDto.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="createSaleAutoGenerateLinkPayment"></a>
# **createSaleAutoGenerateLinkPayment**
> GetSellerSaleAutoGeneratePaymentLinkDto createSaleAutoGenerateLinkPayment(body, sellerId)

Gerar uma venda com status pendente para um estabelecimento pelo link auto gerável

### Example
```javascript
import {ParcelaExpressApi} from 'parcela_express_api';

let apiInstance = new ParcelaExpressApi.SellersApi();
let body = new ParcelaExpressApi.CreateSaleAutoGeneratePaymentLinkDto(); // CreateSaleAutoGeneratePaymentLinkDto | 
let sellerId = "sellerId_example"; // String | 

apiInstance.createSaleAutoGenerateLinkPayment(body, sellerId, (error, data, response) => {
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
 **body** | [**CreateSaleAutoGeneratePaymentLinkDto**](CreateSaleAutoGeneratePaymentLinkDto.md)|  | 
 **sellerId** | **String**|  | 

### Return type

[**GetSellerSaleAutoGeneratePaymentLinkDto**](GetSellerSaleAutoGeneratePaymentLinkDto.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="createSeller"></a>
# **createSeller**
> GetSellerDto createSeller(body)

Criar estabelecimento

### Example
```javascript
import {ParcelaExpressApi} from 'parcela_express_api';
let defaultClient = ParcelaExpressApi.ApiClient.instance;


let apiInstance = new ParcelaExpressApi.SellersApi();
let body = new ParcelaExpressApi.CreateSellerDto(); // CreateSellerDto | 

apiInstance.createSeller(body, (error, data, response) => {
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
 **body** | [**CreateSellerDto**](CreateSellerDto.md)|  | 

### Return type

[**GetSellerDto**](GetSellerDto.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="createSellerPayer"></a>
# **createSellerPayer**
> CreatePayerDto createSellerPayer(body, sellerId)

Criar pagador do estabelecimento

### Example
```javascript
import {ParcelaExpressApi} from 'parcela_express_api';
let defaultClient = ParcelaExpressApi.ApiClient.instance;


let apiInstance = new ParcelaExpressApi.SellersApi();
let body = new ParcelaExpressApi.CreatePayerDto(); // CreatePayerDto | 
let sellerId = "sellerId_example"; // String | 

apiInstance.createSellerPayer(body, sellerId, (error, data, response) => {
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
 **body** | [**CreatePayerDto**](CreatePayerDto.md)|  | 
 **sellerId** | **String**|  | 

### Return type

[**CreatePayerDto**](CreatePayerDto.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="createSellerPos"></a>
# **createSellerPos**
> GetSellerPosDto createSellerPos(body, sellerId)

Incluir um POS em um estabelecimento

### Example
```javascript
import {ParcelaExpressApi} from 'parcela_express_api';
let defaultClient = ParcelaExpressApi.ApiClient.instance;


let apiInstance = new ParcelaExpressApi.SellersApi();
let body = new ParcelaExpressApi.CreateSellerPosDto(); // CreateSellerPosDto | 
let sellerId = "sellerId_example"; // String | 

apiInstance.createSellerPos(body, sellerId, (error, data, response) => {
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
 **body** | [**CreateSellerPosDto**](CreateSellerPosDto.md)|  | 
 **sellerId** | **String**|  | 

### Return type

[**GetSellerPosDto**](GetSellerPosDto.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="createSellerSale"></a>
# **createSellerSale**
> GetSellerSaleDto createSellerSale(body, sellerId)

Realizar venda para um estabelecimento

### Example
```javascript
import {ParcelaExpressApi} from 'parcela_express_api';
let defaultClient = ParcelaExpressApi.ApiClient.instance;


let apiInstance = new ParcelaExpressApi.SellersApi();
let body = new ParcelaExpressApi.CreateSaleDto(); // CreateSaleDto | 
let sellerId = "sellerId_example"; // String | 

apiInstance.createSellerSale(body, sellerId, (error, data, response) => {
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
 **body** | [**CreateSaleDto**](CreateSaleDto.md)|  | 
 **sellerId** | **String**|  | 

### Return type

[**GetSellerSaleDto**](GetSellerSaleDto.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="createSellerUser"></a>
# **createSellerUser**
> GetSellerUserDto createSellerUser(body, sellerId)

Criar usuário do estabelecimento

### Example
```javascript
import {ParcelaExpressApi} from 'parcela_express_api';
let defaultClient = ParcelaExpressApi.ApiClient.instance;


let apiInstance = new ParcelaExpressApi.SellersApi();
let body = new ParcelaExpressApi.CreateSellerUserDto(); // CreateSellerUserDto | 
let sellerId = "sellerId_example"; // String | 

apiInstance.createSellerUser(body, sellerId, (error, data, response) => {
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
 **body** | [**CreateSellerUserDto**](CreateSellerUserDto.md)|  | 
 **sellerId** | **String**|  | 

### Return type

[**GetSellerUserDto**](GetSellerUserDto.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="editSeller"></a>
# **editSeller**
> editSeller(body, sellerId)

Editar estabelecimento

### Example
```javascript
import {ParcelaExpressApi} from 'parcela_express_api';
let defaultClient = ParcelaExpressApi.ApiClient.instance;


let apiInstance = new ParcelaExpressApi.SellersApi();
let body = new ParcelaExpressApi.EditSellerDto(); // EditSellerDto | 
let sellerId = "sellerId_example"; // String | 

apiInstance.editSeller(body, sellerId, (error, data, response) => {
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
 **body** | [**EditSellerDto**](EditSellerDto.md)|  | 
 **sellerId** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

<a name="getAcceptedPaymentMethodsBySellerId"></a>
# **getAcceptedPaymentMethodsBySellerId**
> GetSellerAcceptedPaymentMethodsDto getAcceptedPaymentMethodsBySellerId(sellerId, opts)

Retornar os métodos de pagamento aceito pelo estabelecimento

### Example
```javascript
import {ParcelaExpressApi} from 'parcela_express_api';

let apiInstance = new ParcelaExpressApi.SellersApi();
let sellerId = "sellerId_example"; // String | 
let opts = { 
  'valueCents': 1.2 // Number | 
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

<a name="getAllSellerSalesSummaryChart"></a>
# **getAllSellerSalesSummaryChart**
> GetSaleSummaryChartDto getAllSellerSalesSummaryChart(sellerId)

Listar resumo dos ultimos 6 meses de um Estabelecimentos

### Example
```javascript
import {ParcelaExpressApi} from 'parcela_express_api';
let defaultClient = ParcelaExpressApi.ApiClient.instance;


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

<a name="getSeller"></a>
# **getSeller**
> GetSellerDto getSeller(sellerId)

Retornar os dados do estabelecimento informado

### Example
```javascript
import {ParcelaExpressApi} from 'parcela_express_api';
let defaultClient = ParcelaExpressApi.ApiClient.instance;


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

<a name="getSellerByCode"></a>
# **getSellerByCode**
> GetSellerDto getSellerByCode(codeId)

Retornar os dados do estabelecimento informado pelo código

### Example
```javascript
import {ParcelaExpressApi} from 'parcela_express_api';

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

<a name="getSellerPos"></a>
# **getSellerPos**
> GetSellerPosDto getSellerPos(sellerId, sellerPosId)

Retornar os dados do POS informado

### Example
```javascript
import {ParcelaExpressApi} from 'parcela_express_api';
let defaultClient = ParcelaExpressApi.ApiClient.instance;


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

<a name="getSellerSale"></a>
# **getSellerSale**
> GetSaleDto getSellerSale(sellerId, saleId)

Retornar a venda informada

### Example
```javascript
import {ParcelaExpressApi} from 'parcela_express_api';
let defaultClient = ParcelaExpressApi.ApiClient.instance;


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

<a name="getSellerSaleBillet"></a>
# **getSellerSaleBillet**
> GetBilletDto getSellerSaleBillet(sellerId, saleId)

Retornar o boleto da venda informada

### Example
```javascript
import {ParcelaExpressApi} from 'parcela_express_api';
let defaultClient = ParcelaExpressApi.ApiClient.instance;


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

<a name="getSellerSalesSummary"></a>
# **getSellerSalesSummary**
> GetSaleSummaryDto getSellerSalesSummary(sellerId, opts)

Listar o resumo de todas as vendas de um estabelecimento

### Example
```javascript
import {ParcelaExpressApi} from 'parcela_express_api';
let defaultClient = ParcelaExpressApi.ApiClient.instance;


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

<a name="listMerchantSellers"></a>
# **listMerchantSellers**
> [GetMerchantSellerDto] listMerchantSellers(sellerId, opts)

Listar os sellers do mesmo merchant

### Example
```javascript
import {ParcelaExpressApi} from 'parcela_express_api';

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

<a name="listSellerAcquirers"></a>
# **listSellerAcquirers**
> [GetAcquirerDto] listSellerAcquirers(sellerId)

Listar as adquirentes do estabelecimento informado

### Example
```javascript
import {ParcelaExpressApi} from 'parcela_express_api';
let defaultClient = ParcelaExpressApi.ApiClient.instance;


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

<a name="listSellerPaginatedPos"></a>
# **listSellerPaginatedPos**
> InlineResponse200 listSellerPaginatedPos(limit, currentPage, status, sellerId, opts)

Listar os POS de um estabelecimento paginado

### Example
```javascript
import {ParcelaExpressApi} from 'parcela_express_api';
let defaultClient = ParcelaExpressApi.ApiClient.instance;


let apiInstance = new ParcelaExpressApi.SellersApi();
let limit = 10; // Number | 
let currentPage = 1; // Number | 
let status = "status_example"; // String | 
let sellerId = "sellerId_example"; // String | 
let opts = { 
  'sort': "asc" // String | 
};
apiInstance.listSellerPaginatedPos(limit, currentPage, status, sellerId, opts, (error, data, response) => {
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
 **currentPage** | **Number**|  | [default to 1]
 **status** | **String**|  | 
 **sellerId** | **String**|  | 
 **sort** | **String**|  | [optional] [default to asc]

### Return type

[**InlineResponse200**](InlineResponse200.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="listSellerPayer"></a>
# **listSellerPayer**
> GetPayerDto listSellerPayer(payerDocument)

Listar um pagador do estabelecimento

### Example
```javascript
import {ParcelaExpressApi} from 'parcela_express_api';
let defaultClient = ParcelaExpressApi.ApiClient.instance;


let apiInstance = new ParcelaExpressApi.SellersApi();
let payerDocument = "payerDocument_example"; // String | 

apiInstance.listSellerPayer(payerDocument, (error, data, response) => {
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
 **payerDocument** | **String**|  | 

### Return type

[**GetPayerDto**](GetPayerDto.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="listSellerPayers"></a>
# **listSellerPayers**
> InlineResponse200 listSellerPayers(limit, currentPage, sellerId, opts)

Listar pagadores do estabelecimento

### Example
```javascript
import {ParcelaExpressApi} from 'parcela_express_api';
let defaultClient = ParcelaExpressApi.ApiClient.instance;


let apiInstance = new ParcelaExpressApi.SellersApi();
let limit = 10; // Number | 
let currentPage = 1; // Number | 
let sellerId = "sellerId_example"; // String | 
let opts = { 
  'sort': "time-descending", // String | 
  'name': "name_example", // String | 
  'document': "document_example" // String | 
};
apiInstance.listSellerPayers(limit, currentPage, sellerId, opts, (error, data, response) => {
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
 **currentPage** | **Number**|  | [default to 1]
 **sellerId** | **String**|  | 
 **sort** | **String**|  | [optional] [default to time-descending]
 **name** | **String**|  | [optional] 
 **document** | **String**|  | [optional] 

### Return type

[**InlineResponse200**](InlineResponse200.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="listSellerPaymentLinks"></a>
# **listSellerPaymentLinks**
> InlineResponse200 listSellerPaymentLinks(limit, currentPage, sellerId, opts)

Listar os links de pagamento do estabelecimento informado

### Example
```javascript
import {ParcelaExpressApi} from 'parcela_express_api';
let defaultClient = ParcelaExpressApi.ApiClient.instance;


let apiInstance = new ParcelaExpressApi.SellersApi();
let limit = 10; // Number | 
let currentPage = 1; // Number | 
let sellerId = "sellerId_example"; // String | 
let opts = { 
  'startDate': "startDate_example", // String | Formato: yyyy-mm-dd
  'endDate': "endDate_example", // String | Formato: yyyy-mm-dd
  'id': "id_example", // String | 
  'email': "email_example", // String | 
  'status': ["status_example"], // [String] | 
  'formPayment': ["formPayment_example"] // [String] | 
};
apiInstance.listSellerPaymentLinks(limit, currentPage, sellerId, opts, (error, data, response) => {
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
 **currentPage** | **Number**|  | [default to 1]
 **sellerId** | **String**|  | 
 **startDate** | **String**| Formato: yyyy-mm-dd | [optional] 
 **endDate** | **String**| Formato: yyyy-mm-dd | [optional] 
 **id** | **String**|  | [optional] 
 **email** | **String**|  | [optional] 
 **status** | [**[String]**](String.md)|  | [optional] 
 **formPayment** | [**[String]**](String.md)|  | [optional] 

### Return type

[**InlineResponse200**](InlineResponse200.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="listSellerPos"></a>
# **listSellerPos**
> [GetSellerPosDto] listSellerPos(sellerId)

Listar os POS de um estabelecimento

### Example
```javascript
import {ParcelaExpressApi} from 'parcela_express_api';
let defaultClient = ParcelaExpressApi.ApiClient.instance;


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

<a name="listSellerProtestLinks"></a>
# **listSellerProtestLinks**
> InlineResponse200 listSellerProtestLinks(limit, currentPage, sellerId, opts)

Listar os links de protesto do estabelecimento informado

### Example
```javascript
import {ParcelaExpressApi} from 'parcela_express_api';
let defaultClient = ParcelaExpressApi.ApiClient.instance;


let apiInstance = new ParcelaExpressApi.SellersApi();
let limit = 10; // Number | 
let currentPage = 1; // Number | 
let sellerId = "sellerId_example"; // String | 
let opts = { 
  'startDate': "startDate_example", // String | Formato: yyyy-mm-dd
  'endDate': "endDate_example", // String | Formato: yyyy-mm-dd
  'id': "id_example", // String | 
  'email': "email_example", // String | 
  'status': ["status_example"], // [String] | 
  'formPayment': ["formPayment_example"] // [String] | 
};
apiInstance.listSellerProtestLinks(limit, currentPage, sellerId, opts, (error, data, response) => {
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
 **currentPage** | **Number**|  | [default to 1]
 **sellerId** | **String**|  | 
 **startDate** | **String**| Formato: yyyy-mm-dd | [optional] 
 **endDate** | **String**| Formato: yyyy-mm-dd | [optional] 
 **id** | **String**|  | [optional] 
 **email** | **String**|  | [optional] 
 **status** | [**[String]**](String.md)|  | [optional] 
 **formPayment** | [**[String]**](String.md)|  | [optional] 

### Return type

[**InlineResponse200**](InlineResponse200.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="listSellerSales"></a>
# **listSellerSales**
> InlineResponse200 listSellerSales(limit, currentPage, sellerId, opts)

Listar vendas de um estabelecimento

### Example
```javascript
import {ParcelaExpressApi} from 'parcela_express_api';
let defaultClient = ParcelaExpressApi.ApiClient.instance;


let apiInstance = new ParcelaExpressApi.SellersApi();
let limit = 10; // Number | 
let currentPage = 1; // Number | 
let sellerId = "sellerId_example"; // String | 
let opts = { 
  'startDate': "startDate_example", // String | Formato: yyyy-mm-dd
  'endDate': "endDate_example", // String | Formato: yyyy-mm-dd
  'sort': "time-descending", // String | 
  'id': "id_example", // String | 
  'status': ["status_example"], // [String] | 
  'description': "description_example", // String | 
  'amount': 1.2, // Number | 
  'originalAmount': 1.2, // Number | 
  'type': ["type_example"], // [String] | 
  'name': "name_example", // String | 
  'user': "user_example", // String | 
  'formPayment': ["formPayment_example"], // [String] | 
  'lastNumberSales': 1.2 // Number | 
};
apiInstance.listSellerSales(limit, currentPage, sellerId, opts, (error, data, response) => {
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
 **currentPage** | **Number**|  | [default to 1]
 **sellerId** | **String**|  | 
 **startDate** | **String**| Formato: yyyy-mm-dd | [optional] 
 **endDate** | **String**| Formato: yyyy-mm-dd | [optional] 
 **sort** | **String**|  | [optional] [default to time-descending]
 **id** | **String**|  | [optional] 
 **status** | [**[String]**](String.md)|  | [optional] 
 **description** | **String**|  | [optional] 
 **amount** | **Number**|  | [optional] 
 **originalAmount** | **Number**|  | [optional] 
 **type** | [**[String]**](String.md)|  | [optional] 
 **name** | **String**|  | [optional] 
 **user** | **String**|  | [optional] 
 **formPayment** | [**[String]**](String.md)|  | [optional] 
 **lastNumberSales** | **Number**|  | [optional] 

### Return type

[**InlineResponse200**](InlineResponse200.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="listSellerUsers"></a>
# **listSellerUsers**
> InlineResponse200 listSellerUsers(limit, currentPage, sellerId, opts)

Listar os usuários do estabelecimento

### Example
```javascript
import {ParcelaExpressApi} from 'parcela_express_api';
let defaultClient = ParcelaExpressApi.ApiClient.instance;


let apiInstance = new ParcelaExpressApi.SellersApi();
let limit = 10; // Number | 
let currentPage = 1; // Number | 
let sellerId = "sellerId_example"; // String | 
let opts = { 
  'sort': "time-descending" // String | 
};
apiInstance.listSellerUsers(limit, currentPage, sellerId, opts, (error, data, response) => {
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
 **currentPage** | **Number**|  | [default to 1]
 **sellerId** | **String**|  | 
 **sort** | **String**|  | [optional] [default to time-descending]

### Return type

[**InlineResponse200**](InlineResponse200.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="listSellers"></a>
# **listSellers**
> InlineResponse200 listSellers(limit, currentPage, opts)

Listar estabelecimentos

### Example
```javascript
import {ParcelaExpressApi} from 'parcela_express_api';
let defaultClient = ParcelaExpressApi.ApiClient.instance;


let apiInstance = new ParcelaExpressApi.SellersApi();
let limit = 10; // Number | 
let currentPage = 1; // Number | 
let opts = { 
  'sort': "time-descending", // String | 
  'text': "text_example", // String | 
  'status': ["status_example"], // [String] | 
  'document': "document_example", // String | 
  'name': "name_example", // String | 
  'sellerId': "sellerId_example", // String | 
  'billetProvider': "billetProvider_example" // String | 
};
apiInstance.listSellers(limit, currentPage, opts, (error, data, response) => {
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
 **currentPage** | **Number**|  | [default to 1]
 **sort** | **String**|  | [optional] [default to time-descending]
 **text** | **String**|  | [optional] 
 **status** | [**[String]**](String.md)|  | [optional] 
 **document** | **String**|  | [optional] 
 **name** | **String**|  | [optional] 
 **sellerId** | **String**|  | [optional] 
 **billetProvider** | **String**|  | [optional] 

### Return type

[**InlineResponse200**](InlineResponse200.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="updateSellerTheme"></a>
# **updateSellerTheme**
> updateSellerTheme(body, sellerId)

Atualizar o tema do estabelecimento

### Example
```javascript
import {ParcelaExpressApi} from 'parcela_express_api';
let defaultClient = ParcelaExpressApi.ApiClient.instance;


let apiInstance = new ParcelaExpressApi.SellersApi();
let body = new ParcelaExpressApi.UpdateSellerThemeDto(); // UpdateSellerThemeDto | 
let sellerId = "sellerId_example"; // String | 

apiInstance.updateSellerTheme(body, sellerId, (error, data, response) => {
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
 **body** | [**UpdateSellerThemeDto**](UpdateSellerThemeDto.md)|  | 
 **sellerId** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

<a name="updateSellerUser"></a>
# **updateSellerUser**
> GetSellerUserDto updateSellerUser(body, sellerId, userId)

Atualizar um usuário do estabelecimento

### Example
```javascript
import {ParcelaExpressApi} from 'parcela_express_api';
let defaultClient = ParcelaExpressApi.ApiClient.instance;


let apiInstance = new ParcelaExpressApi.SellersApi();
let body = new ParcelaExpressApi.UpdateSellerUserDto(); // UpdateSellerUserDto | 
let sellerId = "sellerId_example"; // String | 
let userId = "userId_example"; // String | 

apiInstance.updateSellerUser(body, sellerId, userId, (error, data, response) => {
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
 **body** | [**UpdateSellerUserDto**](UpdateSellerUserDto.md)|  | 
 **sellerId** | **String**|  | 
 **userId** | **String**|  | 

### Return type

[**GetSellerUserDto**](GetSellerUserDto.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="uploadSellerLogo"></a>
# **uploadSellerLogo**
> GetLogoDto uploadSellerLogo(file, sellerId)

Realizar upload da logo do estabelecimento

### Example
```javascript
import {ParcelaExpressApi} from 'parcela_express_api';
let defaultClient = ParcelaExpressApi.ApiClient.instance;


let apiInstance = new ParcelaExpressApi.SellersApi();
let file = "file_example"; // Blob | 
let sellerId = "sellerId_example"; // String | 

apiInstance.uploadSellerLogo(file, sellerId, (error, data, response) => {
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
 **file** | **Blob**|  | 
 **sellerId** | **String**|  | 

### Return type

[**GetLogoDto**](GetLogoDto.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json

