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
import CreateSalePlanDto from '../model/CreateSalePlanDto';
import GetPaymentTypeDto from '../model/GetPaymentTypeDto';
import GetSalePlanDto from '../model/GetSalePlanDto';
import IncludePaymentTypesDto from '../model/IncludePaymentTypesDto';
import PaginatedDto from '../model/PaginatedDto';

/**
* SalesPlans service.
* @module api/SalesPlansApi
* @version 1.0
*/
export default class SalesPlansApi {

    /**
    * Constructs a new SalesPlansApi. 
    * @alias module:api/SalesPlansApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the addPaymentType operation.
     * @callback module:api/SalesPlansApi~addPaymentTypeCallback
     * @param {String} error Error message, if any.
     * @param {module:model/GetSalePlanDto} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Associar um ou mais tipo(s) de pagamento(s) a um plano de vendas
     * @param {String} salePlanId 
     * @param {module:model/IncludePaymentTypesDto} IncludePaymentTypesDto 
     * @param {module:api/SalesPlansApi~addPaymentTypeCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/GetSalePlanDto}
     */
    addPaymentType(salePlanId, IncludePaymentTypesDto, callback) {
      let postBody = IncludePaymentTypesDto;
      // verify the required parameter 'salePlanId' is set
      if (salePlanId === undefined || salePlanId === null) {
        throw new Error("Missing the required parameter 'salePlanId' when calling addPaymentType");
      }
      // verify the required parameter 'IncludePaymentTypesDto' is set
      if (IncludePaymentTypesDto === undefined || IncludePaymentTypesDto === null) {
        throw new Error("Missing the required parameter 'IncludePaymentTypesDto' when calling addPaymentType");
      }

      let pathParams = {
        'salePlanId': salePlanId
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
      let returnType = GetSalePlanDto;
      return this.apiClient.callApi(
        '/v1/sales-plans/{salePlanId}/payment-types', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the createSalesPlan operation.
     * @callback module:api/SalesPlansApi~createSalesPlanCallback
     * @param {String} error Error message, if any.
     * @param {module:model/GetSalePlanDto} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Criar plano de vendas
     * @param {module:model/CreateSalePlanDto} CreateSalePlanDto 
     * @param {module:api/SalesPlansApi~createSalesPlanCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/GetSalePlanDto}
     */
    createSalesPlan(CreateSalePlanDto, callback) {
      let postBody = CreateSalePlanDto;
      // verify the required parameter 'CreateSalePlanDto' is set
      if (CreateSalePlanDto === undefined || CreateSalePlanDto === null) {
        throw new Error("Missing the required parameter 'CreateSalePlanDto' when calling createSalesPlan");
      }

      let pathParams = {
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
      let returnType = GetSalePlanDto;
      return this.apiClient.callApi(
        '/v1/sales-plans', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getSalePlan operation.
     * @callback module:api/SalesPlansApi~getSalePlanCallback
     * @param {String} error Error message, if any.
     * @param {module:model/GetSalePlanDto} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Obtém dados do plano de venda através do id.
     * @param {String} salePlanId 
     * @param {module:api/SalesPlansApi~getSalePlanCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/GetSalePlanDto}
     */
    getSalePlan(salePlanId, callback) {
      let postBody = null;
      // verify the required parameter 'salePlanId' is set
      if (salePlanId === undefined || salePlanId === null) {
        throw new Error("Missing the required parameter 'salePlanId' when calling getSalePlan");
      }

      let pathParams = {
        'salePlanId': salePlanId
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
      let returnType = GetSalePlanDto;
      return this.apiClient.callApi(
        '/v1/sales-plans/{salePlanId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the listAllSalePlan operation.
     * @callback module:api/SalesPlansApi~listAllSalePlanCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PaginatedDto} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Listar Todos planos de venda
     * @param {Number} limit 
     * @param {Number} current_page 
     * @param {Object} opts Optional parameters
     * @param {module:model/String} opts.sort  (default to 'time-descending')
     * @param {String} opts.id 
     * @param {Array.<module:model/String>} opts.type 
     * @param {String} opts.name 
     * @param {module:api/SalesPlansApi~listAllSalePlanCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PaginatedDto}
     */
    listAllSalePlan(limit, current_page, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'limit' is set
      if (limit === undefined || limit === null) {
        throw new Error("Missing the required parameter 'limit' when calling listAllSalePlan");
      }
      // verify the required parameter 'current_page' is set
      if (current_page === undefined || current_page === null) {
        throw new Error("Missing the required parameter 'current_page' when calling listAllSalePlan");
      }

      let pathParams = {
      };
      let queryParams = {
        'limit': limit,
        'current_page': current_page,
        'sort': opts['sort'],
        'id': opts['id'],
        'type': this.apiClient.buildCollectionParam(opts['type'], 'multi'),
        'name': opts['name']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['bearer'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = PaginatedDto;
      return this.apiClient.callApi(
        '/v1/sales-plans', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the listSalePlan operation.
     * @callback module:api/SalesPlansApi~listSalePlanCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/GetSalePlanDto>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Listar planos de venda
     * @param {Object} opts Optional parameters
     * @param {module:model/String} opts.mode 
     * @param {module:api/SalesPlansApi~listSalePlanCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/GetSalePlanDto>}
     */
    listSalePlan(opts, callback) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
        'mode': opts['mode']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['bearer'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = [GetSalePlanDto];
      return this.apiClient.callApi(
        '/v1/sales-plans/list', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the listSalePlanPaymentTypes operation.
     * @callback module:api/SalesPlansApi~listSalePlanPaymentTypesCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/GetPaymentTypeDto>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Listar as formas de pagamento do plano de vendas informado
     * @param {String} salePlanId 
     * @param {module:api/SalesPlansApi~listSalePlanPaymentTypesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/GetPaymentTypeDto>}
     */
    listSalePlanPaymentTypes(salePlanId, callback) {
      let postBody = null;
      // verify the required parameter 'salePlanId' is set
      if (salePlanId === undefined || salePlanId === null) {
        throw new Error("Missing the required parameter 'salePlanId' when calling listSalePlanPaymentTypes");
      }

      let pathParams = {
        'salePlanId': salePlanId
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
      let returnType = [GetPaymentTypeDto];
      return this.apiClient.callApi(
        '/v1/sales-plans/{salePlanId}/payment-types', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
