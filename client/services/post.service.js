import axios from 'axios';
import { POST_ROUTES } from '../constants/routes.js';

export class PostService {
    /**
     * Creates a post
     * 
     * @param {Object} post the post object to be sent to the server
     * @returns {Promise} the response from the server
     */
    static createPost(post) {
        return axios.post(POST_ROUTES.CREATE_POST(), post);
    }

    /**
     * Gets a post within a distance
     * 
     * @param {Number} distance the distance to search for posts
     * @returns {Promise} the response from the server
     */
    static getPostsInDistance(distance) {
        return axios.get(POST_ROUTES.GET_POST_IN_DISTANCE(distance));
    }

    /**
     * Gets a post by user id
     * 
     * @param {String} id the id of the user to search for posts
     * @returns {Promise} the response from the server
     */
    static getPostsByUserId(id) {
        return axios.get(POST_ROUTES.GET_POST(id));
    }

    /**
     * Updates a post
     * 
     * @param {String} postId the id of the post to be updated
     * @param {String} userId the id of the user to be updated
     * @param {Object} post the post object to be sent to the server
     * @returns {Promise} the response from the server
     */
    static updatePost(postId, userId, post) {
        return axios.put(POST_ROUTES.UPDATE_POST(postId, userId), post);
    }

    /**
     * Deletes a post
     * 
     * @param {String} postId the id of the post to be deleted
     * @param {String} userId the id of the user to be deleted
     * @returns {Promise} the response from the server
     */
    static deletePost(postId, userId) {
        return axios.delete(POST_ROUTES.DELETE_POST(postId, userId));
    }
}