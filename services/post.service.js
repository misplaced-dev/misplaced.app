import axios from '../node_modules/axios/dist/node/axios.cjs';
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
 * Gets all posts
 * 
 * @returns {Promise} The response from the server
 */
static getAllPosts() {
    return axios.get(POST_ROUTES.GET_ALL_POSTS);
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
     * Gets a post by  id
     * 
     * @param {String} id the id of the user to search for posts
     * @returns {Promise} the response from the server
     */
      static getPostById(id) {
        return axios.get(POST_ROUTES.GET_POST_BY_ID(id));
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