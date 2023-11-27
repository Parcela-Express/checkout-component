# ParcelaExpressApi.SettlementPlansApi

All URIs are relative to */*

Method | HTTP request | Description
------------- | ------------- | -------------
[**listSettlementPlans**](SettlementPlansApi.md#listSettlementPlans) | **GET** /v1/settlement-plans | Listar os planos de liquidação cadastrados

<a name="listSettlementPlans"></a>
# **listSettlementPlans**
> [GetSettlementPlanDto] listSettlementPlans()

Listar os planos de liquidação cadastrados

### Example
```javascript
import {ParcelaExpressApi} from 'parcela_express_api';
let defaultClient = ParcelaExpressApi.ApiClient.instance;


let apiInstance = new ParcelaExpressApi.SettlementPlansApi();
apiInstance.listSettlementPlans((error, data, response) => {
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

[**[GetSettlementPlanDto]**](GetSettlementPlanDto.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

