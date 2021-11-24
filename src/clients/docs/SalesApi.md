# ParcelaExpressApi.SalesApi

All URIs are relative to */*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createSalesListExportRequest**](SalesApi.md#createSalesListExportRequest) | **POST** /v1/sales/list/export/requests | Gerar uma requisição de exportação da lista de vendas
[**getAllSalesSummary**](SalesApi.md#getAllSalesSummary) | **GET** /v1/sales/summary | Listar resumo de venda de todos Estabelecimentos
[**getAllSalesSummaryChart**](SalesApi.md#getAllSalesSummaryChart) | **GET** /v1/sales/summary-chart | Listar resumo dos ultimos 6 meses de todos Estabelecimentos
[**getSale**](SalesApi.md#getSale) | **GET** /v1/sales/{saleId} | Retornar dados de uma venda especifica
[**listSales**](SalesApi.md#listSales) | **GET** /v1/sales | Listar as vendas de todos os estabelecimentos
[**payPix**](SalesApi.md#payPix) | **POST** /v1/sales/{saleId}/pix/pay | Pagar PIX (em ambiente de desenvolvimento)

<a name="createSalesListExportRequest"></a>
# **createSalesListExportRequest**
> GetFileExportRequestDto createSalesListExportRequest(body)

Gerar uma requisição de exportação da lista de vendas

### Example
```javascript
import {ParcelaExpressApi} from 'parcela_express_api';
let defaultClient = ParcelaExpressApi.ApiClient.instance;


let apiInstance = new ParcelaExpressApi.SalesApi();
let body = new ParcelaExpressApi.CreateExportSalesListDto(); // CreateExportSalesListDto | 

apiInstance.createSalesListExportRequest(body, (error, data, response) => {
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
 **body** | [**CreateExportSalesListDto**](CreateExportSalesListDto.md)|  | 

### Return type

[**GetFileExportRequestDto**](GetFileExportRequestDto.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getAllSalesSummary"></a>
# **getAllSalesSummary**
> GetSaleSummaryDto getAllSalesSummary(opts)

Listar resumo de venda de todos Estabelecimentos

### Example
```javascript
import {ParcelaExpressApi} from 'parcela_express_api';
let defaultClient = ParcelaExpressApi.ApiClient.instance;


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

<a name="getAllSalesSummaryChart"></a>
# **getAllSalesSummaryChart**
> GetSaleSummaryChartDto getAllSalesSummaryChart()

Listar resumo dos ultimos 6 meses de todos Estabelecimentos

### Example
```javascript
import {ParcelaExpressApi} from 'parcela_express_api';
let defaultClient = ParcelaExpressApi.ApiClient.instance;


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

<a name="getSale"></a>
# **getSale**
> GetSaleDto getSale(saleId)

Retornar dados de uma venda especifica

### Example
```javascript
import {ParcelaExpressApi} from 'parcela_express_api';
let defaultClient = ParcelaExpressApi.ApiClient.instance;


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

<a name="listSales"></a>
# **listSales**
> InlineResponse200 listSales(limit, currentPage, opts)

Listar as vendas de todos os estabelecimentos

### Example
```javascript
import {ParcelaExpressApi} from 'parcela_express_api';
let defaultClient = ParcelaExpressApi.ApiClient.instance;


let apiInstance = new ParcelaExpressApi.SalesApi();
let limit = 10; // Number | 
let currentPage = 1; // Number | 
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
apiInstance.listSales(limit, currentPage, opts, (error, data, response) => {
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

<a name="payPix"></a>
# **payPix**
> payPix(saleId)

Pagar PIX (em ambiente de desenvolvimento)

### Example
```javascript
import {ParcelaExpressApi} from 'parcela_express_api';
let defaultClient = ParcelaExpressApi.ApiClient.instance;


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

