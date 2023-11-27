# ParcelaExpressApi.SettlementsBatchesApi

All URIs are relative to */*

Method | HTTP request | Description
------------- | ------------- | -------------
[**concilExportRequest**](SettlementsBatchesApi.md#concilExportRequest) | **POST** /v1/settlement/list/transactions/concil/export/requests | Gerar uma requisição de exportação das vendas dos históricos de liquidações para conciliação
[**createSettlementBatchListExportRequest**](SettlementsBatchesApi.md#createSettlementBatchListExportRequest) | **POST** /v1/settlement/list/export/requests | Gerar uma requisição de exportação dos históricos de liquidação
[**createSettlementBatchSalesExportRequest**](SettlementsBatchesApi.md#createSettlementBatchSalesExportRequest) | **POST** /v1/settlement/{settlement_batch_id}/list/export/requests | Gerar uma requisição de exportação da lista das vendas de um lote de liquidação
[**createTransactionsListExportRequest**](SettlementsBatchesApi.md#createTransactionsListExportRequest) | **POST** /v1/settlement/list/transactions/export/requests | Gerar uma requisição de exportação das vendas dos históricos de liquidações
[**listAllSettlement**](SettlementsBatchesApi.md#listAllSettlement) | **GET** /v1/settlement | Listar liquidações
[**listAllSettlementDetailed**](SettlementsBatchesApi.md#listAllSettlementDetailed) | **GET** /v1/settlement/list | Listar todas as liquidações detalhadas
[**listSellerSettlement**](SettlementsBatchesApi.md#listSellerSettlement) | **GET** /v1/settlement/{sellerId}/list | Listar liquidações separadas por seller
[**noPaginatedListAllSettlementDetailedWith**](SettlementsBatchesApi.md#noPaginatedListAllSettlementDetailedWith) | **GET** /v1/settlement/unpaginatedList | Listar todas as liquidações detalhadas sem paginação
[**settlementBatchControllerGetSettlementBatch**](SettlementsBatchesApi.md#settlementBatchControllerGetSettlementBatch) | **GET** /v1/settlement/{settlement_batch_id} | Listar detalhes de liquidação
[**settlementBatchControllerUpdateSettlementBatch**](SettlementsBatchesApi.md#settlementBatchControllerUpdateSettlementBatch) | **PATCH** /v1/settlement/{settlement_batch_id} | Atualizar lote de liquidação

<a name="concilExportRequest"></a>
# **concilExportRequest**
> GetFileExportRequestDto concilExportRequest(body)

Gerar uma requisição de exportação das vendas dos históricos de liquidações para conciliação

### Example
```javascript
import {ParcelaExpressApi} from 'parcela_express_api';
let defaultClient = ParcelaExpressApi.ApiClient.instance;


let apiInstance = new ParcelaExpressApi.SettlementsBatchesApi();
let body = new ParcelaExpressApi.CreateExportSettlementListDto(); // CreateExportSettlementListDto | 

apiInstance.concilExportRequest(body, (error, data, response) => {
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
 **body** | [**CreateExportSettlementListDto**](CreateExportSettlementListDto.md)|  | 

### Return type

[**GetFileExportRequestDto**](GetFileExportRequestDto.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="createSettlementBatchListExportRequest"></a>
# **createSettlementBatchListExportRequest**
> GetFileExportRequestDto createSettlementBatchListExportRequest(body)

Gerar uma requisição de exportação dos históricos de liquidação

### Example
```javascript
import {ParcelaExpressApi} from 'parcela_express_api';
let defaultClient = ParcelaExpressApi.ApiClient.instance;


let apiInstance = new ParcelaExpressApi.SettlementsBatchesApi();
let body = new ParcelaExpressApi.CreateExportSettlementListDto(); // CreateExportSettlementListDto | 

apiInstance.createSettlementBatchListExportRequest(body, (error, data, response) => {
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
 **body** | [**CreateExportSettlementListDto**](CreateExportSettlementListDto.md)|  | 

### Return type

[**GetFileExportRequestDto**](GetFileExportRequestDto.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="createSettlementBatchSalesExportRequest"></a>
# **createSettlementBatchSalesExportRequest**
> GetFileExportRequestDto createSettlementBatchSalesExportRequest(body, settlementBatchId)

Gerar uma requisição de exportação da lista das vendas de um lote de liquidação

### Example
```javascript
import {ParcelaExpressApi} from 'parcela_express_api';
let defaultClient = ParcelaExpressApi.ApiClient.instance;


let apiInstance = new ParcelaExpressApi.SettlementsBatchesApi();
let body = new ParcelaExpressApi.CreateExportSettlementBatchSalesListDto(); // CreateExportSettlementBatchSalesListDto | 
let settlementBatchId = "settlementBatchId_example"; // String | 

apiInstance.createSettlementBatchSalesExportRequest(body, settlementBatchId, (error, data, response) => {
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
 **body** | [**CreateExportSettlementBatchSalesListDto**](CreateExportSettlementBatchSalesListDto.md)|  | 
 **settlementBatchId** | **String**|  | 

### Return type

[**GetFileExportRequestDto**](GetFileExportRequestDto.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="createTransactionsListExportRequest"></a>
# **createTransactionsListExportRequest**
> GetFileExportRequestDto createTransactionsListExportRequest(body)

Gerar uma requisição de exportação das vendas dos históricos de liquidações

### Example
```javascript
import {ParcelaExpressApi} from 'parcela_express_api';
let defaultClient = ParcelaExpressApi.ApiClient.instance;


let apiInstance = new ParcelaExpressApi.SettlementsBatchesApi();
let body = new ParcelaExpressApi.CreateExportSettlementListDto(); // CreateExportSettlementListDto | 

apiInstance.createTransactionsListExportRequest(body, (error, data, response) => {
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
 **body** | [**CreateExportSettlementListDto**](CreateExportSettlementListDto.md)|  | 

### Return type

[**GetFileExportRequestDto**](GetFileExportRequestDto.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="listAllSettlement"></a>
# **listAllSettlement**
> InlineResponse200 listAllSettlement(opts)

Listar liquidações

### Example
```javascript
import {ParcelaExpressApi} from 'parcela_express_api';
let defaultClient = ParcelaExpressApi.ApiClient.instance;


let apiInstance = new ParcelaExpressApi.SettlementsBatchesApi();
let opts = { 
  'startDate': "startDate_example", // String | Formato: yyyy-mm-dd
  'endDate': "endDate_example", // String | Formato: yyyy-mm-dd
  'id': "id_example", // String | 
  'status': "status_example", // String | 
  'sellerId': "sellerId_example", // String | 
  'type': "type_example", // String | 
  'limit': 1.2, // Number | 
  'currentPage': 1.2, // Number | 
  'orderByField': "orderByField_example", // String | 
  'orderByValue': "orderByValue_example" // String | 
};
apiInstance.listAllSettlement(opts, (error, data, response) => {
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
 **startDate** | **String**| Formato: yyyy-mm-dd | [optional] 
 **endDate** | **String**| Formato: yyyy-mm-dd | [optional] 
 **id** | **String**|  | [optional] 
 **status** | **String**|  | [optional] 
 **sellerId** | **String**|  | [optional] 
 **type** | **String**|  | [optional] 
 **limit** | **Number**|  | [optional] 
 **currentPage** | **Number**|  | [optional] 
 **orderByField** | **String**|  | [optional] 
 **orderByValue** | **String**|  | [optional] 

### Return type

[**InlineResponse200**](InlineResponse200.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="listAllSettlementDetailed"></a>
# **listAllSettlementDetailed**
> InlineResponse200 listAllSettlementDetailed(opts)

Listar todas as liquidações detalhadas

### Example
```javascript
import {ParcelaExpressApi} from 'parcela_express_api';
let defaultClient = ParcelaExpressApi.ApiClient.instance;


let apiInstance = new ParcelaExpressApi.SettlementsBatchesApi();
let opts = { 
  'startDate': "startDate_example", // String | Formato: yyyy-mm-dd
  'endDate': "endDate_example", // String | Formato: yyyy-mm-dd
  'id': "id_example", // String | 
  'status': "status_example", // String | 
  'type': "type_example", // String | 
  'limit': 1.2, // Number | 
  'currentPage': 1.2, // Number | 
  'orderByField': "orderByField_example", // String | 
  'orderByValue': "orderByValue_example" // String | 
};
apiInstance.listAllSettlementDetailed(opts, (error, data, response) => {
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
 **startDate** | **String**| Formato: yyyy-mm-dd | [optional] 
 **endDate** | **String**| Formato: yyyy-mm-dd | [optional] 
 **id** | **String**|  | [optional] 
 **status** | **String**|  | [optional] 
 **type** | **String**|  | [optional] 
 **limit** | **Number**|  | [optional] 
 **currentPage** | **Number**|  | [optional] 
 **orderByField** | **String**|  | [optional] 
 **orderByValue** | **String**|  | [optional] 

### Return type

[**InlineResponse200**](InlineResponse200.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="listSellerSettlement"></a>
# **listSellerSettlement**
> InlineResponse200 listSellerSettlement(sellerId, opts)

Listar liquidações separadas por seller

### Example
```javascript
import {ParcelaExpressApi} from 'parcela_express_api';
let defaultClient = ParcelaExpressApi.ApiClient.instance;


let apiInstance = new ParcelaExpressApi.SettlementsBatchesApi();
let sellerId = "sellerId_example"; // String | 
let opts = { 
  'startDate': "startDate_example", // String | Formato: yyyy-mm-dd
  'endDate': "endDate_example", // String | Formato: yyyy-mm-dd
  'id': "id_example", // String | 
  'status': "status_example", // String | 
  'type': "type_example", // String | 
  'limit': 1.2, // Number | 
  'currentPage': 1.2, // Number | 
  'orderByField': "orderByField_example", // String | 
  'orderByValue': "orderByValue_example" // String | 
};
apiInstance.listSellerSettlement(sellerId, opts, (error, data, response) => {
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
 **startDate** | **String**| Formato: yyyy-mm-dd | [optional] 
 **endDate** | **String**| Formato: yyyy-mm-dd | [optional] 
 **id** | **String**|  | [optional] 
 **status** | **String**|  | [optional] 
 **type** | **String**|  | [optional] 
 **limit** | **Number**|  | [optional] 
 **currentPage** | **Number**|  | [optional] 
 **orderByField** | **String**|  | [optional] 
 **orderByValue** | **String**|  | [optional] 

### Return type

[**InlineResponse200**](InlineResponse200.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="noPaginatedListAllSettlementDetailedWith"></a>
# **noPaginatedListAllSettlementDetailedWith**
> InlineResponse200 noPaginatedListAllSettlementDetailedWith(opts)

Listar todas as liquidações detalhadas sem paginação

### Example
```javascript
import {ParcelaExpressApi} from 'parcela_express_api';
let defaultClient = ParcelaExpressApi.ApiClient.instance;


let apiInstance = new ParcelaExpressApi.SettlementsBatchesApi();
let opts = { 
  'startDate': "startDate_example", // String | Formato: yyyy-mm-dd
  'endDate': "endDate_example", // String | Formato: yyyy-mm-dd
  'id': "id_example", // String | 
  'status': "status_example", // String | 
  'type': "type_example", // String | 
  'limit': 1.2, // Number | 
  'currentPage': 1.2, // Number | 
  'orderByField': "orderByField_example", // String | 
  'orderByValue': "orderByValue_example", // String | 
  'sellerId': "sellerId_example" // String | 
};
apiInstance.noPaginatedListAllSettlementDetailedWith(opts, (error, data, response) => {
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
 **startDate** | **String**| Formato: yyyy-mm-dd | [optional] 
 **endDate** | **String**| Formato: yyyy-mm-dd | [optional] 
 **id** | **String**|  | [optional] 
 **status** | **String**|  | [optional] 
 **type** | **String**|  | [optional] 
 **limit** | **Number**|  | [optional] 
 **currentPage** | **Number**|  | [optional] 
 **orderByField** | **String**|  | [optional] 
 **orderByValue** | **String**|  | [optional] 
 **sellerId** | **String**|  | [optional] 

### Return type

[**InlineResponse200**](InlineResponse200.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="settlementBatchControllerGetSettlementBatch"></a>
# **settlementBatchControllerGetSettlementBatch**
> GetSettlementResponseDto settlementBatchControllerGetSettlementBatch(limit, currentPage, settlementBatchId, opts)

Listar detalhes de liquidação

### Example
```javascript
import {ParcelaExpressApi} from 'parcela_express_api';
let defaultClient = ParcelaExpressApi.ApiClient.instance;


let apiInstance = new ParcelaExpressApi.SettlementsBatchesApi();
let limit = 10; // Number | 
let currentPage = 1; // Number | 
let settlementBatchId = "settlementBatchId_example"; // String | 
let opts = { 
  'startDate': "startDate_example", // String | Formato: yyyy-mm-dd
  'endDate': "endDate_example", // String | Formato: yyyy-mm-dd
  'sort': "time-descending", // String | 
  'settlementStatus': ["settlementStatus_example"], // [String] | 
  'description': "description_example", // String | 
  'amount': 1.2, // Number | 
  'originalAmount': 1.2, // Number | 
  'type': ["type_example"], // [String] | 
  'name': "name_example", // String | 
  'formPayment': ["formPayment_example"] // [String] | 
};
apiInstance.settlementBatchControllerGetSettlementBatch(limit, currentPage, settlementBatchId, opts, (error, data, response) => {
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
 **settlementBatchId** | **String**|  | 
 **startDate** | **String**| Formato: yyyy-mm-dd | [optional] 
 **endDate** | **String**| Formato: yyyy-mm-dd | [optional] 
 **sort** | **String**|  | [optional] [default to time-descending]
 **settlementStatus** | [**[String]**](String.md)|  | [optional] 
 **description** | **String**|  | [optional] 
 **amount** | **Number**|  | [optional] 
 **originalAmount** | **Number**|  | [optional] 
 **type** | [**[String]**](String.md)|  | [optional] 
 **name** | **String**|  | [optional] 
 **formPayment** | [**[String]**](String.md)|  | [optional] 

### Return type

[**GetSettlementResponseDto**](GetSettlementResponseDto.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="settlementBatchControllerUpdateSettlementBatch"></a>
# **settlementBatchControllerUpdateSettlementBatch**
> Object settlementBatchControllerUpdateSettlementBatch(body, settlementBatchId)

Atualizar lote de liquidação

### Example
```javascript
import {ParcelaExpressApi} from 'parcela_express_api';
let defaultClient = ParcelaExpressApi.ApiClient.instance;


let apiInstance = new ParcelaExpressApi.SettlementsBatchesApi();
let body = new ParcelaExpressApi.UpdateSettlementBatchDTO(); // UpdateSettlementBatchDTO | 
let settlementBatchId = "settlementBatchId_example"; // String | 

apiInstance.settlementBatchControllerUpdateSettlementBatch(body, settlementBatchId, (error, data, response) => {
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
 **body** | [**UpdateSettlementBatchDTO**](UpdateSettlementBatchDTO.md)|  | 
 **settlementBatchId** | **String**|  | 

### Return type

**Object**

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

