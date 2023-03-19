import { API_URL } from './env.js';

export const USER_ROUTES = {
    REGISTER_USER() {
        return `${API_URL}api/user/register`;
    },
    LOGIN_USER() {
        return `${API_URL}api/user/login`;
    },
    GET_USER(id) {
        return `${API_URL}api/user/${id}`;
    },
    UPDATE_USER(id) {
        return `${API_URL}api/user/${id}`;
    },
    DELETE_USER(id) {
        return `${API_URL}api/user/${id}`;
    }
};

export const POST_ROUTES = {
    CREATE_POST() {
        return `${API_URL}api/post/create`;
    },
    GET_POST_IN_DISTANCE(distance) {
        return `${API_URL}api/post/posts/in/${distance}`;
    },
    GET_POST(userId) {
        return `${API_URL}api/post/user/${userId}`;
    },
    UPDATE_POST(postId, userId) {
        return `${API_URL}api/post/${postId}/${userId}`;
    },
    DELETE_POST(postId, userId) {
        return `${API_URL}api/post/${postId}/${userId}`;
    }
};

export const LOCATION_ROUTES = {
    CREATE_LOCATION() {
        return `${API_URL}api/location/create`;
    },
    GET_LOCATIONS() {
        return `${API_URL}api/location/locations`;
    },
    GET_LOCATION(id) {
        return `${API_URL}api/location/${id}`;
    },
    UPDATE_LOCATION(id) {
        return `${API_URL}api/location/${id}`;
    },
    DELETE_LOCATION(id) {
        return `${API_URL}api/location/${id}`;
    }
};

export const MEDIA_ROUTES = {
    GET_ALL_MEDIA() {
        return `${API_URL}api/media`;
    },
    GET_MEDIA_BY_ID(mediaId) {
        return `${API_URL}api/media/${mediaId}`;
    },
    GET_MEDIA_BY_POST_ID(postId) {
        return `${API_URL}api/media/post/${postId}`;
    },
    GET_MEDIA_BY_USER_ID(userId) {
        return `${API_URL}api/media/user/${userId}`;
    }
};