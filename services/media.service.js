import axios from '../var/task/node_modules/axios/dist/node/axios.cjs';
import { MEDIA_ROUTES } from '../constants/routes.js';

export class MediaService {
    /**
     * Get all media
     * 
     * @returns {Promise} the response from the server
     */
    static getAllMedia() {
        return axios.get(MEDIA_ROUTES.GET_ALL_MEDIA());
    }

    /**
     * Get media by id
     * 
     * @param {String} id the id of the media to be retrieved
     * @returns {Promise} the response from the server
     */
    static getMediaById(id) {
        return axios.get(MEDIA_ROUTES.GET_MEDIA_BY_ID(id));
    }

    /**
     * Get media by post id
     * 
     * @param {String} postId the id of the post to be retrieved
     * @returns {Promise} the response from the server
     */
    static getMediaByPostId(postId) {
        return axios.get(MEDIA_ROUTES.GET_MEDIA_BY_POST_ID(postId));
    }

    /**
     * Get media by user id
     * 
     * @param {String} userId the id of the user to be retrieved
     * @returns {Promise} the response from the server
     */
    static getMediaByUserId(userId) {
        return axios.get(MEDIA_ROUTES.GET_MEDIA_BY_USER_ID(userId));
    }
}