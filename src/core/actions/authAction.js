import { authConstants } from '../constant/auth.constants';
import { auth } from '../services/auth.service';

export const login = (data) => {
    return dispatch => {
        auth.login(data)
            .then(
                res => { 
                    if(!res) return;
                    dispatch(success(res['result']));
                },error => {
                    dispatch(failure(res['result']));
                }
            );
    };
    function success(info) { 
        return { type: authConstants.LOGIN_SUCCESS, info }; 
    }
    function failure(error) {
        return { type: authConstants.LOGIN_FAILURE, error }; 
    }
}
