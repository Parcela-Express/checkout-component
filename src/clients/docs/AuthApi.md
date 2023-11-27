# ParcelaExpressApi.AuthApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**forgotPasswordRequest**](AuthApi.md#forgotPasswordRequest) | **POST** /v1/auth/forgot-password | Solicitar alteração de senha
[**getForgotPasswordRequestData**](AuthApi.md#getForgotPasswordRequestData) | **GET** /v1/auth/forgot-password/{token} | Validar token enviado no esqueci minha senha
[**login**](AuthApi.md#login) | **POST** /v1/auth/login | Realizar autenticação na aplicação
[**loginV2**](AuthApi.md#loginV2) | **POST** /v2/auth/login | Realizar autenticação na aplicação
[**refreshToken**](AuthApi.md#refreshToken) | **POST** /v1/auth/refresh | Atualizar o token da aplicação
[**refreshTokenV2**](AuthApi.md#refreshTokenV2) | **POST** /v2/auth/refresh | Atualizar o token da aplicação
[**resetPasswordRequest**](AuthApi.md#resetPasswordRequest) | **POST** /v1/auth/reset-password | Realizar alteração de senha



## forgotPasswordRequest

> forgotPasswordRequest(ForgotPasswordRequestDto)

Solicitar alteração de senha

### Example

```javascript
import ParcelaExpressApi from 'parcela_express_api';

let apiInstance = new ParcelaExpressApi.AuthApi();
let ForgotPasswordRequestDto = new ParcelaExpressApi.ForgotPasswordRequestDto(); // ForgotPasswordRequestDto | 
apiInstance.forgotPasswordRequest(ForgotPasswordRequestDto, (error, data, response) => {
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
 **ForgotPasswordRequestDto** | [**ForgotPasswordRequestDto**](ForgotPasswordRequestDto.md)|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: Not defined


## getForgotPasswordRequestData

> GetForgotPasswordRequestDto getForgotPasswordRequestData(token)

Validar token enviado no esqueci minha senha

### Example

```javascript
import ParcelaExpressApi from 'parcela_express_api';

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


## login

> UserLoginResponseDto login(UserLoginDto)

Realizar autenticação na aplicação

### Example

```javascript
import ParcelaExpressApi from 'parcela_express_api';

let apiInstance = new ParcelaExpressApi.AuthApi();
let UserLoginDto = new ParcelaExpressApi.UserLoginDto(); // UserLoginDto | 
apiInstance.login(UserLoginDto, (error, data, response) => {
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
 **UserLoginDto** | [**UserLoginDto**](UserLoginDto.md)|  | 

### Return type

[**UserLoginResponseDto**](UserLoginResponseDto.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## loginV2

> UserLoginResponseDto loginV2(UserLoginDto)

Realizar autenticação na aplicação

### Example

```javascript
import ParcelaExpressApi from 'parcela_express_api';

let apiInstance = new ParcelaExpressApi.AuthApi();
let UserLoginDto = new ParcelaExpressApi.UserLoginDto(); // UserLoginDto | 
apiInstance.loginV2(UserLoginDto, (error, data, response) => {
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
 **UserLoginDto** | [**UserLoginDto**](UserLoginDto.md)|  | 

### Return type

[**UserLoginResponseDto**](UserLoginResponseDto.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## refreshToken

> UserRefreshTokenResponseDto refreshToken(UserRefreshTokenDto)

Atualizar o token da aplicação

### Example

```javascript
import ParcelaExpressApi from 'parcela_express_api';

let apiInstance = new ParcelaExpressApi.AuthApi();
let UserRefreshTokenDto = new ParcelaExpressApi.UserRefreshTokenDto(); // UserRefreshTokenDto | 
apiInstance.refreshToken(UserRefreshTokenDto, (error, data, response) => {
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
 **UserRefreshTokenDto** | [**UserRefreshTokenDto**](UserRefreshTokenDto.md)|  | 

### Return type

[**UserRefreshTokenResponseDto**](UserRefreshTokenResponseDto.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## refreshTokenV2

> UserRefreshTokenResponseDto refreshTokenV2(UserRefreshTokenDto)

Atualizar o token da aplicação

### Example

```javascript
import ParcelaExpressApi from 'parcela_express_api';

let apiInstance = new ParcelaExpressApi.AuthApi();
let UserRefreshTokenDto = new ParcelaExpressApi.UserRefreshTokenDto(); // UserRefreshTokenDto | 
apiInstance.refreshTokenV2(UserRefreshTokenDto, (error, data, response) => {
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
 **UserRefreshTokenDto** | [**UserRefreshTokenDto**](UserRefreshTokenDto.md)|  | 

### Return type

[**UserRefreshTokenResponseDto**](UserRefreshTokenResponseDto.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## resetPasswordRequest

> resetPasswordRequest(ResetPasswordRequestDto)

Realizar alteração de senha

### Example

```javascript
import ParcelaExpressApi from 'parcela_express_api';

let apiInstance = new ParcelaExpressApi.AuthApi();
let ResetPasswordRequestDto = new ParcelaExpressApi.ResetPasswordRequestDto(); // ResetPasswordRequestDto | 
apiInstance.resetPasswordRequest(ResetPasswordRequestDto, (error, data, response) => {
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
 **ResetPasswordRequestDto** | [**ResetPasswordRequestDto**](ResetPasswordRequestDto.md)|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: Not defined

