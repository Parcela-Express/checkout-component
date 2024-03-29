# ParcelaExpressApi.LogRiskApi

All URIs are relative to */*

Method | HTTP request | Description
------------- | ------------- | -------------
[**listLogRisks**](LogRiskApi.md#listLogRisks) | **GET** /v1/log-risk | Listar todos logs de risco

<a name="listLogRisks"></a>
# **listLogRisks**
> [GetLogRiskDto] listLogRisks()

Listar todos logs de risco

### Example
```javascript
import {ParcelaExpressApi} from 'parcela_express_api';
let defaultClient = ParcelaExpressApi.ApiClient.instance;


let apiInstance = new ParcelaExpressApi.LogRiskApi();
apiInstance.listLogRisks((error, data, response) => {
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

[**[GetLogRiskDto]**](GetLogRiskDto.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

