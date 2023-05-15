import axios from '../var/task/node_modules/axios/dist/node/axios.cjs';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { USER_ROUTES } from "../constants/routes.js";

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
        const id = this.getToken("userId");
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
    static async getToken(name) {
        return await AsyncStorage.getItem(name);
    }

    /**
     * Sets the token in the local storage
     * 
     * @param {String} name the name of the token to be stored
     * @param {String} token the value token to be stored in the local storage
     */
    static async setToken(name, token) {
        await AsyncStorage.setItem(name, token);
    }

    /**
     * Removes the token from the local storage
     * 
     * @param {String} name the name of the token to be removed
     * @returns {Promise} the response from the server
     */
    static async signout(name) {
        return await AsyncStorage.removeItem(name);
    }
}