/*
 * Parcela Express API
 * Parcela Express API
 *
 * OpenAPI spec version: 1.0
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 3.0.30
 *
 * Do not edit the class manually.
 *
 */
import {ApiClient} from "../ApiClient";
import {GetSimulationDto} from '../model/GetSimulationDto';

/**
* Simulation service.
* @module api/SimulationApi
* @version 1.0
*/
export class SimulationApi {

    /**
    * Constructs a new SimulationApi. 
    * @alias module:api/SimulationApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instanc
    e} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }

    /**
     * Callback function to receive the result of the listSimulation operation.
     * @callback moduleapi/SimulationApi~listSimulationCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/GetSimulationDto>{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Listar simulação de parcelas
     * @param {String} sellerId 
     * @param {Number} amountCents 
     * @param {Object} opts Optional parameters
     * @param {Number} opts.fee 
     * @param {Boolean} opts.isPos 
     * @param {module:api/SimulationApi~listSimulationCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    listSimulation(sellerId, amountCents, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'sellerId' is set
      if (sellerId === undefined || sellerId === null) {
        throw new Error("Missing the required parameter 'sellerId' when calling listSimulation");
      }
      // verify the required parameter 'amountCents' is set
      if (amountCents === undefined || amountCents === null) {
        throw new Error("Missing the required parameter 'amountCents' when calling listSimulation");
      }

      let pathParams = {
        'seller_id': sellerId
      };
      let queryParams = {
        'amount_cents': amountCents,'fee': opts['fee'],'is_pos': opts['isPos']
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = [GetSimulationDto];

      return this.apiClient.callApi(
        '/v1/simulation/sellers/{seller_id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

}