import axios from '/var/task/node_modules/axios/dist/node/axios.cjs';
import { LOCATION_ROUTES } from '../constants/routes';

export class LocationService {
    /**
     * Creates a location
     * 
     * @param {Object} location the location object to be sent to the server
     * @returns {Promise} the response from the server
     */
    static createLocation(location) {
        return axios.post(LOCATION_ROUTES.CREATE_LOCATION(), location);
    }

    /**
     * Gets all locations
     * 
     * @returns {Promise} the response from the server
     */
    static getLocations() {
        return axios.get(LOCATION_ROUTES.GET_LOCATIONS());
    }

    /**
     * Gets a location by id
     * 
     * @param {String} id the id of the location to be retrieved
     * @returns {Promise} the response from the server
     */
    static getLocation(id) {
        return axios.get(LOCATION_ROUTES.GET_LOCATION(id));
    }

    /**
     * Updates a location
     * 
     * @param {String} id the id of the location to be updated
     * @param {Object} location the location object to be sent to the server
     * @returns {Promise} the response from the server
     */
    static updateLocation(id, location) {
        return axios.put(LOCATION_ROUTES.UPDATE_LOCATION(id), location);
    }

    /**
     * Deletes a location
     * 
     * @param {String} id the id of the location to be deleted
     * @returns {Promise} the response from the server
     */
    static deleteLocation(id) {
        return axios.delete(LOCATION_ROUTES.DELETE_LOCATION(id));
    }
}
