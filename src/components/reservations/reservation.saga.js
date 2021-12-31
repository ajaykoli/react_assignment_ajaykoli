import { put, takeLatest } from 'redux-saga/effects';
import { reservationSuccess, reservationFail } from './reservation.actions';
import _ from 'lodash';
import axios from 'axios';

function* proceedReservation () {

  const res = axios.get('http://localhost:3001/reservations')
  .then(res => {
    return {
      flag: true,
      message: _.get(res, "message", ""),
      data: _.get(res, "data", {})
    };
  })
  .catch(err => {
    return {
      flag: false,
      message: _.get(err, "response.data.message", "Something went wrong"),
      errors: _.get(err, "response.data.errors", {})
    };
  });
  const valid = 'true'
  if (valid) {
    yield put(reservationSuccess({
      message: 'Logged in successfully',
      data: 'data'
    }));
  } else {
    yield put(reservationFail({
      message: "Invalid Email or password"
    }));
  }
}

export function* reservationWatcher() {
    yield takeLatest('RESERVATION_REQUEST', proceedReservation)
}