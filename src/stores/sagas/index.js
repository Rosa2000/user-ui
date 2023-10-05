import { all } from 'redux-saga/effects';

import loginSaga from '~/pages/Login/Login.saga';


export default function* rootSaga() {
    yield all([
        loginSaga(),
    ]);
}