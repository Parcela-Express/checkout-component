# ParcelaExpressApi.SalesApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createSalesBillPaymentListExportRequest**](SalesApi.md#createSalesBillPaymentListExportRequest) | **POST** /v1/sales/list/export/billpayment/requests | Gerar uma requisição de exportação da lista de Pagamento de Contas
[**createSalesHistoryExportRequest**](SalesApi.md#createSalesHistoryExportRequest) | **POST** /v1/sales/history/export/requests | Gerar uma requisição de exportação do histórico de vendas
[**createSalesListExportRequest**](SalesApi.md#createSalesListExportRequest) | **POST** /v1/sales/list/export/requests | Gerar uma requisição de exportação da lista de vendas
[**getAllSalesSummary**](SalesApi.md#getAllSalesSummary) | **GET** /v1/sales/summary | Listar resumo de venda de todos Estabelecimentos
[**getAllSalesSummaryChart**](SalesApi.md#getAllSalesSummaryChart) | **GET** /v1/sales/summary-chart | Listar resumo dos ultimos 6 meses de todos Estabelecimentos
[**getSale**](SalesApi.md#getSale) | **GET** /v1/sales/{saleId} | Retornar dados de uma venda especifica
[**listSales**](SalesApi.md#listSales) | **GET** /v1/sales | Listar as vendas de todos os estabelecimentos
[**payPix**](SalesApi.md#payPix) | **POST** /v1/sales/{saleId}/pix/pay | Pagar PIX (em ambiente de desenvolvimento)



## createSalesBillPaymentListExportRequest

> GetFileExportRequestDto createSalesBillPaymentListExportRequest(CreateExportSalesListDto)

Gerar uma requisição de exportação da lista de Pagamento de Contas

### Example

```javascript
import ParcelaExpressApi from 'parcela_express_api';
let defaultClient = ParcelaExpressApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new ParcelaExpressApi.SalesApi();
let CreateExportSalesListDto = new ParcelaExpressApi.CreateExportSalesListDto(); // CreateExportSalesListDto | 
apiInstance.createSalesBillPaymentListExportRequest(CreateExportSalesListDto, (error, data, response) => {
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
 **CreateExportSalesListDto** | [**CreateExportSalesListDto**](CreateExportSalesListDto.md)|  | 

### Return type

[**GetFileExportRequestDto**](GetFileExportRequestDto.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## createSalesHistoryExportRequest

> GetFileExportRequestDto createSalesHistoryExportRequest(CreateExportSalesListDto)

Gerar uma requisição de exportação do histórico de vendas

### Example

```javascript
import ParcelaExpressApi from 'parcela_express_api';
let defaultClient = ParcelaExpressApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new ParcelaExpressApi.SalesApi();
let CreateExportSalesListDto = new ParcelaExpressApi.CreateExportSalesListDto(); // CreateExportSalesListDto | 
apiInstance.createSalesHistoryExportRequest(CreateExportSalesListDto, (error, data, response) => {
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
 **CreateExportSalesListDto** | [**CreateExportSalesListDto**](CreateExportSalesListDto.md)|  | 

### Return type

[**GetFileExportRequestDto**](GetFileExportRequestDto.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## createSalesListExportRequest

> GetFileExportRequestDto createSalesListExportRequest(CreateExportSalesListDto)

Gerar uma requisição de exportação da lista de vendas

### Example

```javascript
import ParcelaExpressApi from 'parcela_express_api';
let defaultClient = ParcelaExpressApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new ParcelaExpressApi.SalesApi();
let CreateExportSalesListDto = new ParcelaExpressApi.CreateExportSalesListDto(); // CreateExportSalesListDto | 
apiInstance.createSalesListExportRequest(CreateExportSalesListDto, (error, data, response) => {
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
 **CreateExportSalesListDto** | [**CreateExportSalesListDto**](CreateExportSalesListDto.md)|  | 

### Return type

[**GetFileExportRequestDto**](GetFileExportRequestDto.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## getAllSalesSummary

> GetSaleSummaryDto getAllSalesSummary(opts)

Listar resumo de venda de todos Estabelecimentos

### Example

```javascript
import ParcelaExpressApi from 'parcela_express_api';
let defaultClient = ParcelaExpressApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new ParcelaExpressApi.SalesApi();
let opts = {
  'startDate': "startDate_example", // String | 
  'endDate': "endDate_example", // String | 
  'status': "status_example" // String | 
};
apiInstance.getAllSalesSummary(opts, (error, data, response) => {
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


## getAllSalesSummaryChart

> GetSaleSummaryChartDto getAllSalesSummaryChart()

Listar resumo dos ultimos 6 meses de todos Estabelecimentos

### Example

```javascript
import ParcelaExpressApi from 'parcela_express_api';
let defaultClient = ParcelaExpressApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new ParcelaExpressApi.SalesApi();
apiInstance.getAllSalesSummaryChart((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**GetSaleSummaryChartDto**](GetSaleSummaryChartDto.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getSale

> GetSaleDto getSale(saleId)

Retornar dados de uma venda especifica

### Example

```javascript
import ParcelaExpressApi from 'parcela_express_api';
let defaultClient = ParcelaExpressApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new ParcelaExpressApi.SalesApi();
let saleId = "saleId_example"; // String | 
apiInstance.getSale(saleId, (error, data, response) => {
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
 **saleId** | **String**|  | 

### Return type

[**GetSaleDto**](GetSaleDto.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listSales

> PaginatedDto listSales(limit, current_page, opts)

Listar as vendas de todos os estabelecimentos

### Example

```javascript
import ParcelaExpressApi from 'parcela_express_api';
let defaultClient = ParcelaExpressApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new ParcelaExpressApi.SalesApi();
let limit = 10; // Number | 
let current_page = 1; // Number | 
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
apiInstance.listSales(limit, current_page, opts, (error, data, response) => {
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


## payPix

> payPix(saleId)

Pagar PIX (em ambiente de desenvolvimento)

### Example

```javascript
import ParcelaExpressApi from 'parcela_express_api';
let defaultClient = ParcelaExpressApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new ParcelaExpressApi.SalesApi();
let saleId = "saleId_example"; // String | 
apiInstance.payPix(saleId, (error, data, response) => {
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
 **saleId** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined

