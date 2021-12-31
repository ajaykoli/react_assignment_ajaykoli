import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAIL, REGISTER_REQUEST, REGISTER_FAIL, REGISTER_SUCCESS } from './auth.types';

const INITIAL_STATE = {
    loading: false,
    isLoggedIn: false,
    loginFail: false,
    isRegistered: false,
    registerFail: false,
};

const reducer = (state = INITIAL_STATE, action) => {

    switch (action.type) {

        case LOGIN_REQUEST:

            return {
                ...state, loading: true, loginFail: false
            };

        case LOGIN_SUCCESS:

            return {
                ...state, loading: false, isLoggedIn: true, loginFail: false
            };

        case LOGIN_FAIL:

            return {
                ...state, loading: false, isLoggedIn: false, loginFail: true
            };

        case REGISTER_REQUEST:

            return {
                ...state, loading: true, registerFail: false
            };

        case REGISTER_SUCCESS:

            return {
                ...state, loading: false, isRegistered: true, registerFail: false
            };

        case REGISTER_FAIL:

            return {
                ...state, loading: false, isRegistered: false, registerFail: true
            };

            default: return state;

    }

};

export default reducer;