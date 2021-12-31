import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAIL, REGISTER_REQUEST, REGISTER_FAIL, REGISTER_SUCCESS } from './auth.types';

const INITIAL_STATE = {
    loading: false,
};

const reducer = (state = INITIAL_STATE, action) => {

    switch (action.type) {

        case RESERVATION_REQUEST:

            return {
                ...state, loading: true
            };

        case RESERVATION_SUCCESS:

            return {
                ...state, loading: false
            };

        case RESERVATION_FAIL:

            return {
                ...state, loading: false
            };

            default: return state;

    }

};

export default reducer;