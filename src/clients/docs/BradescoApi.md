# ParcelaExpressApi.BradescoApi

All URIs are relative to */*

Method | HTTP request | Description
------------- | ------------- | -------------
[**bradescoControllerCreateShipping**](BradescoApi.md#bradescoControllerCreateShipping) | **POST** /v1/bradesco/shipping | Criar uma nova remessa
[**bradescoControllerGetValue**](BradescoApi.md#bradescoControllerGetValue) | **GET** /v1/bradesco/total/{date}/{period} | Retorna valor total separado por dia e período

<a name="bradescoControllerCreateShipping"></a>
# **bradescoControllerCreateShipping**
> bradescoControllerCreateShipping(body)

Criar uma nova remessa

### Example
```javascript
import {ParcelaExpressApi} from 'parcela_express_api';
let defaultClient = ParcelaExpressApi.ApiClient.instance;


let apiInstance = new ParcelaExpressApi.BradescoApi();
let body = new ParcelaExpressApi.GenerateShippingDTO(); // GenerateShippingDTO | 

apiInstance.bradescoControllerCreateShipping(body, (error, data, response) => {
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
 **body** | [**GenerateShippingDTO**](GenerateShippingDTO.md)|  | 

### Return type

null (empty response body)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

<a name="bradescoControllerGetValue"></a>
# **bradescoControllerGetValue**
> bradescoControllerGetValue(_date, period)

Retorna valor total separado por dia e período

### Example
```javascript
import {ParcelaExpressApi} from 'parcela_express_api';
let defaultClient = ParcelaExpressApi.ApiClient.instance;


let apiInstance = new ParcelaExpressApi.BradescoApi();
let _date = "_date_example"; // String | 
let period = "period_example"; // String | 

apiInstance.bradescoControllerGetValue(_date, period, (error, data, response) => {
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
 **_date** | **String**|  | 
 **period** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

