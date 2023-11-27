# ParcelaExpressApi.GoalApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createGoal**](GoalApi.md#createGoal) | **POST** /v1/goal | Criar meta
[**editGoal**](GoalApi.md#editGoal) | **PATCH** /v1/goal/{goalId} | Editar meta
[**getGoal**](GoalApi.md#getGoal) | **GET** /v1/goal/{goalId} | Obter meta pelo ID
[**listGoals**](GoalApi.md#listGoals) | **GET** /v1/goal/list | Listar metas



## createGoal

> GetGoalDto createGoal(CreateGoalDto)

Criar meta

### Example

```javascript
import ParcelaExpressApi from 'parcela_express_api';
let defaultClient = ParcelaExpressApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new ParcelaExpressApi.GoalApi();
let CreateGoalDto = new ParcelaExpressApi.CreateGoalDto(); // CreateGoalDto | 
apiInstance.createGoal(CreateGoalDto, (error, data, response) => {
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
 **CreateGoalDto** | [**CreateGoalDto**](CreateGoalDto.md)|  | 

### Return type

[**GetGoalDto**](GetGoalDto.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## editGoal

> GetGoalDto editGoal(goalId, UpdateGoalDto)

Editar meta

### Example

```javascript
import ParcelaExpressApi from 'parcela_express_api';
let defaultClient = ParcelaExpressApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new ParcelaExpressApi.GoalApi();
let goalId = "goalId_example"; // String | 
let UpdateGoalDto = new ParcelaExpressApi.UpdateGoalDto(); // UpdateGoalDto | 
apiInstance.editGoal(goalId, UpdateGoalDto, (error, data, response) => {
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
 **goalId** | **String**|  | 
 **UpdateGoalDto** | [**UpdateGoalDto**](UpdateGoalDto.md)|  | 

### Return type

[**GetGoalDto**](GetGoalDto.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## getGoal

> GetGoalDto getGoal(goalId)

Obter meta pelo ID

### Example

```javascript
import ParcelaExpressApi from 'parcela_express_api';
let defaultClient = ParcelaExpressApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new ParcelaExpressApi.GoalApi();
let goalId = "goalId_example"; // String | 
apiInstance.getGoal(goalId, (error, data, response) => {
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
 **goalId** | **String**|  | 

### Return type

[**GetGoalDto**](GetGoalDto.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listGoals

> [GetGoalDto] listGoals(opts)

Listar metas

### Example

```javascript
import ParcelaExpressApi from 'parcela_express_api';
let defaultClient = ParcelaExpressApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new ParcelaExpressApi.GoalApi();
let opts = {
  'startDate': "startDate_example", // String | Data de inicio. Formato: yyyy-mm-dd
  'endDate': "endDate_example", // String | Data de fim. Formato: yyyy-mm-dd
  'responsibles': ["null"], // [String] | Id dos responsáveis
  'id': "id_example" // String | 
};
apiInstance.listGoals(opts, (error, data, response) => {
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
 **startDate** | **String**| Data de inicio. Formato: yyyy-mm-dd | [optional] 
 **endDate** | **String**| Data de fim. Formato: yyyy-mm-dd | [optional] 
 **responsibles** | [**[String]**](String.md)| Id dos responsáveis | [optional] 
 **id** | **String**|  | [optional] 

### Return type

[**[GetGoalDto]**](GetGoalDto.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

