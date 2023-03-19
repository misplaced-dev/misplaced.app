import axios from 'axios';
import { USER_ROUTES } from '../constants/route';

export class UserService {
    /**
     * Gets a user
     * 
     * @param {String} id the id of the user to be retrieved
     * @returns {Promise} the response from the server
     */
    static getUser(id) {
        return axios.get(USER_ROUTES.GET_USER(id));
    }

    /**
     * Updates a user
     * 
     * @param {String} id the id of the user to be updated
     * @param {Object} user the user object to be sent to the server
     * @returns {Promise} the response from the server
     */
    static updateUser(id, user) {
        return axios.put(USER_ROUTES.UPDATE_USER(id), user);
    }

    /**
     * Deletes a user
     * 
     * @param {String} id the id of the user to be deleted
     * @returns {Promise} the response from the server
     */
    static deleteUser(id) {
        return axios.delete(USER_ROUTES.DELETE_USER(id));
    }
}