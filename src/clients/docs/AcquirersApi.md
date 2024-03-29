# ParcelaExpressApi.AcquirersApi

All URIs are relative to */*

Method | HTTP request | Description
------------- | ------------- | -------------
[**listAcquirerSalesPlans**](AcquirersApi.md#listAcquirerSalesPlans) | **GET** /v1/acquirers/{acquirerId}/sales-plans | Listar planos de vendas da adquirente
[**listAcquirers**](AcquirersApi.md#listAcquirers) | **GET** /v1/acquirers | Listar adquirentes

<a name="listAcquirerSalesPlans"></a>
# **listAcquirerSalesPlans**
> [GetAcquirerSalePlanDto] listAcquirerSalesPlans(acquirerId)

Listar planos de vendas da adquirente

### Example
```javascript
import {ParcelaExpressApi} from 'parcela_express_api';
let defaultClient = ParcelaExpressApi.ApiClient.instance;


let apiInstance = new ParcelaExpressApi.AcquirersApi();
let acquirerId = "acquirerId_example"; // String | 

apiInstance.listAcquirerSalesPlans(acquirerId, (error, data, response) => {
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
 **acquirerId** | **String**|  | 

### Return type

[**[GetAcquirerSalePlanDto]**](GetAcquirerSalePlanDto.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="listAcquirers"></a>
# **listAcquirers**
> [GetAcquirerDto] listAcquirers()

Listar adquirentes

### Example
```javascript
import {ParcelaExpressApi} from 'parcela_express_api';
let defaultClient = ParcelaExpressApi.ApiClient.instance;


let apiInstance = new ParcelaExpressApi.AcquirersApi();
apiInstance.listAcquirers((error, data, response) => {
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

[**[GetAcquirerDto]**](GetAcquirerDto.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

