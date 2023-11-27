# ParcelaExpressApi.ProtocolApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createProtocol**](ProtocolApi.md#createProtocol) | **POST** /v1/protocol | Criar protocolo
[**createProtocolV2**](ProtocolApi.md#createProtocolV2) | **POST** /v2/protocol/seller/{sellerId} | Criar protocolo
[**createProtocolsListExportRequest**](ProtocolApi.md#createProtocolsListExportRequest) | **POST** /v1/protocol/list/export/requests | Gerar uma requisição de exportação da lista de protocolos
[**getAllProtocols**](ProtocolApi.md#getAllProtocols) | **GET** /v1/protocol | Obter todos protocolos
[**getById**](ProtocolApi.md#getById) | **GET** /v1/protocol/{id} | Obter protocolo pelo ID
[**getDueDateBySeller**](ProtocolApi.md#getDueDateBySeller) | **GET** /v1/protocol/due-date/{sellerId} | Obter data de vencimento considerando os criterios do Estabelecimento.
[**getPaginatedProtocolsBySeller**](ProtocolApi.md#getPaginatedProtocolsBySeller) | **POST** /v1/protocol/getPaginatedBySeller | Obter todos protocolos por Seller paginado
[**getPaginatedProtocolsBySellerV2**](ProtocolApi.md#getPaginatedProtocolsBySellerV2) | **POST** /v2/protocol/getPaginatedBySeller/{sellerId} | Obter todos protocolos por Seller paginado
[**updateProtocol**](ProtocolApi.md#updateProtocol) | **PUT** /v1/protocol/{id} | Atualizar protocolo



## createProtocol

> GetProtocolDto createProtocol(CreateProtocolDto)

Criar protocolo

Em alternativa a esta rota, utilize a [v2](#/Protocol/createProtocolV2)

### Example

```javascript
import ParcelaExpressApi from 'parcela_express_api';
let defaultClient = ParcelaExpressApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new ParcelaExpressApi.ProtocolApi();
let CreateProtocolDto = new ParcelaExpressApi.CreateProtocolDto(); // CreateProtocolDto | 
apiInstance.createProtocol(CreateProtocolDto, (error, data, response) => {
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
 **CreateProtocolDto** | [**CreateProtocolDto**](CreateProtocolDto.md)|  | 

### Return type

[**GetProtocolDto**](GetProtocolDto.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## createProtocolV2

> GetProtocolDto createProtocolV2(sellerId, CreateSellerProtocolDto)

Criar protocolo

### Example

```javascript
import ParcelaExpressApi from 'parcela_express_api';
let defaultClient = ParcelaExpressApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new ParcelaExpressApi.ProtocolApi();
let sellerId = "sellerId_example"; // String | 
let CreateSellerProtocolDto = new ParcelaExpressApi.CreateSellerProtocolDto(); // CreateSellerProtocolDto | 
apiInstance.createProtocolV2(sellerId, CreateSellerProtocolDto, (error, data, response) => {
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
 **CreateSellerProtocolDto** | [**CreateSellerProtocolDto**](CreateSellerProtocolDto.md)|  | 

### Return type

[**GetProtocolDto**](GetProtocolDto.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## createProtocolsListExportRequest

> Object createProtocolsListExportRequest(CreateExportProtocolListDto)

Gerar uma requisição de exportação da lista de protocolos

### Example

```javascript
import ParcelaExpressApi from 'parcela_express_api';
let defaultClient = ParcelaExpressApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new ParcelaExpressApi.ProtocolApi();
let CreateExportProtocolListDto = new ParcelaExpressApi.CreateExportProtocolListDto(); // CreateExportProtocolListDto | 
apiInstance.createProtocolsListExportRequest(CreateExportProtocolListDto, (error, data, response) => {
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
 **CreateExportProtocolListDto** | [**CreateExportProtocolListDto**](CreateExportProtocolListDto.md)|  | 

### Return type

**Object**

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## getAllProtocols

> [GetProtocolDto] getAllProtocols()

Obter todos protocolos

### Example

```javascript
import ParcelaExpressApi from 'parcela_express_api';
let defaultClient = ParcelaExpressApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new ParcelaExpressApi.ProtocolApi();
apiInstance.getAllProtocols((error, data, response) => {
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

[**[GetProtocolDto]**](GetProtocolDto.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getById

> GetProtocolDto getById(id)

Obter protocolo pelo ID

### Example

```javascript
import ParcelaExpressApi from 'parcela_express_api';
let defaultClient = ParcelaExpressApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new ParcelaExpressApi.ProtocolApi();
let id = "id_example"; // String | 
apiInstance.getById(id, (error, data, response) => {
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
 **id** | **String**|  | 

### Return type

[**GetProtocolDto**](GetProtocolDto.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getDueDateBySeller

> GetDueDateDto getDueDateBySeller(sellerId, date_start)

Obter data de vencimento considerando os criterios do Estabelecimento.

### Example

```javascript
import ParcelaExpressApi from 'parcela_express_api';
let defaultClient = ParcelaExpressApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new ParcelaExpressApi.ProtocolApi();
let sellerId = "sellerId_example"; // String | 
let date_start = "date_start_example"; // String | 
apiInstance.getDueDateBySeller(sellerId, date_start, (error, data, response) => {
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
 **date_start** | **String**|  | 

### Return type

[**GetDueDateDto**](GetDueDateDto.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getPaginatedProtocolsBySeller

> PaginatedDto getPaginatedProtocolsBySeller(GetProtocolsQueryDto)

Obter todos protocolos por Seller paginado

### Example

```javascript
import ParcelaExpressApi from 'parcela_express_api';
let defaultClient = ParcelaExpressApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new ParcelaExpressApi.ProtocolApi();
let GetProtocolsQueryDto = new ParcelaExpressApi.GetProtocolsQueryDto(); // GetProtocolsQueryDto | 
apiInstance.getPaginatedProtocolsBySeller(GetProtocolsQueryDto, (error, data, response) => {
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
 **GetProtocolsQueryDto** | [**GetProtocolsQueryDto**](GetProtocolsQueryDto.md)|  | 

### Return type

[**PaginatedDto**](PaginatedDto.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## getPaginatedProtocolsBySellerV2

> PaginatedDto getPaginatedProtocolsBySellerV2(sellerId, GetSellerProtocolsQueryDto)

Obter todos protocolos por Seller paginado

### Example

```javascript
import ParcelaExpressApi from 'parcela_express_api';
let defaultClient = ParcelaExpressApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new ParcelaExpressApi.ProtocolApi();
let sellerId = "sellerId_example"; // String | 
let GetSellerProtocolsQueryDto = new ParcelaExpressApi.GetSellerProtocolsQueryDto(); // GetSellerProtocolsQueryDto | 
apiInstance.getPaginatedProtocolsBySellerV2(sellerId, GetSellerProtocolsQueryDto, (error, data, response) => {
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
 **GetSellerProtocolsQueryDto** | [**GetSellerProtocolsQueryDto**](GetSellerProtocolsQueryDto.md)|  | 

### Return type

[**PaginatedDto**](PaginatedDto.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## updateProtocol

> updateProtocol(id, UpdateProtocolDto)

Atualizar protocolo

### Example

```javascript
import ParcelaExpressApi from 'parcela_express_api';
let defaultClient = ParcelaExpressApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new ParcelaExpressApi.ProtocolApi();
let id = "id_example"; // String | 
let UpdateProtocolDto = new ParcelaExpressApi.UpdateProtocolDto(); // UpdateProtocolDto | 
apiInstance.updateProtocol(id, UpdateProtocolDto, (error, data, response) => {
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
 **id** | **String**|  | 
 **UpdateProtocolDto** | [**UpdateProtocolDto**](UpdateProtocolDto.md)|  | 

### Return type

null (empty response body)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: Not defined

