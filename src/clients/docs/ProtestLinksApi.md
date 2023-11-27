# ParcelaExpressApi.ProtestLinksApi

All URIs are relative to */*

Method | HTTP request | Description
------------- | ------------- | -------------
[**cancelProtestLink**](ProtestLinksApi.md#cancelProtestLink) | **POST** /v1/protest-links/sellers/{sellerId}/{protestLinkId}/cancel | Cancelar um link de protesto
[**createProtestLink**](ProtestLinksApi.md#createProtestLink) | **POST** /v1/protest-links | Gerar link de protesto para o pagador de um estabelecimento
[**getProtestLinkByToken**](ProtestLinksApi.md#getProtestLinkByToken) | **GET** /v1/protest-links/{token} | Retornar os dados do link de protesto informado
[**sentProtestLinkReceiptMail**](ProtestLinksApi.md#sentProtestLinkReceiptMail) | **POST** /v1/protest-links/{token}/receipt | Reenviar recibo para o email do pagador
[**updateProtestLink**](ProtestLinksApi.md#updateProtestLink) | **PATCH** /v1/protest-links/{protestLinkId}/update | Atualizar um link de protesto

<a name="cancelProtestLink"></a>
# **cancelProtestLink**
> cancelProtestLink(sellerId, protestLinkId)

Cancelar um link de protesto

### Example
```javascript
import {ParcelaExpressApi} from 'parcela_express_api';

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
 - **Accept**: application/json

<a name="createProtestLink"></a>
# **createProtestLink**
> GetProtestLinkDto createProtestLink(body)

Gerar link de protesto para o pagador de um estabelecimento

### Example
```javascript
import {ParcelaExpressApi} from 'parcela_express_api';
let defaultClient = ParcelaExpressApi.ApiClient.instance;


let apiInstance = new ParcelaExpressApi.ProtestLinksApi();
let body = new ParcelaExpressApi.CreateProtestLinkDto(); // CreateProtestLinkDto | 

apiInstance.createProtestLink(body, (error, data, response) => {
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
 **body** | [**CreateProtestLinkDto**](CreateProtestLinkDto.md)|  | 

### Return type

[**GetProtestLinkDto**](GetProtestLinkDto.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getProtestLinkByToken"></a>
# **getProtestLinkByToken**
> GetProtestLinkDto getProtestLinkByToken(token)

Retornar os dados do link de protesto informado

### Example
```javascript
import {ParcelaExpressApi} from 'parcela_express_api';

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

<a name="sentProtestLinkReceiptMail"></a>
# **sentProtestLinkReceiptMail**
> sentProtestLinkReceiptMail(token)

Reenviar recibo para o email do pagador

### Example
```javascript
import {ParcelaExpressApi} from 'parcela_express_api';

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
 - **Accept**: application/json

<a name="updateProtestLink"></a>
# **updateProtestLink**
> GetProtestLinkDto updateProtestLink(body, protestLinkId)

Atualizar um link de protesto

### Example
```javascript
import {ParcelaExpressApi} from 'parcela_express_api';
let defaultClient = ParcelaExpressApi.ApiClient.instance;


let apiInstance = new ParcelaExpressApi.ProtestLinksApi();
let body = new ParcelaExpressApi.UpdateProtestLinkDto(); // UpdateProtestLinkDto | 
let protestLinkId = "protestLinkId_example"; // String | 

apiInstance.updateProtestLink(body, protestLinkId, (error, data, response) => {
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
 **body** | [**UpdateProtestLinkDto**](UpdateProtestLinkDto.md)|  | 
 **protestLinkId** | **String**|  | 

### Return type

[**GetProtestLinkDto**](GetProtestLinkDto.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

