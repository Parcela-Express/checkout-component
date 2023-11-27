# ParcelaExpressApi.ResponsibleApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createResponsible**](ResponsibleApi.md#createResponsible) | **POST** /v1/responsible | Criar um responsável
[**editResponsible**](ResponsibleApi.md#editResponsible) | **PATCH** /v1/responsible/{responsibleId} | Editar responsável
[**getResponsible**](ResponsibleApi.md#getResponsible) | **GET** /v1/responsible/{responsibleId} | Obter responsável pelo ID
[**listResponsible**](ResponsibleApi.md#listResponsible) | **GET** /v1/responsible/list | Listar responsáveis



## createResponsible

> GetResponsibleDto createResponsible(CreateResponsibleDto)

Criar um responsável

### Example

```javascript
import ParcelaExpressApi from 'parcela_express_api';
let defaultClient = ParcelaExpressApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new ParcelaExpressApi.ResponsibleApi();
let CreateResponsibleDto = new ParcelaExpressApi.CreateResponsibleDto(); // CreateResponsibleDto | 
apiInstance.createResponsible(CreateResponsibleDto, (error, data, response) => {
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
 **CreateResponsibleDto** | [**CreateResponsibleDto**](CreateResponsibleDto.md)|  | 

### Return type

[**GetResponsibleDto**](GetResponsibleDto.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## editResponsible

> GetResponsibleDto editResponsible(responsibleId, UpdateResponsibleDto)

Editar responsável

### Example

```javascript
import ParcelaExpressApi from 'parcela_express_api';
let defaultClient = ParcelaExpressApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new ParcelaExpressApi.ResponsibleApi();
let responsibleId = "responsibleId_example"; // String | 
let UpdateResponsibleDto = new ParcelaExpressApi.UpdateResponsibleDto(); // UpdateResponsibleDto | 
apiInstance.editResponsible(responsibleId, UpdateResponsibleDto, (error, data, response) => {
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
 **UpdateResponsibleDto** | [**UpdateResponsibleDto**](UpdateResponsibleDto.md)|  | 

### Return type

[**GetResponsibleDto**](GetResponsibleDto.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## getResponsible

> GetResponsibleDto getResponsible(responsibleId)

Obter responsável pelo ID

### Example

```javascript
import ParcelaExpressApi from 'parcela_express_api';
let defaultClient = ParcelaExpressApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new ParcelaExpressApi.ResponsibleApi();
let responsibleId = "responsibleId_example"; // String | 
apiInstance.getResponsible(responsibleId, (error, data, response) => {
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

[**GetResponsibleDto**](GetResponsibleDto.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listResponsible

> [GetResponsibleDto] listResponsible(opts)

Listar responsáveis

### Example

```javascript
import ParcelaExpressApi from 'parcela_express_api';
let defaultClient = ParcelaExpressApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new ParcelaExpressApi.ResponsibleApi();
let opts = {
  'type': "type_example", // String | 
  'is_active': true // Boolean | 
};
apiInstance.listResponsible(opts, (error, data, response) => {
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
 **type** | **String**|  | [optional] 
 **is_active** | **Boolean**|  | [optional] 

### Return type

[**[GetResponsibleDto]**](GetResponsibleDto.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

