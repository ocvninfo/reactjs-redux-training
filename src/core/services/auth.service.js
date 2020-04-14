import Cookies from 'universal-cookie';
import apiService from "../common/commonApi";

import functionCommon from "../common/function";

const cookies = new Cookies();

export const auth = {};

auth.login = async (param) => {
    return apiService.Post('login', param);
}

auth.logout = () => {
    cookies.remove('info');
    localStorage.removeItem("RequestApiTime");
    window.location = '/';
}

auth.forgotPassword = (param) => {
    return apiService.Post('forgot-password', param);
}

auth.resetPassword = (param) => {
    return apiService.Put('reset-password', param);
}

auth.resetPassSecretKey = (param) => {
    return apiService.Post('check-reset-pass-secret-key', param);
}

auth.changePassword = (param) => {  
    return apiService.Put('change-password', param);
}
