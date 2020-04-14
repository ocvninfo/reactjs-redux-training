import Cookies from 'universal-cookie';

const cookies = new Cookies();
const apiHeader = {};

apiHeader.authorization = () => {
    let info = cookies.get('info');
    if (info && info.token) {
        return { 
            'token': info.token,
            'email': info.email,
            'employeeCode': info.employeeCode,
            'Pragma': 'no-cache'
            // 'Content-Type': 'application/x-www-form-urlencoded'
        };
    } else {
        return {};
    }
}

export default apiHeader;
