/**
 * Parcela Express API
 * Parcela Express API
 *
 * The version of the OpenAPI document: 1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */


import ApiClient from "../ApiClient";
import ForgotPasswordRequestDto from '../model/ForgotPasswordRequestDto';
import GetForgotPasswordRequestDto from '../model/GetForgotPasswordRequestDto';
import ResetPasswordRequestDto from '../model/ResetPasswordRequestDto';
import UserLoginDto from '../model/UserLoginDto';
import UserLoginResponseDto from '../model/UserLoginResponseDto';
import UserRefreshTokenDto from '../model/UserRefreshTokenDto';
import UserRefreshTokenResponseDto from '../model/UserRefreshTokenResponseDto';

/**
* Auth service.
* @module api/AuthApi
* @version 1.0
*/
export default class AuthApi {

    /**
    * Constructs a new AuthApi. 
    * @alias module:api/AuthApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the forgotPasswordRequest operation.
     * @callback module:api/AuthApi~forgotPasswordRequestCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Solicitar alteração de senha
     * @param {module:model/ForgotPasswordRequestDto} ForgotPasswordRequestDto 
     * @param {module:api/AuthApi~forgotPasswordRequestCallback} callback The callback function, accepting three arguments: error, data, response
     */
    forgotPasswordRequest(ForgotPasswordRequestDto, callback) {
      let postBody = ForgotPasswordRequestDto;
      // verify the required parameter 'ForgotPasswordRequestDto' is set
      if (ForgotPasswordRequestDto === undefined || ForgotPasswordRequestDto === null) {
        throw new Error("Missing the required parameter 'ForgotPasswordRequestDto' when calling forgotPasswordRequest");
      }

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = ['application/json'];
      let accepts = [];
      let returnType = null;
      return this.apiClient.callApi(
        '/v1/auth/forgot-password', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getForgotPasswordRequestData operation.
     * @callback module:api/AuthApi~getForgotPasswordRequestDataCallback
     * @param {String} error Error message, if any.
     * @param {module:model/GetForgotPasswordRequestDto} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Validar token enviado no esqueci minha senha
     * @param {String} token 
     * @param {module:api/AuthApi~getForgotPasswordRequestDataCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/GetForgotPasswordRequestDto}
     */
    getForgotPasswordRequestData(token, callback) {
      let postBody = null;
      // verify the required parameter 'token' is set
      if (token === undefined || token === null) {
        throw new Error("Missing the required parameter 'token' when calling getForgotPasswordRequestData");
      }

      let pathParams = {
        'token': token
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = GetForgotPasswordRequestDto;
      return this.apiClient.callApi(
        '/v1/auth/forgot-password/{token}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the login operation.
     * @callback module:api/AuthApi~loginCallback
     * @param {String} error Error message, if any.
     * @param {module:model/UserLoginResponseDto} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Realizar autenticação na aplicação
     * @param {module:model/UserLoginDto} UserLoginDto 
     * @param {module:api/AuthApi~loginCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/UserLoginResponseDto}
     */
    login(UserLoginDto, callback) {
      let postBody = UserLoginDto;
      // verify the required parameter 'UserLoginDto' is set
      if (UserLoginDto === undefined || UserLoginDto === null) {
        throw new Error("Missing the required parameter 'UserLoginDto' when calling login");
      }

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = UserLoginResponseDto;
      return this.apiClient.callApi(
        '/v1/auth/login', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the loginV2 operation.
     * @callback module:api/AuthApi~loginV2Callback
     * @param {String} error Error message, if any.
     * @param {module:model/UserLoginResponseDto} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Realizar autenticação na aplicação
     * @param {module:model/UserLoginDto} UserLoginDto 
     * @param {module:api/AuthApi~loginV2Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/UserLoginResponseDto}
     */
    loginV2(UserLoginDto, callback) {
      let postBody = UserLoginDto;
      // verify the required parameter 'UserLoginDto' is set
      if (UserLoginDto === undefined || UserLoginDto === null) {
        throw new Error("Missing the required parameter 'UserLoginDto' when calling loginV2");
      }

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = UserLoginResponseDto;
      return this.apiClient.callApi(
        '/v2/auth/login', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the refreshToken operation.
     * @callback module:api/AuthApi~refreshTokenCallback
     * @param {String} error Error message, if any.
     * @param {module:model/UserRefreshTokenResponseDto} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Atualizar o token da aplicação
     * @param {module:model/UserRefreshTokenDto} UserRefreshTokenDto 
     * @param {module:api/AuthApi~refreshTokenCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/UserRefreshTokenResponseDto}
     */
    refreshToken(UserRefreshTokenDto, callback) {
      let postBody = UserRefreshTokenDto;
      // verify the required parameter 'UserRefreshTokenDto' is set
      if (UserRefreshTokenDto === undefined || UserRefreshTokenDto === null) {
        throw new Error("Missing the required parameter 'UserRefreshTokenDto' when calling refreshToken");
      }

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = UserRefreshTokenResponseDto;
      return this.apiClient.callApi(
        '/v1/auth/refresh', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the refreshTokenV2 operation.
     * @callback module:api/AuthApi~refreshTokenV2Callback
     * @param {String} error Error message, if any.
     * @param {module:model/UserRefreshTokenResponseDto} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Atualizar o token da aplicação
     * @param {module:model/UserRefreshTokenDto} UserRefreshTokenDto 
     * @param {module:api/AuthApi~refreshTokenV2Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/UserRefreshTokenResponseDto}
     */
    refreshTokenV2(UserRefreshTokenDto, callback) {
      let postBody = UserRefreshTokenDto;
      // verify the required parameter 'UserRefreshTokenDto' is set
      if (UserRefreshTokenDto === undefined || UserRefreshTokenDto === null) {
        throw new Error("Missing the required parameter 'UserRefreshTokenDto' when calling refreshTokenV2");
      }

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = UserRefreshTokenResponseDto;
      return this.apiClient.callApi(
        '/v2/auth/refresh', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the resetPasswordRequest operation.
     * @callback module:api/AuthApi~resetPasswordRequestCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Realizar alteração de senha
     * @param {module:model/ResetPasswordRequestDto} ResetPasswordRequestDto 
     * @param {module:api/AuthApi~resetPasswordRequestCallback} callback The callback function, accepting three arguments: error, data, response
     */
    resetPasswordRequest(ResetPasswordRequestDto, callback) {
      let postBody = ResetPasswordRequestDto;
      // verify the required parameter 'ResetPasswordRequestDto' is set
      if (ResetPasswordRequestDto === undefined || ResetPasswordRequestDto === null) {
        throw new Error("Missing the required parameter 'ResetPasswordRequestDto' when calling resetPasswordRequest");
      }

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = ['application/json'];
      let accepts = [];
      let returnType = null;
      return this.apiClient.callApi(
        '/v1/auth/reset-password', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
