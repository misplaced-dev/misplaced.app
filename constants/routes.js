const API_URL = 'https://misplaced.app';

export const USER_ROUTES = {
    REGISTER_USER() {
        return `${API_URL}/user/register`;
    },
    LOGIN_USER() {
        return `${API_URL}/user/login`;
    },
    GET_USER(id) {
        return `${API_URL}/user/${id}`;
    },
    UPDATE_USER(id) {
        return `${API_URL}/user/${id}`;
    },
    DELETE_USER(id) {
        return `${API_URL}/user/${id}`;
    }
};

export const POST_ROUTES = {
    CREATE_POST() {
        return `${API_URL}/post/create`;
    },
    GET_POST_IN_DISTANCE(distance) {
        return `${API_URL}/post/posts/in/${distance}`;
    },
    GET_POST(userId) {
        return `${API_URL}/post/user/${userId}`;
    },
    GET_POST_BY_ID(postId) {
        return `${API_URL}/post/${postId}`;
    },
    UPDATE_POST(postId, userId) {
        return `${API_URL}/post/${postId}/${userId}`;
    },
    DELETE_POST(postId, userId) {
        return `${API_URL}/post/${postId}/${userId}`;
    }
};

export const LOCATION_ROUTES = {
    CREATE_LOCATION() {
        return `${API_URL}/location/create`;
    },
    GET_LOCATIONS() {
        return `${API_URL}/location/locations`;
    },
    GET_LOCATION(id) {
        return `${API_URL}/location/location/${id}`;
    },
    UPDATE_LOCATION(id) {
        return `${API_URL}/location/${id}`;
    },
    DELETE_LOCATION(id) {
        return `${API_URL}/location/${id}`;
    }
};

export const MEDIA_ROUTES = {
    GET_ALL_MEDIA() {
        return `${API_URL}/media`;
    },
    GET_MEDIA_BY_ID(mediaId) {
        return `${API_URL}/media/${mediaId}`;
    },
    GET_MEDIA_BY_POST_ID(postId) {
        return `${API_URL}/media/post/${postId}`;
    },
    GET_MEDIA_BY_USER_ID(userId) {
        return `${API_URL}/media/user/${userId}`;
    }
};