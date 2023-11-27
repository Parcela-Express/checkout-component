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
import CreateBilletDto from '../model/CreateBilletDto';
import CreateBilletHybridDto from '../model/CreateBilletHybridDto';
import CreateBilletInternalDto from '../model/CreateBilletInternalDto';
import GetBilletDto from '../model/GetBilletDto';
import GetBilletUrlDto from '../model/GetBilletUrlDto';
import GetBilletV3Dto from '../model/GetBilletV3Dto';
import GetOneBilletDto from '../model/GetOneBilletDto';

/**
* Billets service.
* @module api/BilletsApi
* @version 1.0
*/
export default class BilletsApi {

    /**
    * Constructs a new BilletsApi. 
    * @alias module:api/BilletsApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the createBilletHybrid operation.
     * @callback module:api/BilletsApi~createBilletHybridCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/GetBilletDto>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Criar novo lote de boletos hibridos
     * @param {String} sellerId 
     * @param {Array.<module:model/CreateBilletHybridDto>} CreateBilletHybridDto 
     * @param {module:api/BilletsApi~createBilletHybridCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/GetBilletDto>}
     */
    createBilletHybrid(sellerId, CreateBilletHybridDto, callback) {
      let postBody = CreateBilletHybridDto;
      // verify the required parameter 'sellerId' is set
      if (sellerId === undefined || sellerId === null) {
        throw new Error("Missing the required parameter 'sellerId' when calling createBilletHybrid");
      }
      // verify the required parameter 'CreateBilletHybridDto' is set
      if (CreateBilletHybridDto === undefined || CreateBilletHybridDto === null) {
        throw new Error("Missing the required parameter 'CreateBilletHybridDto' when calling createBilletHybrid");
      }

      let pathParams = {
        'sellerId': sellerId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['bearer'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = [GetBilletDto];
      return this.apiClient.callApi(
        '/v2/billets/{sellerId}/hybrid', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the createBilletHybridV3 operation.
     * @callback module:api/BilletsApi~createBilletHybridV3Callback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/GetBilletV3Dto>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Criar novo lote de boletos hibridos
     * @param {String} sellerId 
     * @param {Array.<module:model/CreateBilletHybridDto>} CreateBilletHybridDto 
     * @param {module:api/BilletsApi~createBilletHybridV3Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/GetBilletV3Dto>}
     */
    createBilletHybridV3(sellerId, CreateBilletHybridDto, callback) {
      let postBody = CreateBilletHybridDto;
      // verify the required parameter 'sellerId' is set
      if (sellerId === undefined || sellerId === null) {
        throw new Error("Missing the required parameter 'sellerId' when calling createBilletHybridV3");
      }
      // verify the required parameter 'CreateBilletHybridDto' is set
      if (CreateBilletHybridDto === undefined || CreateBilletHybridDto === null) {
        throw new Error("Missing the required parameter 'CreateBilletHybridDto' when calling createBilletHybridV3");
      }

      let pathParams = {
        'sellerId': sellerId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['bearer'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = [GetBilletV3Dto];
      return this.apiClient.callApi(
        '/v3/billets/{sellerId}/hybrid', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the createBilletPayment operation.
     * @callback module:api/BilletsApi~createBilletPaymentCallback
     * @param {String} error Error message, if any.
     * @param {module:model/GetBilletDto} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Criar novo pagamento de boleto
     * @param {String} sellerId 
     * @param {module:model/CreateBilletDto} CreateBilletDto 
     * @param {module:api/BilletsApi~createBilletPaymentCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/GetBilletDto}
     */
    createBilletPayment(sellerId, CreateBilletDto, callback) {
      let postBody = CreateBilletDto;
      // verify the required parameter 'sellerId' is set
      if (sellerId === undefined || sellerId === null) {
        throw new Error("Missing the required parameter 'sellerId' when calling createBilletPayment");
      }
      // verify the required parameter 'CreateBilletDto' is set
      if (CreateBilletDto === undefined || CreateBilletDto === null) {
        throw new Error("Missing the required parameter 'CreateBilletDto' when calling createBilletPayment");
      }

      let pathParams = {
        'sellerId': sellerId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['bearer'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = GetBilletDto;
      return this.apiClient.callApi(
        '/v1/billets/{sellerId}', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the createBilletPaymentInternal operation.
     * @callback module:api/BilletsApi~createBilletPaymentInternalCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/GetBilletDto>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Criar novo lote de pagamento de boleto (PEX)
     * @param {String} sellerId 
     * @param {Array.<module:model/CreateBilletInternalDto>} CreateBilletInternalDto 
     * @param {module:api/BilletsApi~createBilletPaymentInternalCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/GetBilletDto>}
     */
    createBilletPaymentInternal(sellerId, CreateBilletInternalDto, callback) {
      let postBody = CreateBilletInternalDto;
      // verify the required parameter 'sellerId' is set
      if (sellerId === undefined || sellerId === null) {
        throw new Error("Missing the required parameter 'sellerId' when calling createBilletPaymentInternal");
      }
      // verify the required parameter 'CreateBilletInternalDto' is set
      if (CreateBilletInternalDto === undefined || CreateBilletInternalDto === null) {
        throw new Error("Missing the required parameter 'CreateBilletInternalDto' when calling createBilletPaymentInternal");
      }

      let pathParams = {
        'sellerId': sellerId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['bearer'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = [GetBilletDto];
      return this.apiClient.callApi(
        '/v2/billets/{sellerId}/internal', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the createBilletPaymentV2 operation.
     * @callback module:api/BilletsApi~createBilletPaymentV2Callback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/GetBilletDto>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Criar novo lote de pagamento de boleto
     * @param {String} sellerId 
     * @param {Array.<module:model/CreateBilletDto>} CreateBilletDto 
     * @param {module:api/BilletsApi~createBilletPaymentV2Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/GetBilletDto>}
     */
    createBilletPaymentV2(sellerId, CreateBilletDto, callback) {
      let postBody = CreateBilletDto;
      // verify the required parameter 'sellerId' is set
      if (sellerId === undefined || sellerId === null) {
        throw new Error("Missing the required parameter 'sellerId' when calling createBilletPaymentV2");
      }
      // verify the required parameter 'CreateBilletDto' is set
      if (CreateBilletDto === undefined || CreateBilletDto === null) {
        throw new Error("Missing the required parameter 'CreateBilletDto' when calling createBilletPaymentV2");
      }

      let pathParams = {
        'sellerId': sellerId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['bearer'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = [GetBilletDto];
      return this.apiClient.callApi(
        '/v2/billets/{sellerId}', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the createBilletPaymentV3 operation.
     * @callback module:api/BilletsApi~createBilletPaymentV3Callback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/GetBilletV3Dto>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Criar novo lote de pagamento de boleto
     * @param {String} sellerId 
     * @param {Array.<module:model/CreateBilletDto>} CreateBilletDto 
     * @param {module:api/BilletsApi~createBilletPaymentV3Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/GetBilletV3Dto>}
     */
    createBilletPaymentV3(sellerId, CreateBilletDto, callback) {
      let postBody = CreateBilletDto;
      // verify the required parameter 'sellerId' is set
      if (sellerId === undefined || sellerId === null) {
        throw new Error("Missing the required parameter 'sellerId' when calling createBilletPaymentV3");
      }
      // verify the required parameter 'CreateBilletDto' is set
      if (CreateBilletDto === undefined || CreateBilletDto === null) {
        throw new Error("Missing the required parameter 'CreateBilletDto' when calling createBilletPaymentV3");
      }

      let pathParams = {
        'sellerId': sellerId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['bearer'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = [GetBilletV3Dto];
      return this.apiClient.callApi(
        '/v3/billets/{sellerId}', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getBilletUrl operation.
     * @callback module:api/BilletsApi~getBilletUrlCallback
     * @param {String} error Error message, if any.
     * @param {module:model/GetBilletUrlDto} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retorna a URL do boleto
     * @param {String} billetId 
     * @param {module:api/BilletsApi~getBilletUrlCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/GetBilletUrlDto}
     */
    getBilletUrl(billetId, callback) {
      let postBody = null;
      // verify the required parameter 'billetId' is set
      if (billetId === undefined || billetId === null) {
        throw new Error("Missing the required parameter 'billetId' when calling getBilletUrl");
      }

      let pathParams = {
        'billetId': billetId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['bearer'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = GetBilletUrlDto;
      return this.apiClient.callApi(
        '/v1/billets/{billetId}/url', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the listOneBillet operation.
     * @callback module:api/BilletsApi~listOneBilletCallback
     * @param {String} error Error message, if any.
     * @param {module:model/GetOneBilletDto} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Lista um boleto com status
     * @param {String} id 
     * @param {module:api/BilletsApi~listOneBilletCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/GetOneBilletDto}
     */
    listOneBillet(id, callback) {
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling listOneBillet");
      }

      let pathParams = {
        'id': id
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['bearer'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = GetOneBilletDto;
      return this.apiClient.callApi(
        '/v1/billets/{id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the payBillet operation.
     * @callback module:api/BilletsApi~payBilletCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Pagar boleto (em ambiente de desenvolvimento)
     * @param {String} billetId 
     * @param {module:api/BilletsApi~payBilletCallback} callback The callback function, accepting three arguments: error, data, response
     */
    payBillet(billetId, callback) {
      let postBody = null;
      // verify the required parameter 'billetId' is set
      if (billetId === undefined || billetId === null) {
        throw new Error("Missing the required parameter 'billetId' when calling payBillet");
      }

      let pathParams = {
        'billetId': billetId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['bearer'];
      let contentTypes = [];
      let accepts = [];
      let returnType = null;
      return this.apiClient.callApi(
        '/v1/billets/{billetId}/pay', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the writeOffBillet operation.
     * @callback module:api/BilletsApi~writeOffBilletCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Dar baixa do boleto
     * @param {String} sellerId ID do estabelecimento
     * @param {String} billetId ID do boleto
     * @param {module:api/BilletsApi~writeOffBilletCallback} callback The callback function, accepting three arguments: error, data, response
     */
    writeOffBillet(sellerId, billetId, callback) {
      let postBody = null;
      // verify the required parameter 'sellerId' is set
      if (sellerId === undefined || sellerId === null) {
        throw new Error("Missing the required parameter 'sellerId' when calling writeOffBillet");
      }
      // verify the required parameter 'billetId' is set
      if (billetId === undefined || billetId === null) {
        throw new Error("Missing the required parameter 'billetId' when calling writeOffBillet");
      }

      let pathParams = {
        'sellerId': sellerId,
        'billetId': billetId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['bearer'];
      let contentTypes = [];
      let accepts = [];
      let returnType = null;
      return this.apiClient.callApi(
        '/v1/billets/{sellerId}/{billetId}/void', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
