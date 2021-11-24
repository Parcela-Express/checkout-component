# ParcelaExpressApi.LogoApi

All URIs are relative to */*

Method | HTTP request | Description
------------- | ------------- | -------------
[**uploadMerchantLogo**](LogoApi.md#uploadMerchantLogo) | **POST** /v1/logo | Realizar upload da logo do marketplace

<a name="uploadMerchantLogo"></a>
# **uploadMerchantLogo**
> GetLogoDto uploadMerchantLogo(file)

Realizar upload da logo do marketplace

### Example
```javascript
import {ParcelaExpressApi} from 'parcela_express_api';
let defaultClient = ParcelaExpressApi.ApiClient.instance;


let apiInstance = new ParcelaExpressApi.LogoApi();
let file = "file_example"; // Blob | 

apiInstance.uploadMerchantLogo(file, (error, data, response) => {
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
 **file** | **Blob**|  | 

### Return type

[**GetLogoDto**](GetLogoDto.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json

