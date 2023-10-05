import { LOGIN, LOGIN_FAILED, LOGIN_SUCCESS, RESETLOGIN } from '~/stores/constants';

export const LoginUser = (payload) => {
    return {
        type: LOGIN,
        payload,
    };
};
export const LoginUserSuccess = (payload) => {
    return {
        type: LOGIN_SUCCESS,
        payload,
    };
};
export const LoginUserFailed = (error) => {
    return {
        type: LOGIN_FAILED,
        error,
    };
};
export const ResetStateLogin = () => {
    return {
        type: RESETLOGIN,
    };
};
