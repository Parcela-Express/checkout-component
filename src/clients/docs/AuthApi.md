# ParcelaExpressApi.AuthApi

All URIs are relative to */*

Method | HTTP request | Description
------------- | ------------- | -------------
[**forgotPasswordRequest**](AuthApi.md#forgotPasswordRequest) | **POST** /v1/auth/forgot-password | Solicitar alteração de senha
[**getForgotPasswordRequestData**](AuthApi.md#getForgotPasswordRequestData) | **GET** /v1/auth/forgot-password/{token} | Validar token enviado no esqueci minha senha
[**login**](AuthApi.md#login) | **POST** /v1/auth/login | Realizar autenticação na aplicação
[**loginV2**](AuthApi.md#loginV2) | **POST** /v2/auth/login | Realizar autenticação na aplicação
[**refreshToken**](AuthApi.md#refreshToken) | **POST** /v1/auth/refresh | Atualizar o token da aplicação
[**resetPasswordRequest**](AuthApi.md#resetPasswordRequest) | **POST** /v1/auth/reset-password | Realizar alteração de senha

<a name="forgotPasswordRequest"></a>
# **forgotPasswordRequest**
> forgotPasswordRequest(body)

Solicitar alteração de senha

### Example
```javascript
import {ParcelaExpressApi} from 'parcela_express_api';

let apiInstance = new ParcelaExpressApi.AuthApi();
let body = new ParcelaExpressApi.ForgotPasswordRequestDto(); // ForgotPasswordRequestDto | 

apiInstance.forgotPasswordRequest(body, (error, data, response) => {
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
 **body** | [**ForgotPasswordRequestDto**](ForgotPasswordRequestDto.md)|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

<a name="getForgotPasswordRequestData"></a>
# **getForgotPasswordRequestData**
> GetForgotPasswordRequestDto getForgotPasswordRequestData(token)

Validar token enviado no esqueci minha senha

### Example
```javascript
import {ParcelaExpressApi} from 'parcela_express_api';

let apiInstance = new ParcelaExpressApi.AuthApi();
let token = "token_example"; // String | 

apiInstance.getForgotPasswordRequestData(token, (error, data, response) => {
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
 **token** | **String**|  | 

### Return type

[**GetForgotPasswordRequestDto**](GetForgotPasswordRequestDto.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="login"></a>
# **login**
> UserLoginResponseDto login(body)

Realizar autenticação na aplicação

### Example
```javascript
import {ParcelaExpressApi} from 'parcela_express_api';

let apiInstance = new ParcelaExpressApi.AuthApi();
let body = new ParcelaExpressApi.UserLoginDto(); // UserLoginDto | 

apiInstance.login(body, (error, data, response) => {
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
 **body** | [**UserLoginDto**](UserLoginDto.md)|  | 

### Return type

[**UserLoginResponseDto**](UserLoginResponseDto.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="loginV2"></a>
# **loginV2**
> UserLoginResponseDto loginV2(body)

Realizar autenticação na aplicação

### Example
```javascript
import {ParcelaExpressApi} from 'parcela_express_api';

let apiInstance = new ParcelaExpressApi.AuthApi();
let body = new ParcelaExpressApi.UserLoginDto(); // UserLoginDto | 

apiInstance.loginV2(body, (error, data, response) => {
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
 **body** | [**UserLoginDto**](UserLoginDto.md)|  | 

### Return type

[**UserLoginResponseDto**](UserLoginResponseDto.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="refreshToken"></a>
# **refreshToken**
> UserRefreshTokenResponseDto refreshToken(body)

Atualizar o token da aplicação

### Example
```javascript
import {ParcelaExpressApi} from 'parcela_express_api';

let apiInstance = new ParcelaExpressApi.AuthApi();
let body = new ParcelaExpressApi.UserRefreshTokenDto(); // UserRefreshTokenDto | 

apiInstance.refreshToken(body, (error, data, response) => {
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
 **body** | [**UserRefreshTokenDto**](UserRefreshTokenDto.md)|  | 

### Return type

[**UserRefreshTokenResponseDto**](UserRefreshTokenResponseDto.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="resetPasswordRequest"></a>
# **resetPasswordRequest**
> resetPasswordRequest(body)

Realizar alteração de senha

### Example
```javascript
import {ParcelaExpressApi} from 'parcela_express_api';

let apiInstance = new ParcelaExpressApi.AuthApi();
let body = new ParcelaExpressApi.ResetPasswordRequestDto(); // ResetPasswordRequestDto | 

apiInstance.resetPasswordRequest(body, (error, data, response) => {
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
 **body** | [**ResetPasswordRequestDto**](ResetPasswordRequestDto.md)|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

