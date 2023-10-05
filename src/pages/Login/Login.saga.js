import { takeLatest, all, call, put } from 'redux-saga/effects';
import { LoginUser } from './Login.service';
import { LoginUserFailed, LoginUserSuccess } from './Login.action';
import { LOGIN } from '~/stores/constants';
function* LoginSaga({ payload }) {
    try {
        const res = yield call(LoginUser, payload);
        if (res && res.data.result === 0 && res.data.message == 'success') {
            yield put(LoginUserSuccess(res.data));
        } else if (res.data.result === -1) {
            yield put(LoginUserFailed(res.data));
        }
    } catch (err) {
        yield put(LoginUserFailed(err));
    }
}

export default function* loginSaga() {
    yield all([takeLatest(LOGIN, LoginSaga)]);
}
