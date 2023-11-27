# ParcelaExpressApi.ProtestLinksApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**cancelProtestLink**](ProtestLinksApi.md#cancelProtestLink) | **POST** /v1/protest-links/sellers/{sellerId}/{protestLinkId}/cancel | Cancelar um link de protesto
[**createProtestLink**](ProtestLinksApi.md#createProtestLink) | **POST** /v1/protest-links | Gerar link de protesto para o pagador de um estabelecimento
[**createProtestLinkV2**](ProtestLinksApi.md#createProtestLinkV2) | **POST** /v2/protest-links/seller/{sellerId} | Gerar link de protesto para o pagador de um estabelecimento
[**getProtestLinkByToken**](ProtestLinksApi.md#getProtestLinkByToken) | **GET** /v1/protest-links/{token} | Retornar os dados do link de protesto informado
[**sentProtestLinkReceiptMail**](ProtestLinksApi.md#sentProtestLinkReceiptMail) | **POST** /v1/protest-links/{token}/receipt | Reenviar recibo para o email do pagador
[**updateProtestLink**](ProtestLinksApi.md#updateProtestLink) | **PATCH** /v1/protest-links/{protestLinkId}/update | Atualizar um link de protesto



## cancelProtestLink

> cancelProtestLink(sellerId, protestLinkId)

Cancelar um link de protesto

### Example

```javascript
import ParcelaExpressApi from 'parcela_express_api';

let apiInstance = new ParcelaExpressApi.ProtestLinksApi();
let sellerId = "sellerId_example"; // String | 
let protestLinkId = "protestLinkId_example"; // String | 
apiInstance.cancelProtestLink(sellerId, protestLinkId, (error, data, response) => {
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
 **protestLinkId** | **String**|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## createProtestLink

> GetProtestLinkDto createProtestLink(CreateProtestLinkDto)

Gerar link de protesto para o pagador de um estabelecimento

Em alternativa a esta rota, utilize a v2.

### Example

```javascript
import ParcelaExpressApi from 'parcela_express_api';
let defaultClient = ParcelaExpressApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new ParcelaExpressApi.ProtestLinksApi();
let CreateProtestLinkDto = new ParcelaExpressApi.CreateProtestLinkDto(); // CreateProtestLinkDto | 
apiInstance.createProtestLink(CreateProtestLinkDto, (error, data, response) => {
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
 **CreateProtestLinkDto** | [**CreateProtestLinkDto**](CreateProtestLinkDto.md)|  | 

### Return type

[**GetProtestLinkDto**](GetProtestLinkDto.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## createProtestLinkV2

> GetProtestLinkDto createProtestLinkV2(sellerId, CreateSellerProtestLinkDto)

Gerar link de protesto para o pagador de um estabelecimento

### Example

```javascript
import ParcelaExpressApi from 'parcela_express_api';
let defaultClient = ParcelaExpressApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new ParcelaExpressApi.ProtestLinksApi();
let sellerId = "sellerId_example"; // String | 
let CreateSellerProtestLinkDto = new ParcelaExpressApi.CreateSellerProtestLinkDto(); // CreateSellerProtestLinkDto | 
apiInstance.createProtestLinkV2(sellerId, CreateSellerProtestLinkDto, (error, data, response) => {
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
 **CreateSellerProtestLinkDto** | [**CreateSellerProtestLinkDto**](CreateSellerProtestLinkDto.md)|  | 

### Return type

[**GetProtestLinkDto**](GetProtestLinkDto.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## getProtestLinkByToken

> GetProtestLinkDto getProtestLinkByToken(token)

Retornar os dados do link de protesto informado

### Example

```javascript
import ParcelaExpressApi from 'parcela_express_api';

let apiInstance = new ParcelaExpressApi.ProtestLinksApi();
let token = "token_example"; // String | 
apiInstance.getProtestLinkByToken(token, (error, data, response) => {
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
 **token** | **String**|  | 

### Return type

[**GetProtestLinkDto**](GetProtestLinkDto.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## sentProtestLinkReceiptMail

> sentProtestLinkReceiptMail(token)

Reenviar recibo para o email do pagador

### Example

```javascript
import ParcelaExpressApi from 'parcela_express_api';

let apiInstance = new ParcelaExpressApi.ProtestLinksApi();
let token = "token_example"; // String | 
apiInstance.sentProtestLinkReceiptMail(token, (error, data, response) => {
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
 **token** | **String**|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## updateProtestLink

> GetProtestLinkDto updateProtestLink(protestLinkId, UpdateProtestLinkDto)

Atualizar um link de protesto

### Example

```javascript
import ParcelaExpressApi from 'parcela_express_api';
let defaultClient = ParcelaExpressApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new ParcelaExpressApi.ProtestLinksApi();
let protestLinkId = "protestLinkId_example"; // String | 
let UpdateProtestLinkDto = new ParcelaExpressApi.UpdateProtestLinkDto(); // UpdateProtestLinkDto | 
apiInstance.updateProtestLink(protestLinkId, UpdateProtestLinkDto, (error, data, response) => {
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
 **protestLinkId** | **String**|  | 
 **UpdateProtestLinkDto** | [**UpdateProtestLinkDto**](UpdateProtestLinkDto.md)|  | 

### Return type

[**GetProtestLinkDto**](GetProtestLinkDto.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

