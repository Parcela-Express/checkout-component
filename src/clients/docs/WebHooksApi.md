# ParcelaExpressApi.WebHooksApi

All URIs are relative to */*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createWebHookSellerLink**](WebHooksApi.md#createWebHookSellerLink) | **POST** /v1/sellers/{sellerId}/webhooks | Criar um link de webhook para um seller
[**deleteWebHookUrl**](WebHooksApi.md#deleteWebHookUrl) | **DELETE** /v1/sellers/{sellerId}/webhooks/{urlId} | Deletar url específica
[**listUrlsBySeller**](WebHooksApi.md#listUrlsBySeller) | **GET** /v1/sellers/{sellerId}/webhooks | Listar urls por seller

<a name="createWebHookSellerLink"></a>
# **createWebHookSellerLink**
> CreateWebHookLinkResponseDto createWebHookSellerLink(body, sellerId)

Criar um link de webhook para um seller

### Example
```javascript
import {ParcelaExpressApi} from 'parcela_express_api';
let defaultClient = ParcelaExpressApi.ApiClient.instance;


let apiInstance = new ParcelaExpressApi.WebHooksApi();
let body = new ParcelaExpressApi.CreateWebHookLinkDto(); // CreateWebHookLinkDto | 
let sellerId = "sellerId_example"; // String | 

apiInstance.createWebHookSellerLink(body, sellerId, (error, data, response) => {
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
 **body** | [**CreateWebHookLinkDto**](CreateWebHookLinkDto.md)|  | 
 **sellerId** | **String**|  | 

### Return type

[**CreateWebHookLinkResponseDto**](CreateWebHookLinkResponseDto.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteWebHookUrl"></a>
# **deleteWebHookUrl**
> deleteWebHookUrl(urlId, sellerId)

Deletar url específica

### Example
```javascript
import {ParcelaExpressApi} from 'parcela_express_api';
let defaultClient = ParcelaExpressApi.ApiClient.instance;


let apiInstance = new ParcelaExpressApi.WebHooksApi();
let urlId = "urlId_example"; // String | 
let sellerId = "sellerId_example"; // String | 

apiInstance.deleteWebHookUrl(urlId, sellerId, (error, data, response) => {
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
 **urlId** | **String**|  | 
 **sellerId** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="listUrlsBySeller"></a>
# **listUrlsBySeller**
> [ListWebHookLinkResponseDto] listUrlsBySeller(sellerId)

Listar urls por seller

### Example
```javascript
import {ParcelaExpressApi} from 'parcela_express_api';
let defaultClient = ParcelaExpressApi.ApiClient.instance;


let apiInstance = new ParcelaExpressApi.WebHooksApi();
let sellerId = "sellerId_example"; // String | 

apiInstance.listUrlsBySeller(sellerId, (error, data, response) => {
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

[**[ListWebHookLinkResponseDto]**](ListWebHookLinkResponseDto.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

