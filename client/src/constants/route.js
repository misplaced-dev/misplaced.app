import { API_URL } from './env';

export const USER_ROUTES = {
    REGISTER_USER() {
        return `${API_URL}/api/users/create`;
    },
    GET_USERS() {
        return `${API_URL}/api/users/users`;
    },
    GET_USER(id) {
        return `${API_URL}/api/users/user/${id}`;
    }
};