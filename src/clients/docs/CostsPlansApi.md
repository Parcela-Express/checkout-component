# ParcelaExpressApi.CostsPlansApi

All URIs are relative to */*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createCostPlan**](CostsPlansApi.md#createCostPlan) | **POST** /v1/costs-plans | Criar plano de custo
[**listAllCostsPlans**](CostsPlansApi.md#listAllCostsPlans) | **GET** /v1/costs-plans/list | Listar todos os planos de custos cadastrados
[**listCostsPlans**](CostsPlansApi.md#listCostsPlans) | **GET** /v1/costs-plans | Listar os planos de custos cadastrados

<a name="createCostPlan"></a>
# **createCostPlan**
> GetCostPlanDto createCostPlan(body)

Criar plano de custo

### Example
```javascript
import {ParcelaExpressApi} from 'parcela_express_api';
let defaultClient = ParcelaExpressApi.ApiClient.instance;


let apiInstance = new ParcelaExpressApi.CostsPlansApi();
let body = new ParcelaExpressApi.CreateCostPlanDto(); // CreateCostPlanDto | 

apiInstance.createCostPlan(body, (error, data, response) => {
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
 **body** | [**CreateCostPlanDto**](CreateCostPlanDto.md)|  | 

### Return type

[**GetCostPlanDto**](GetCostPlanDto.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="listAllCostsPlans"></a>
# **listAllCostsPlans**
> [GetCostPlanDto] listAllCostsPlans()

Listar todos os planos de custos cadastrados

### Example
```javascript
import {ParcelaExpressApi} from 'parcela_express_api';
let defaultClient = ParcelaExpressApi.ApiClient.instance;


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

<a name="listCostsPlans"></a>
# **listCostsPlans**
> InlineResponse200 listCostsPlans(limit, currentPage, opts)

Listar os planos de custos cadastrados

### Example
```javascript
import {ParcelaExpressApi} from 'parcela_express_api';
let defaultClient = ParcelaExpressApi.ApiClient.instance;


let apiInstance = new ParcelaExpressApi.CostsPlansApi();
let limit = 10; // Number | 
let currentPage = 1; // Number | 
let opts = { 
  'sort': "time-descending", // String | 
  'name': "name_example" // String | 
};
apiInstance.listCostsPlans(limit, currentPage, opts, (error, data, response) => {
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
 **currentPage** | **Number**|  | [default to 1]
 **sort** | **String**|  | [optional] [default to time-descending]
 **name** | **String**|  | [optional] 

### Return type

[**InlineResponse200**](InlineResponse200.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

