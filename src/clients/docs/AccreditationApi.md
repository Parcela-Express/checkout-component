# ParcelaExpressApi.AccreditationApi

All URIs are relative to */*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createAccreditation**](AccreditationApi.md#createAccreditation) | **POST** /v1/accreditations/{seller_id} | Iniciar rotina de credenciamento.

<a name="createAccreditation"></a>
# **createAccreditation**
> Object createAccreditation(sellerId)

Iniciar rotina de credenciamento.

### Example
```javascript
import {ParcelaExpressApi} from 'parcela_express_api';
let defaultClient = ParcelaExpressApi.ApiClient.instance;


let apiInstance = new ParcelaExpressApi.AccreditationApi();
let sellerId = "sellerId_example"; // String | 

apiInstance.createAccreditation(sellerId, (error, data, response) => {
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

**Object**

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

