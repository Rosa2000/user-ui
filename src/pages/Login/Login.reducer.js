import { LOGIN, LOGIN_FAILED, LOGIN_SUCCESS, RESETLOGIN } from '~/stores/constants';

const initialState = {
    token: null,
    user: null,
    error: null,
    result: [],
    messageRes: null,
    alertLogin: null,
};

const loginReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN: {
            return {
                ...state,
                result: null,
            };
        }
        case LOGIN_SUCCESS: {
            return {
                ...state,
                user: action.payload.data.user.user_fullname,
                token: action.payload.data.access_token,
                result: 0,
                messageRes: action.payload.message,
                alertLogin: 'Login success',
            };
        }
        case LOGIN_FAILED: {
            return {
                ...state,
                error: action.error,
                user: null,
                result: -1,
                messageRes: action.error.message,
            };
        }
        case RESETLOGIN: {
            return {
                ...state,
                result: null,
            };
        }
        default:
            return state;
    }
};

export default loginReducer;
