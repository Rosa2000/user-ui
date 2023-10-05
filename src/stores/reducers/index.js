import { combineReducers } from 'redux';
import loginReducer from '~/pages/Login/Login.reducer';


const rootReducer = combineReducers({
    login: loginReducer,


})

export default rootReducer;
