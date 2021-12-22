import { clearUserData, setUserData } from '../util.js';
import * as api from './api.js';


export async function login(username, password) {
    const result = await api.post('/login', { username, password });

    const user = {
        username: result.username,
        id: result.objectId,
        token: result.sessionToken
    };
    setUserData(user);
    return result;
}

export async function register(username, email, password) {
    const result = await api.post('/users', { username, email, password });

    const user = {
        username,
        id: result.objectId,
        token: result.sessionToken
    };
    
    setUserData(user);
    return result;
}

export async function logout() {
    api.post('/logout');
    clearUserData();
}
