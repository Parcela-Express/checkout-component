# ParcelaExpressApi.CostsPlansApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createCostPlan**](CostsPlansApi.md#createCostPlan) | **POST** /v1/costs-plans | Criar plano de custo
[**getCostPlan**](CostsPlansApi.md#getCostPlan) | **GET** /v1/costs-plans/{costPlanId} | Obtém dados do plano de custo através do id.
[**listAllCostsPlans**](CostsPlansApi.md#listAllCostsPlans) | **GET** /v1/costs-plans/list | Listar todos os planos de custos cadastrados
[**listCostsPlans**](CostsPlansApi.md#listCostsPlans) | **GET** /v1/costs-plans | Listar os planos de custos cadastrados



## createCostPlan

> GetCostPlanDto createCostPlan(CreateCostPlanDto)

Criar plano de custo

### Example

```javascript
import ParcelaExpressApi from 'parcela_express_api';
let defaultClient = ParcelaExpressApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new ParcelaExpressApi.CostsPlansApi();
let CreateCostPlanDto = new ParcelaExpressApi.CreateCostPlanDto(); // CreateCostPlanDto | 
apiInstance.createCostPlan(CreateCostPlanDto, (error, data, response) => {
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
 **CreateCostPlanDto** | [**CreateCostPlanDto**](CreateCostPlanDto.md)|  | 

### Return type

[**GetCostPlanDto**](GetCostPlanDto.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## getCostPlan

> GetCostPlanDto getCostPlan(costPlanId)

Obtém dados do plano de custo através do id.

### Example

```javascript
import ParcelaExpressApi from 'parcela_express_api';
let defaultClient = ParcelaExpressApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new ParcelaExpressApi.CostsPlansApi();
let costPlanId = "costPlanId_example"; // String | 
apiInstance.getCostPlan(costPlanId, (error, data, response) => {
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
 **costPlanId** | **String**|  | 

### Return type

[**GetCostPlanDto**](GetCostPlanDto.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listAllCostsPlans

> [GetCostPlanDto] listAllCostsPlans()

Listar todos os planos de custos cadastrados

### Example

```javascript
import ParcelaExpressApi from 'parcela_express_api';
let defaultClient = ParcelaExpressApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new ParcelaExpressApi.CostsPlansApi();
apiInstance.listAllCostsPlans((error, data, response) => {
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

[**[GetCostPlanDto]**](GetCostPlanDto.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listCostsPlans

> PaginatedDto listCostsPlans(limit, current_page, opts)

Listar os planos de custos cadastrados

### Example

```javascript
import ParcelaExpressApi from 'parcela_express_api';
let defaultClient = ParcelaExpressApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new ParcelaExpressApi.CostsPlansApi();
let limit = 10; // Number | 
let current_page = 1; // Number | 
let opts = {
  'sort': "'time-descending'", // String | 
  'name': "name_example" // String | 
};
apiInstance.listCostsPlans(limit, current_page, opts, (error, data, response) => {
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
 **limit** | **Number**|  | [default to 10]
 **current_page** | **Number**|  | [default to 1]
 **sort** | **String**|  | [optional] [default to &#39;time-descending&#39;]
 **name** | **String**|  | [optional] 

### Return type

[**PaginatedDto**](PaginatedDto.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

