# ParcelaExpressApi.MerchantsApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createMerchant**](MerchantsApi.md#createMerchant) | **POST** /v1/merchants | Criar Merchant
[**createMerchantUser**](MerchantsApi.md#createMerchantUser) | **POST** /v1/merchants/{merchantId}/users | Criar usuário do merchant
[**editMerchant**](MerchantsApi.md#editMerchant) | **PATCH** /v1/merchants/{merchantId} | Editar Merchant
[**getMerchant**](MerchantsApi.md#getMerchant) | **GET** /v1/merchants/{merchantId} | Obter merchant pelo ID
[**listAllMerchantUsers**](MerchantsApi.md#listAllMerchantUsers) | **GET** /v1/merchants/users | Lista todos usuários do tipo merchant
[**listMerchantSalesPlans**](MerchantsApi.md#listMerchantSalesPlans) | **GET** /v1/merchants/{merchantId}/sales-plans | Listar planos de vendas do estabelecimento principal
[**listMerchantUsers**](MerchantsApi.md#listMerchantUsers) | **GET** /v1/merchants/{merchantId}/users | Lista os usuários do merchant
[**listMerchants**](MerchantsApi.md#listMerchants) | **GET** /v1/merchants | Listar estabelecimentos principais
[**updateMerchantUser**](MerchantsApi.md#updateMerchantUser) | **PATCH** /v1/merchants/{merchantId}/users/{userId} | Atualizar usuário do merchant



## createMerchant

> GetMerchantDto createMerchant(CreateMerchantDto)

Criar Merchant

### Example

```javascript
import ParcelaExpressApi from 'parcela_express_api';
let defaultClient = ParcelaExpressApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new ParcelaExpressApi.MerchantsApi();
let CreateMerchantDto = new ParcelaExpressApi.CreateMerchantDto(); // CreateMerchantDto | 
apiInstance.createMerchant(CreateMerchantDto, (error, data, response) => {
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
 **CreateMerchantDto** | [**CreateMerchantDto**](CreateMerchantDto.md)|  | 

### Return type

[**GetMerchantDto**](GetMerchantDto.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## createMerchantUser

> GetMerchantUserDto createMerchantUser(merchantId, CreateMerchantUserDto)

Criar usuário do merchant

### Example

```javascript
import ParcelaExpressApi from 'parcela_express_api';
let defaultClient = ParcelaExpressApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new ParcelaExpressApi.MerchantsApi();
let merchantId = "merchantId_example"; // String | 
let CreateMerchantUserDto = new ParcelaExpressApi.CreateMerchantUserDto(); // CreateMerchantUserDto | 
apiInstance.createMerchantUser(merchantId, CreateMerchantUserDto, (error, data, response) => {
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
 **merchantId** | **String**|  | 
 **CreateMerchantUserDto** | [**CreateMerchantUserDto**](CreateMerchantUserDto.md)|  | 

### Return type

[**GetMerchantUserDto**](GetMerchantUserDto.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## editMerchant

> GetMerchantDto editMerchant(merchantId, UpdateMerchantDto)

Editar Merchant

### Example

```javascript
import ParcelaExpressApi from 'parcela_express_api';
let defaultClient = ParcelaExpressApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new ParcelaExpressApi.MerchantsApi();
let merchantId = "merchantId_example"; // String | 
let UpdateMerchantDto = new ParcelaExpressApi.UpdateMerchantDto(); // UpdateMerchantDto | 
apiInstance.editMerchant(merchantId, UpdateMerchantDto, (error, data, response) => {
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
 **merchantId** | **String**|  | 
 **UpdateMerchantDto** | [**UpdateMerchantDto**](UpdateMerchantDto.md)|  | 

### Return type

[**GetMerchantDto**](GetMerchantDto.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## getMerchant

> GetMerchantDto getMerchant(merchantId)

Obter merchant pelo ID

### Example

```javascript
import ParcelaExpressApi from 'parcela_express_api';
let defaultClient = ParcelaExpressApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new ParcelaExpressApi.MerchantsApi();
let merchantId = "merchantId_example"; // String | 
apiInstance.getMerchant(merchantId, (error, data, response) => {
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
 **merchantId** | **String**|  | 

### Return type

[**GetMerchantDto**](GetMerchantDto.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listAllMerchantUsers

> PaginatedDto listAllMerchantUsers(limit, current_page, opts)

Lista todos usuários do tipo merchant

### Example

```javascript
import ParcelaExpressApi from 'parcela_express_api';
let defaultClient = ParcelaExpressApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new ParcelaExpressApi.MerchantsApi();
let limit = 10; // Number | 
let current_page = 1; // Number | 
let opts = {
  'sort': "'time-descending'" // String | 
};
apiInstance.listAllMerchantUsers(limit, current_page, opts, (error, data, response) => {
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

### Return type

[**PaginatedDto**](PaginatedDto.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listMerchantSalesPlans

> [GetMerchantSalePlanDto] listMerchantSalesPlans(merchantId)

Listar planos de vendas do estabelecimento principal

### Example

```javascript
import ParcelaExpressApi from 'parcela_express_api';
let defaultClient = ParcelaExpressApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new ParcelaExpressApi.MerchantsApi();
let merchantId = "merchantId_example"; // String | 
apiInstance.listMerchantSalesPlans(merchantId, (error, data, response) => {
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
 **merchantId** | **String**|  | 

### Return type

[**[GetMerchantSalePlanDto]**](GetMerchantSalePlanDto.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listMerchantUsers

> PaginatedDto listMerchantUsers(limit, current_page, merchantId, opts)

Lista os usuários do merchant

### Example

```javascript
import ParcelaExpressApi from 'parcela_express_api';
let defaultClient = ParcelaExpressApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new ParcelaExpressApi.MerchantsApi();
let limit = 10; // Number | 
let current_page = 1; // Number | 
let merchantId = "merchantId_example"; // String | 
let opts = {
  'sort': "'time-descending'" // String | 
};
apiInstance.listMerchantUsers(limit, current_page, merchantId, opts, (error, data, response) => {
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
 **merchantId** | **String**|  | 
 **sort** | **String**|  | [optional] [default to &#39;time-descending&#39;]

### Return type

[**PaginatedDto**](PaginatedDto.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listMerchants

> [GetMerchantDto] listMerchants()

Listar estabelecimentos principais

### Example

```javascript
import ParcelaExpressApi from 'parcela_express_api';
let defaultClient = ParcelaExpressApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new ParcelaExpressApi.MerchantsApi();
apiInstance.listMerchants((error, data, response) => {
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

[**[GetMerchantDto]**](GetMerchantDto.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## updateMerchantUser

> GetMerchantUserDto updateMerchantUser(merchantId, userId, UpdateMerchantUserDto)

Atualizar usuário do merchant

### Example

```javascript
import ParcelaExpressApi from 'parcela_express_api';
let defaultClient = ParcelaExpressApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new ParcelaExpressApi.MerchantsApi();
let merchantId = "merchantId_example"; // String | 
let userId = "userId_example"; // String | 
let UpdateMerchantUserDto = new ParcelaExpressApi.UpdateMerchantUserDto(); // UpdateMerchantUserDto | 
apiInstance.updateMerchantUser(merchantId, userId, UpdateMerchantUserDto, (error, data, response) => {
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
 **merchantId** | **String**|  | 
 **userId** | **String**|  | 
 **UpdateMerchantUserDto** | [**UpdateMerchantUserDto**](UpdateMerchantUserDto.md)|  | 

### Return type

[**GetMerchantUserDto**](GetMerchantUserDto.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

