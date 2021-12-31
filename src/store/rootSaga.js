import { all, fork } from 'redux-saga/effects';
import * as authSaga from "../components/auth/auth.saga";
import * as reservationSaga from "../components/reservations/reservation.saga";

export default function* rootSaga() {
   yield all([
    ...Object.values(authSaga),
    ...Object.values(reservationSaga),
   ].map(fork));
}