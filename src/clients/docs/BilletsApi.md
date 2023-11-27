# ParcelaExpressApi.BilletsApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createBilletHybrid**](BilletsApi.md#createBilletHybrid) | **POST** /v2/billets/{sellerId}/hybrid | Criar novo lote de boletos hibridos
[**createBilletHybridV3**](BilletsApi.md#createBilletHybridV3) | **POST** /v3/billets/{sellerId}/hybrid | Criar novo lote de boletos hibridos
[**createBilletPayment**](BilletsApi.md#createBilletPayment) | **POST** /v1/billets/{sellerId} | Criar novo pagamento de boleto
[**createBilletPaymentInternal**](BilletsApi.md#createBilletPaymentInternal) | **POST** /v2/billets/{sellerId}/internal | Criar novo lote de pagamento de boleto (PEX)
[**createBilletPaymentV2**](BilletsApi.md#createBilletPaymentV2) | **POST** /v2/billets/{sellerId} | Criar novo lote de pagamento de boleto
[**createBilletPaymentV3**](BilletsApi.md#createBilletPaymentV3) | **POST** /v3/billets/{sellerId} | Criar novo lote de pagamento de boleto
[**getBilletUrl**](BilletsApi.md#getBilletUrl) | **GET** /v1/billets/{billetId}/url | Retorna a URL do boleto
[**listOneBillet**](BilletsApi.md#listOneBillet) | **GET** /v1/billets/{id} | Lista um boleto com status
[**payBillet**](BilletsApi.md#payBillet) | **POST** /v1/billets/{billetId}/pay | Pagar boleto (em ambiente de desenvolvimento)
[**writeOffBillet**](BilletsApi.md#writeOffBillet) | **POST** /v1/billets/{sellerId}/{billetId}/void | Dar baixa do boleto



## createBilletHybrid

> [GetBilletDto] createBilletHybrid(sellerId, CreateBilletHybridDto)

Criar novo lote de boletos hibridos

### Example

```javascript
import ParcelaExpressApi from 'parcela_express_api';
let defaultClient = ParcelaExpressApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new ParcelaExpressApi.BilletsApi();
let sellerId = "sellerId_example"; // String | 
let CreateBilletHybridDto = [new ParcelaExpressApi.CreateBilletHybridDto()]; // [CreateBilletHybridDto] | 
apiInstance.createBilletHybrid(sellerId, CreateBilletHybridDto, (error, data, response) => {
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
 **sellerId** | **String**|  | 
 **CreateBilletHybridDto** | [**[CreateBilletHybridDto]**](CreateBilletHybridDto.md)|  | 

### Return type

[**[GetBilletDto]**](GetBilletDto.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## createBilletHybridV3

> [GetBilletV3Dto] createBilletHybridV3(sellerId, CreateBilletHybridDto)

Criar novo lote de boletos hibridos

### Example

```javascript
import ParcelaExpressApi from 'parcela_express_api';
let defaultClient = ParcelaExpressApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new ParcelaExpressApi.BilletsApi();
let sellerId = "sellerId_example"; // String | 
let CreateBilletHybridDto = [new ParcelaExpressApi.CreateBilletHybridDto()]; // [CreateBilletHybridDto] | 
apiInstance.createBilletHybridV3(sellerId, CreateBilletHybridDto, (error, data, response) => {
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
 **sellerId** | **String**|  | 
 **CreateBilletHybridDto** | [**[CreateBilletHybridDto]**](CreateBilletHybridDto.md)|  | 

### Return type

[**[GetBilletV3Dto]**](GetBilletV3Dto.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## createBilletPayment

> GetBilletDto createBilletPayment(sellerId, CreateBilletDto)

Criar novo pagamento de boleto

### Example

```javascript
import ParcelaExpressApi from 'parcela_express_api';
let defaultClient = ParcelaExpressApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new ParcelaExpressApi.BilletsApi();
let sellerId = "sellerId_example"; // String | 
let CreateBilletDto = new ParcelaExpressApi.CreateBilletDto(); // CreateBilletDto | 
apiInstance.createBilletPayment(sellerId, CreateBilletDto, (error, data, response) => {
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
 **sellerId** | **String**|  | 
 **CreateBilletDto** | [**CreateBilletDto**](CreateBilletDto.md)|  | 

### Return type

[**GetBilletDto**](GetBilletDto.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## createBilletPaymentInternal

> [GetBilletDto] createBilletPaymentInternal(sellerId, CreateBilletInternalDto)

Criar novo lote de pagamento de boleto (PEX)

### Example

```javascript
import ParcelaExpressApi from 'parcela_express_api';
let defaultClient = ParcelaExpressApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new ParcelaExpressApi.BilletsApi();
let sellerId = "sellerId_example"; // String | 
let CreateBilletInternalDto = [new ParcelaExpressApi.CreateBilletInternalDto()]; // [CreateBilletInternalDto] | 
apiInstance.createBilletPaymentInternal(sellerId, CreateBilletInternalDto, (error, data, response) => {
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
 **sellerId** | **String**|  | 
 **CreateBilletInternalDto** | [**[CreateBilletInternalDto]**](CreateBilletInternalDto.md)|  | 

### Return type

[**[GetBilletDto]**](GetBilletDto.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## createBilletPaymentV2

> [GetBilletDto] createBilletPaymentV2(sellerId, CreateBilletDto)

Criar novo lote de pagamento de boleto

### Example

```javascript
import ParcelaExpressApi from 'parcela_express_api';
let defaultClient = ParcelaExpressApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new ParcelaExpressApi.BilletsApi();
let sellerId = "sellerId_example"; // String | 
let CreateBilletDto = [new ParcelaExpressApi.CreateBilletDto()]; // [CreateBilletDto] | 
apiInstance.createBilletPaymentV2(sellerId, CreateBilletDto, (error, data, response) => {
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
 **sellerId** | **String**|  | 
 **CreateBilletDto** | [**[CreateBilletDto]**](CreateBilletDto.md)|  | 

### Return type

[**[GetBilletDto]**](GetBilletDto.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## createBilletPaymentV3

> [GetBilletV3Dto] createBilletPaymentV3(sellerId, CreateBilletDto)

Criar novo lote de pagamento de boleto

### Example

```javascript
import ParcelaExpressApi from 'parcela_express_api';
let defaultClient = ParcelaExpressApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new ParcelaExpressApi.BilletsApi();
let sellerId = "sellerId_example"; // String | 
let CreateBilletDto = [new ParcelaExpressApi.CreateBilletDto()]; // [CreateBilletDto] | 
apiInstance.createBilletPaymentV3(sellerId, CreateBilletDto, (error, data, response) => {
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
 **sellerId** | **String**|  | 
 **CreateBilletDto** | [**[CreateBilletDto]**](CreateBilletDto.md)|  | 

### Return type

[**[GetBilletV3Dto]**](GetBilletV3Dto.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## getBilletUrl

> GetBilletUrlDto getBilletUrl(billetId)

Retorna a URL do boleto

### Example

```javascript
import ParcelaExpressApi from 'parcela_express_api';
let defaultClient = ParcelaExpressApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

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


## listOneBillet

> GetOneBilletDto listOneBillet(id)

Lista um boleto com status

### Example

```javascript
import ParcelaExpressApi from 'parcela_express_api';
let defaultClient = ParcelaExpressApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

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


## payBillet

> payBillet(billetId)

Pagar boleto (em ambiente de desenvolvimento)

### Example

```javascript
import ParcelaExpressApi from 'parcela_express_api';
let defaultClient = ParcelaExpressApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

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


## writeOffBillet

> writeOffBillet(sellerId, billetId)

Dar baixa do boleto

### Example

```javascript
import ParcelaExpressApi from 'parcela_express_api';
let defaultClient = ParcelaExpressApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new ParcelaExpressApi.BilletsApi();
let sellerId = "sellerId_example"; // String | ID do estabelecimento
let billetId = "billetId_example"; // String | ID do boleto
apiInstance.writeOffBillet(sellerId, billetId, (error, data, response) => {
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
 **sellerId** | **String**| ID do estabelecimento | 
 **billetId** | **String**| ID do boleto | 

### Return type

null (empty response body)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined

