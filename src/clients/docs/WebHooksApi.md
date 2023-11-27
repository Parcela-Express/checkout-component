# ParcelaExpressApi.WebHooksApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createWebHookSellerLink**](WebHooksApi.md#createWebHookSellerLink) | **POST** /v1/sellers/{sellerId}/webhooks | Criar um link de webhook para um seller
[**deleteWebHookUrl**](WebHooksApi.md#deleteWebHookUrl) | **DELETE** /v1/sellers/{sellerId}/webhooks/{urlId} | Deletar url específica
[**listUrlsBySeller**](WebHooksApi.md#listUrlsBySeller) | **GET** /v1/sellers/{sellerId}/webhooks | Listar urls por seller



## createWebHookSellerLink

> CreateWebHookLinkResponseDto createWebHookSellerLink(sellerId, CreateWebHookLinkDto)

Criar um link de webhook para um seller

### Example

```javascript
import ParcelaExpressApi from 'parcela_express_api';
let defaultClient = ParcelaExpressApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new ParcelaExpressApi.WebHooksApi();
let sellerId = "sellerId_example"; // String | 
let CreateWebHookLinkDto = new ParcelaExpressApi.CreateWebHookLinkDto(); // CreateWebHookLinkDto | 
apiInstance.createWebHookSellerLink(sellerId, CreateWebHookLinkDto, (error, data, response) => {
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
 **CreateWebHookLinkDto** | [**CreateWebHookLinkDto**](CreateWebHookLinkDto.md)|  | 

### Return type

[**CreateWebHookLinkResponseDto**](CreateWebHookLinkResponseDto.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteWebHookUrl

> deleteWebHookUrl(urlId, sellerId)

Deletar url específica

### Example

```javascript
import ParcelaExpressApi from 'parcela_express_api';
let defaultClient = ParcelaExpressApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

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


## listUrlsBySeller

> [ListWebHookLinkResponseDto] listUrlsBySeller(sellerId)

Listar urls por seller

### Example

```javascript
import ParcelaExpressApi from 'parcela_express_api';
let defaultClient = ParcelaExpressApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

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

