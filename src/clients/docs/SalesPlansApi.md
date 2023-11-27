# ParcelaExpressApi.SalesPlansApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addPaymentType**](SalesPlansApi.md#addPaymentType) | **POST** /v1/sales-plans/{salePlanId}/payment-types | Associar um ou mais tipo(s) de pagamento(s) a um plano de vendas
[**createSalesPlan**](SalesPlansApi.md#createSalesPlan) | **POST** /v1/sales-plans | Criar plano de vendas
[**getSalePlan**](SalesPlansApi.md#getSalePlan) | **GET** /v1/sales-plans/{salePlanId} | Obtém dados do plano de venda através do id.
[**listAllSalePlan**](SalesPlansApi.md#listAllSalePlan) | **GET** /v1/sales-plans | Listar Todos planos de venda
[**listSalePlan**](SalesPlansApi.md#listSalePlan) | **GET** /v1/sales-plans/list | Listar planos de venda
[**listSalePlanPaymentTypes**](SalesPlansApi.md#listSalePlanPaymentTypes) | **GET** /v1/sales-plans/{salePlanId}/payment-types | Listar as formas de pagamento do plano de vendas informado



## addPaymentType

> GetSalePlanDto addPaymentType(salePlanId, IncludePaymentTypesDto)

Associar um ou mais tipo(s) de pagamento(s) a um plano de vendas

### Example

```javascript
import ParcelaExpressApi from 'parcela_express_api';
let defaultClient = ParcelaExpressApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new ParcelaExpressApi.SalesPlansApi();
let salePlanId = "salePlanId_example"; // String | 
let IncludePaymentTypesDto = new ParcelaExpressApi.IncludePaymentTypesDto(); // IncludePaymentTypesDto | 
apiInstance.addPaymentType(salePlanId, IncludePaymentTypesDto, (error, data, response) => {
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
 **IncludePaymentTypesDto** | [**IncludePaymentTypesDto**](IncludePaymentTypesDto.md)|  | 

### Return type

[**GetSalePlanDto**](GetSalePlanDto.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## createSalesPlan

> GetSalePlanDto createSalesPlan(CreateSalePlanDto)

Criar plano de vendas

### Example

```javascript
import ParcelaExpressApi from 'parcela_express_api';
let defaultClient = ParcelaExpressApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new ParcelaExpressApi.SalesPlansApi();
let CreateSalePlanDto = new ParcelaExpressApi.CreateSalePlanDto(); // CreateSalePlanDto | 
apiInstance.createSalesPlan(CreateSalePlanDto, (error, data, response) => {
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
 **CreateSalePlanDto** | [**CreateSalePlanDto**](CreateSalePlanDto.md)|  | 

### Return type

[**GetSalePlanDto**](GetSalePlanDto.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## getSalePlan

> GetSalePlanDto getSalePlan(salePlanId)

Obtém dados do plano de venda através do id.

### Example

```javascript
import ParcelaExpressApi from 'parcela_express_api';
let defaultClient = ParcelaExpressApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new ParcelaExpressApi.SalesPlansApi();
let salePlanId = "salePlanId_example"; // String | 
apiInstance.getSalePlan(salePlanId, (error, data, response) => {
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

[**GetSalePlanDto**](GetSalePlanDto.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listAllSalePlan

> PaginatedDto listAllSalePlan(limit, current_page, opts)

Listar Todos planos de venda

### Example

```javascript
import ParcelaExpressApi from 'parcela_express_api';
let defaultClient = ParcelaExpressApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new ParcelaExpressApi.SalesPlansApi();
let limit = 10; // Number | 
let current_page = 1; // Number | 
let opts = {
  'sort': "'time-descending'", // String | 
  'id': "id_example", // String | 
  'type': ["null"], // [String] | 
  'name': "name_example" // String | 
};
apiInstance.listAllSalePlan(limit, current_page, opts, (error, data, response) => {
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
 **id** | **String**|  | [optional] 
 **type** | [**[String]**](String.md)|  | [optional] 
 **name** | **String**|  | [optional] 

### Return type

[**PaginatedDto**](PaginatedDto.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listSalePlan

> [GetSalePlanDto] listSalePlan(opts)

Listar planos de venda

### Example

```javascript
import ParcelaExpressApi from 'parcela_express_api';
let defaultClient = ParcelaExpressApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new ParcelaExpressApi.SalesPlansApi();
let opts = {
  'mode': "mode_example" // String | 
};
apiInstance.listSalePlan(opts, (error, data, response) => {
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
 **mode** | **String**|  | [optional] 

### Return type

[**[GetSalePlanDto]**](GetSalePlanDto.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listSalePlanPaymentTypes

> [GetPaymentTypeDto] listSalePlanPaymentTypes(salePlanId)

Listar as formas de pagamento do plano de vendas informado

### Example

```javascript
import ParcelaExpressApi from 'parcela_express_api';
let defaultClient = ParcelaExpressApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

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

