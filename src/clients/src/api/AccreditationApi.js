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

/**
* Accreditation service.
* @module api/AccreditationApi
* @version 1.0
*/
export default class AccreditationApi {

    /**
    * Constructs a new AccreditationApi. 
    * @alias module:api/AccreditationApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the createAccreditation operation.
     * @callback module:api/AccreditationApi~createAccreditationCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Iniciar rotina de credenciamento.
     * @param {String} seller_id 
     * @param {module:api/AccreditationApi~createAccreditationCallback} callback The callback function, accepting three arguments: error, data, response
     */
    createAccreditation(seller_id, callback) {
      let postBody = null;
      // verify the required parameter 'seller_id' is set
      if (seller_id === undefined || seller_id === null) {
        throw new Error("Missing the required parameter 'seller_id' when calling createAccreditation");
      }

      let pathParams = {
        'seller_id': seller_id
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
        '/v1/accreditations/{seller_id}', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
