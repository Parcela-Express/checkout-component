# ParcelaExpressApi.SalesPlansApi

All URIs are relative to */*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addPaymentType**](SalesPlansApi.md#addPaymentType) | **POST** /v1/sales-plans/{salePlanId}/payment-types | Associar um ou mais tipo(s) de pagamento(s) a um plano de vendas
[**createSalesPlan**](SalesPlansApi.md#createSalesPlan) | **POST** /v1/sales-plans | Criar plano de vendas
[**listAllSalePlan**](SalesPlansApi.md#listAllSalePlan) | **GET** /v1/sales-plans | Listar Todos planos de venda
[**listSalePlan**](SalesPlansApi.md#listSalePlan) | **GET** /v1/sales-plans/list | Listar planos de venda
[**listSalePlanPaymentTypes**](SalesPlansApi.md#listSalePlanPaymentTypes) | **GET** /v1/sales-plans/{salePlanId}/payment-types | Listar as formas de pagamento do plano de vendas informado

<a name="addPaymentType"></a>
# **addPaymentType**
> GetSalePlanDto addPaymentType(body, salePlanId)

Associar um ou mais tipo(s) de pagamento(s) a um plano de vendas

### Example
```javascript
import {ParcelaExpressApi} from 'parcela_express_api';
let defaultClient = ParcelaExpressApi.ApiClient.instance;


let apiInstance = new ParcelaExpressApi.SalesPlansApi();
let body = new ParcelaExpressApi.IncludePaymentTypesDto(); // IncludePaymentTypesDto | 
let salePlanId = "salePlanId_example"; // String | 

apiInstance.addPaymentType(body, salePlanId, (error, data, response) => {
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
 **body** | [**IncludePaymentTypesDto**](IncludePaymentTypesDto.md)|  | 
 **salePlanId** | **String**|  | 

### Return type

[**GetSalePlanDto**](GetSalePlanDto.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="createSalesPlan"></a>
# **createSalesPlan**
> GetSalePlanDto createSalesPlan(body)

Criar plano de vendas

### Example
```javascript
import {ParcelaExpressApi} from 'parcela_express_api';
let defaultClient = ParcelaExpressApi.ApiClient.instance;


let apiInstance = new ParcelaExpressApi.SalesPlansApi();
let body = new ParcelaExpressApi.CreateSalePlanDto(); // CreateSalePlanDto | 

apiInstance.createSalesPlan(body, (error, data, response) => {
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
 **body** | [**CreateSalePlanDto**](CreateSalePlanDto.md)|  | 

### Return type

[**GetSalePlanDto**](GetSalePlanDto.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="listAllSalePlan"></a>
# **listAllSalePlan**
> InlineResponse200 listAllSalePlan(limit, currentPage, opts)

Listar Todos planos de venda

### Example
```javascript
import {ParcelaExpressApi} from 'parcela_express_api';
let defaultClient = ParcelaExpressApi.ApiClient.instance;


let apiInstance = new ParcelaExpressApi.SalesPlansApi();
let limit = 10; // Number | 
let currentPage = 1; // Number | 
let opts = { 
  'sort': "time-descending", // String | 
  'id': "id_example", // String | 
  'type': ["type_example"], // [String] | 
  'name': "name_example" // String | 
};
apiInstance.listAllSalePlan(limit, currentPage, opts, (error, data, response) => {
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
 **id** | **String**|  | [optional] 
 **type** | [**[String]**](String.md)|  | [optional] 
 **name** | **String**|  | [optional] 

### Return type

[**InlineResponse200**](InlineResponse200.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="listSalePlan"></a>
# **listSalePlan**
> [GetSalePlanDto] listSalePlan()

Listar planos de venda

### Example
```javascript
import {ParcelaExpressApi} from 'parcela_express_api';
let defaultClient = ParcelaExpressApi.ApiClient.instance;


let apiInstance = new ParcelaExpressApi.SalesPlansApi();
apiInstance.listSalePlan((error, data, response) => {
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

[**[GetSalePlanDto]**](GetSalePlanDto.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="listSalePlanPaymentTypes"></a>
# **listSalePlanPaymentTypes**
> [GetPaymentTypeDto] listSalePlanPaymentTypes(salePlanId)

Listar as formas de pagamento do plano de vendas informado

### Example
```javascript
import {ParcelaExpressApi} from 'parcela_express_api';
let defaultClient = ParcelaExpressApi.ApiClient.instance;


let apiInstance = new ParcelaExpressApi.SalesPlansApi();
let salePlanId = "salePlanId_example"; // String | 

apiInstance.listSalePlanPaymentTypes(salePlanId, (error, data, response) => {
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
 **salePlanId** | **String**|  | 

### Return type

[**[GetPaymentTypeDto]**](GetPaymentTypeDto.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

