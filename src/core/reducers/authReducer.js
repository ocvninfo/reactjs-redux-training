import { authConstants } from '../constant/auth.constants';
import Cookies from 'universal-cookie';

const cookies = new Cookies();

let info = cookies.get('info');

export const initialState = {
    loggedIn: info ? true : false,
    info: info ? info : {},
    errorCode: '',
    successCode: ''
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case authConstants.LOGIN_REQUEST:
            return {
                loggingIn: true,
                info: action.info
            };

        case authConstants.LOGIN_SUCCESS:
            return {
                loggedIn: true,
                info: action.info
            };

        case authConstants.LOGIN_FAILURE:
            return {
                loggedIn: false,
                errorCode: action.error,
                info: {}
            };

        case authConstants.LOGOUT:
            return {
                loggedIn: false,
                info: ''
            };

        default:
            return state;
    }
}
export default authReducer;
