# ParcelaExpressApi.SettlementPlansApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**listSettlementPlans**](SettlementPlansApi.md#listSettlementPlans) | **GET** /v1/settlement-plans | Listar os planos de liquidação cadastrados



## listSettlementPlans

> [GetSettlementPlanDto] listSettlementPlans()

Listar os planos de liquidação cadastrados

### Example

```javascript
import ParcelaExpressApi from 'parcela_express_api';
let defaultClient = ParcelaExpressApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

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

