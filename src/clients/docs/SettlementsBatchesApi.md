# ParcelaExpressApi.SettlementsBatchesApi

All URIs are relative to *http://localhost*

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



## concilExportRequest

> GetFileExportRequestDto concilExportRequest(CreateExportSettlementListDto)

Gerar uma requisição de exportação das vendas dos históricos de liquidações para conciliação

### Example

```javascript
import ParcelaExpressApi from 'parcela_express_api';
let defaultClient = ParcelaExpressApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new ParcelaExpressApi.SettlementsBatchesApi();
let CreateExportSettlementListDto = new ParcelaExpressApi.CreateExportSettlementListDto(); // CreateExportSettlementListDto | 
apiInstance.concilExportRequest(CreateExportSettlementListDto, (error, data, response) => {
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
 **CreateExportSettlementListDto** | [**CreateExportSettlementListDto**](CreateExportSettlementListDto.md)|  | 

### Return type

[**GetFileExportRequestDto**](GetFileExportRequestDto.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## createSettlementBatchListExportRequest

> GetFileExportRequestDto createSettlementBatchListExportRequest(CreateExportSettlementListDto)

Gerar uma requisição de exportação dos históricos de liquidação

### Example

```javascript
import ParcelaExpressApi from 'parcela_express_api';
let defaultClient = ParcelaExpressApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new ParcelaExpressApi.SettlementsBatchesApi();
let CreateExportSettlementListDto = new ParcelaExpressApi.CreateExportSettlementListDto(); // CreateExportSettlementListDto | 
apiInstance.createSettlementBatchListExportRequest(CreateExportSettlementListDto, (error, data, response) => {
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
 **CreateExportSettlementListDto** | [**CreateExportSettlementListDto**](CreateExportSettlementListDto.md)|  | 

### Return type

[**GetFileExportRequestDto**](GetFileExportRequestDto.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## createSettlementBatchSalesExportRequest

> GetFileExportRequestDto createSettlementBatchSalesExportRequest(settlement_batch_id, CreateExportSettlementBatchSalesListDto)

Gerar uma requisição de exportação da lista das vendas de um lote de liquidação

### Example

```javascript
import ParcelaExpressApi from 'parcela_express_api';
let defaultClient = ParcelaExpressApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new ParcelaExpressApi.SettlementsBatchesApi();
let settlement_batch_id = "settlement_batch_id_example"; // String | 
let CreateExportSettlementBatchSalesListDto = new ParcelaExpressApi.CreateExportSettlementBatchSalesListDto(); // CreateExportSettlementBatchSalesListDto | 
apiInstance.createSettlementBatchSalesExportRequest(settlement_batch_id, CreateExportSettlementBatchSalesListDto, (error, data, response) => {
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
 **settlement_batch_id** | **String**|  | 
 **CreateExportSettlementBatchSalesListDto** | [**CreateExportSettlementBatchSalesListDto**](CreateExportSettlementBatchSalesListDto.md)|  | 

### Return type

[**GetFileExportRequestDto**](GetFileExportRequestDto.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## createTransactionsListExportRequest

> GetFileExportRequestDto createTransactionsListExportRequest(CreateExportSettlementListDto)

Gerar uma requisição de exportação das vendas dos históricos de liquidações

### Example

```javascript
import ParcelaExpressApi from 'parcela_express_api';
let defaultClient = ParcelaExpressApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new ParcelaExpressApi.SettlementsBatchesApi();
let CreateExportSettlementListDto = new ParcelaExpressApi.CreateExportSettlementListDto(); // CreateExportSettlementListDto | 
apiInstance.createTransactionsListExportRequest(CreateExportSettlementListDto, (error, data, response) => {
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
 **CreateExportSettlementListDto** | [**CreateExportSettlementListDto**](CreateExportSettlementListDto.md)|  | 

### Return type

[**GetFileExportRequestDto**](GetFileExportRequestDto.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## listAllSettlement

> PaginatedDto listAllSettlement(opts)

Listar liquidações

### Example

```javascript
import ParcelaExpressApi from 'parcela_express_api';
let defaultClient = ParcelaExpressApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new ParcelaExpressApi.SettlementsBatchesApi();
let opts = {
  'startDate': "startDate_example", // String | Formato: yyyy-mm-dd
  'endDate': "endDate_example", // String | Formato: yyyy-mm-dd
  'id': "id_example", // String | 
  'status': "status_example", // String | 
  'sellerId': "sellerId_example", // String | 
  'type': "type_example", // String | 
  'limit': 3.4, // Number | 
  'current_page': 3.4, // Number | 
  'order_by_field': "order_by_field_example", // String | 
  'order_by_value': "order_by_value_example" // String | 
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
 **current_page** | **Number**|  | [optional] 
 **order_by_field** | **String**|  | [optional] 
 **order_by_value** | **String**|  | [optional] 

### Return type

[**PaginatedDto**](PaginatedDto.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listAllSettlementDetailed

> PaginatedDto listAllSettlementDetailed(opts)

Listar todas as liquidações detalhadas

### Example

```javascript
import ParcelaExpressApi from 'parcela_express_api';
let defaultClient = ParcelaExpressApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new ParcelaExpressApi.SettlementsBatchesApi();
let opts = {
  'startDate': "startDate_example", // String | Formato: yyyy-mm-dd
  'endDate': "endDate_example", // String | Formato: yyyy-mm-dd
  'id': "id_example", // String | 
  'status': "status_example", // String | 
  'type': "type_example", // String | 
  'limit': 3.4, // Number | 
  'current_page': 3.4, // Number | 
  'order_by_field': "order_by_field_example", // String | 
  'order_by_value': "order_by_value_example" // String | 
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
 **current_page** | **Number**|  | [optional] 
 **order_by_field** | **String**|  | [optional] 
 **order_by_value** | **String**|  | [optional] 

### Return type

[**PaginatedDto**](PaginatedDto.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listSellerSettlement

> PaginatedDto listSellerSettlement(sellerId, opts)

Listar liquidações separadas por seller

### Example

```javascript
import ParcelaExpressApi from 'parcela_express_api';
let defaultClient = ParcelaExpressApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new ParcelaExpressApi.SettlementsBatchesApi();
let sellerId = "sellerId_example"; // String | 
let opts = {
  'startDate': "startDate_example", // String | Formato: yyyy-mm-dd
  'endDate': "endDate_example", // String | Formato: yyyy-mm-dd
  'id': "id_example", // String | 
  'status': "status_example", // String | 
  'type': "type_example", // String | 
  'limit': 3.4, // Number | 
  'current_page': 3.4, // Number | 
  'order_by_field': "order_by_field_example", // String | 
  'order_by_value': "order_by_value_example" // String | 
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
 **current_page** | **Number**|  | [optional] 
 **order_by_field** | **String**|  | [optional] 
 **order_by_value** | **String**|  | [optional] 

### Return type

[**PaginatedDto**](PaginatedDto.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## noPaginatedListAllSettlementDetailedWith

> PaginatedDto noPaginatedListAllSettlementDetailedWith(opts)

Listar todas as liquidações detalhadas sem paginação

### Example

```javascript
import ParcelaExpressApi from 'parcela_express_api';
let defaultClient = ParcelaExpressApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new ParcelaExpressApi.SettlementsBatchesApi();
let opts = {
  'startDate': "startDate_example", // String | Formato: yyyy-mm-dd
  'endDate': "endDate_example", // String | Formato: yyyy-mm-dd
  'id': "id_example", // String | 
  'status': "status_example", // String | 
  'type': "type_example", // String | 
  'limit': 3.4, // Number | 
  'current_page': 3.4, // Number | 
  'order_by_field': "order_by_field_example", // String | 
  'order_by_value': "order_by_value_example", // String | 
  'sellerId': "sellerId_example", // String | 
  'merchant_id': "merchant_id_example" // String | 
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
 **current_page** | **Number**|  | [optional] 
 **order_by_field** | **String**|  | [optional] 
 **order_by_value** | **String**|  | [optional] 
 **sellerId** | **String**|  | [optional] 
 **merchant_id** | **String**|  | [optional] 

### Return type

[**PaginatedDto**](PaginatedDto.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## settlementBatchControllerGetSettlementBatch

> GetSettlementResponseDto settlementBatchControllerGetSettlementBatch(limit, current_page, settlement_batch_id, opts)

Listar detalhes de liquidação

### Example

```javascript
import ParcelaExpressApi from 'parcela_express_api';
let defaultClient = ParcelaExpressApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new ParcelaExpressApi.SettlementsBatchesApi();
let limit = 10; // Number | 
let current_page = 1; // Number | 
let settlement_batch_id = "settlement_batch_id_example"; // String | 
let opts = {
  'startDate': "startDate_example", // String | Formato: yyyy-mm-dd
  'endDate': "endDate_example", // String | Formato: yyyy-mm-dd
  'sort': "'time-descending'", // String | 
  'settlement_status': ["null"], // [String] | 
  'description': "description_example", // String | 
  'amount': 3.4, // Number | 
  'original_amount': 3.4, // Number | 
  'type': ["null"], // [String] | 
  'name': "name_example", // String | 
  'form_payment': ["null"] // [String] | 
};
apiInstance.settlementBatchControllerGetSettlementBatch(limit, current_page, settlement_batch_id, opts, (error, data, response) => {
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
 **settlement_batch_id** | **String**|  | 
 **startDate** | **String**| Formato: yyyy-mm-dd | [optional] 
 **endDate** | **String**| Formato: yyyy-mm-dd | [optional] 
 **sort** | **String**|  | [optional] [default to &#39;time-descending&#39;]
 **settlement_status** | [**[String]**](String.md)|  | [optional] 
 **description** | **String**|  | [optional] 
 **amount** | **Number**|  | [optional] 
 **original_amount** | **Number**|  | [optional] 
 **type** | [**[String]**](String.md)|  | [optional] 
 **name** | **String**|  | [optional] 
 **form_payment** | [**[String]**](String.md)|  | [optional] 

### Return type

[**GetSettlementResponseDto**](GetSettlementResponseDto.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## settlementBatchControllerUpdateSettlementBatch

> SettlementBatch settlementBatchControllerUpdateSettlementBatch(settlement_batch_id, UpdateSettlementBatchDTO)

Atualizar lote de liquidação

### Example

```javascript
import ParcelaExpressApi from 'parcela_express_api';
let defaultClient = ParcelaExpressApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new ParcelaExpressApi.SettlementsBatchesApi();
let settlement_batch_id = "settlement_batch_id_example"; // String | 
let UpdateSettlementBatchDTO = new ParcelaExpressApi.UpdateSettlementBatchDTO(); // UpdateSettlementBatchDTO | 
apiInstance.settlementBatchControllerUpdateSettlementBatch(settlement_batch_id, UpdateSettlementBatchDTO, (error, data, response) => {
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
 **settlement_batch_id** | **String**|  | 
 **UpdateSettlementBatchDTO** | [**UpdateSettlementBatchDTO**](UpdateSettlementBatchDTO.md)|  | 

### Return type

[**SettlementBatch**](SettlementBatch.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

