import { put, takeLatest } from 'redux-saga/effects';
import { loginSuccess, loginFail, registerSuccess, registerFail } from './auth.actions';
import _ from 'lodash';
import axios from 'axios';

function* proceedLogin(payload) {
  const data =  payload.payload;
  const valid = data.username === 'admin@fake.com' && data.password === 'admin'
  if (valid) {
    yield put(loginSuccess({
      message: 'Logged in successfully',
      data: data
    }));
  } else {
    yield put(loginFail({
      message: "Invalid Email or password"
    }));
  }
}

export function* loginWatcher() {
     yield takeLatest('LOGIN_REQUEST', proceedLogin)
}

function* proceedRegister(payload) {
  const formData =  payload.payload;
  const valid = axios.post('http://localhost:3001/users', formData)
  .then(res => {
    return {
      flag: true,
      message: _.get(res, "data.message", ""),
      data: _.get(res, "data", {})
    };
  })
  .catch(err => {
    return {
      flag: false,
      message: _.get(err, "response.data.message", "Something went wrong!"),
      errors: _.get(err, "response.data.errors", {})
    };
  });  
  if (valid) {
    yield put(registerSuccess({
      message: 'Registered in successfully',
    }));
  } else {
    yield put(registerFail({
      message: "Invalid Entry"
    }));
  }
}

export function* registerWatcher() {
     yield takeLatest('REGISTER_REQUEST', proceedRegister)
}
