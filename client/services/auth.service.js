import axios from "axios";
import { USER_ROUTES } from "../constants/route";

export class AuthService {
    /**
     * Registers a user
     * 
     * @param {Object} user the user object to be sent to the server
     * @returns {Promise} the response from the server
     */
    static register(user) {
        return axios.post(USER_ROUTES.REGISTER_USER(), user);
    }

    /**
     * Logs in a user
     * 
     * @param {Object} user the user object to be sent to the server
     * @returns {Promise} the response from the server
     */
    static login(user) {
        return axios.post(USER_ROUTES.LOGIN_USER(), user);
    }

    /**
     * Checks if a user is logged in
     * 
     * @returns {Boolean} true if the user is logged in, false otherwise
     */
    static isLoggedIn() {
        const id = this.getToken("id");
        if (id !== null) {
            return true;
        } else {
            return false;
        }
    }

    /**
     * Gets the token from the local storage
     * 
     * @param {String} name the id of the token to be retrieved
     * @returns {String} the token from the local storage
     */
    static getToken(name) {
        return localStorage.getItem(name);
    }

    /**
     * Sets the token in the local storage
     * 
     * @param {String} name the name of the token to be stored
     * @param {String} token the value token to be stored in the local storage
     */
    static setToken(name, token) {
        localStorage.setItem(name, token);
    }
}