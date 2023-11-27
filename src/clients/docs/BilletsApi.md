# ParcelaExpressApi.BilletsApi

All URIs are relative to */*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createBilletPayment**](BilletsApi.md#createBilletPayment) | **POST** /v1/billets/{sellerId} | Criar novo pagamento de boleto
[**createBilletPaymentV2**](BilletsApi.md#createBilletPaymentV2) | **POST** /v2/billets/{sellerId} | Criar novo lote de pagamento de boleto
[**getBilletUrl**](BilletsApi.md#getBilletUrl) | **GET** /v1/billets/{billetId}/url | Retorna a URL do boleto
[**listBillets**](BilletsApi.md#listBillets) | **GET** /v1/billets/list | Listar boletos com status
[**listOneBillet**](BilletsApi.md#listOneBillet) | **GET** /v1/billets/{id} | Lista um boleto com status
[**payBillet**](BilletsApi.md#payBillet) | **POST** /v1/billets/{billetId}/pay | Pagar boleto (em ambiente de desenvolvimento)

<a name="createBilletPayment"></a>
# **createBilletPayment**
> GetBilletDto createBilletPayment(body, sellerId)

Criar novo pagamento de boleto

### Example
```javascript
import {ParcelaExpressApi} from 'parcela_express_api';
let defaultClient = ParcelaExpressApi.ApiClient.instance;


let apiInstance = new ParcelaExpressApi.BilletsApi();
let body = new ParcelaExpressApi.CreateBilletDto(); // CreateBilletDto | 
let sellerId = "sellerId_example"; // String | 

apiInstance.createBilletPayment(body, sellerId, (error, data, response) => {
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
 **body** | [**CreateBilletDto**](CreateBilletDto.md)|  | 
 **sellerId** | **String**|  | 

### Return type

[**GetBilletDto**](GetBilletDto.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="createBilletPaymentV2"></a>
# **createBilletPaymentV2**
> [GetBilletDto] createBilletPaymentV2(body, sellerId)

Criar novo lote de pagamento de boleto

### Example
```javascript
import {ParcelaExpressApi} from 'parcela_express_api';
let defaultClient = ParcelaExpressApi.ApiClient.instance;


let apiInstance = new ParcelaExpressApi.BilletsApi();
let body = [new ParcelaExpressApi.CreateBilletDto()]; // [CreateBilletDto] | 
let sellerId = "sellerId_example"; // String | 

apiInstance.createBilletPaymentV2(body, sellerId, (error, data, response) => {
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
 **body** | [**[CreateBilletDto]**](CreateBilletDto.md)|  | 
 **sellerId** | **String**|  | 

### Return type

[**[GetBilletDto]**](GetBilletDto.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getBilletUrl"></a>
# **getBilletUrl**
> GetBilletUrlDto getBilletUrl(billetId)

Retorna a URL do boleto

### Example
```javascript
import {ParcelaExpressApi} from 'parcela_express_api';
let defaultClient = ParcelaExpressApi.ApiClient.instance;


let apiInstance = new ParcelaExpressApi.BilletsApi();
let billetId = "billetId_example"; // String | 

apiInstance.getBilletUrl(billetId, (error, data, response) => {
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
 **billetId** | **String**|  | 

### Return type

[**GetBilletUrlDto**](GetBilletUrlDto.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="listBillets"></a>
# **listBillets**
> InlineResponse200 listBillets(limit, currentPage, opts)

Listar boletos com status

### Example
```javascript
import {ParcelaExpressApi} from 'parcela_express_api';
let defaultClient = ParcelaExpressApi.ApiClient.instance;


let apiInstance = new ParcelaExpressApi.BilletsApi();
let limit = 10; // Number | 
let currentPage = 1; // Number | 
let opts = { 
  'sort': "time-descending" // String | 
};
apiInstance.listBillets(limit, currentPage, opts, (error, data, response) => {
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

### Return type

[**InlineResponse200**](InlineResponse200.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="listOneBillet"></a>
# **listOneBillet**
> GetOneBilletDto listOneBillet(id)

Lista um boleto com status

### Example
```javascript
import {ParcelaExpressApi} from 'parcela_express_api';
let defaultClient = ParcelaExpressApi.ApiClient.instance;


let apiInstance = new ParcelaExpressApi.BilletsApi();
let id = "id_example"; // String | 

apiInstance.listOneBillet(id, (error, data, response) => {
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
 **id** | **String**|  | 

### Return type

[**GetOneBilletDto**](GetOneBilletDto.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="payBillet"></a>
# **payBillet**
> payBillet(billetId)

Pagar boleto (em ambiente de desenvolvimento)

### Example
```javascript
import {ParcelaExpressApi} from 'parcela_express_api';
let defaultClient = ParcelaExpressApi.ApiClient.instance;


let apiInstance = new ParcelaExpressApi.BilletsApi();
let billetId = "billetId_example"; // String | 

apiInstance.payBillet(billetId, (error, data, response) => {
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
 **billetId** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

