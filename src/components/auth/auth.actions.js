import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAIL, REGISTER_REQUEST, REGISTER_SUCCESS, REGISTER_FAIL } from './auth.types';

export const loginRequest = (data) => {
    return {
        type: LOGIN_REQUEST,
        payload: data,
    };
};

export const loginSuccess = () => {
    return {
        type: LOGIN_SUCCESS,
    };
};

export const loginFail = () => {
    return {
        type: LOGIN_FAIL,
    };
};

export const registerRequest = (data) => {
    return {
        type: REGISTER_REQUEST,
        payload: data,
    };
};

export const registerSuccess = () => {
    return {
        type: REGISTER_SUCCESS,
    };
};

export const registerFail = () => {
    return {
        type: REGISTER_FAIL,
    };
};