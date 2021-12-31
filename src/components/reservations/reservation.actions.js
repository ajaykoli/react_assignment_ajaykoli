import { RESERVATION_REQUEST, RESERVATION_SUCCESS, RESERVATION_FAIL } from './reservation.types';

export const reservationRequest = () => {
    return {
        type: RESERVATION_REQUEST
    };
};

export const reservationSuccess = () => {
    return {
        type: RESERVATION_SUCCESS,
    };
};

export const reservationFail = () => {
    return {
        type: RESERVATION_FAIL,
    };
};
