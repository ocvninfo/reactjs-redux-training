import Cookies from 'universal-cookie';
import { matchPath } from 'react-router-dom';


const cookies = new Cookies();

const functionCommon = {};

const timeOut = 30;

functionCommon.requireAuth = () => {
    const info = cookies.get('info');
    let flag = '';
    if (!info) {
        flag = false;
    }
    if (info && info['token']) {
        flag = true;
    }
    return flag;
}

functionCommon.logout = () => {
    cookies.remove('info');
    localStorage.removeItem("RequestApiTime");
    window.location = '/';
}

functionCommon.getRole = () => {
    const info = cookies.get('info');
    if (info && info['role']) {
        return info['role'];
    } else {
        return '';
    }
}

functionCommon.getCurrentPath = (pathname, _path) => {
    const match = matchPath(
        pathname,
        { path: _path }
      );
    return match.params.code;
}

functionCommon.checkRequestApiTime = () => {
    let RequestApiTime = localStorage.getItem("RequestApiTime");
    let startDate = new Date();
    let endDate = new Date(RequestApiTime);
    if (!RequestApiTime) {
        localStorage.setItem("RequestApiTime", startDate);
        return false;
    } else {
        const check = functionCommon.msToTime(startDate.getTime() - endDate.getTime());
        if (check > timeOut) {
            return true;
        } else {
            localStorage.setItem("RequestApiTime", startDate);
            return false;
        }
    }
}

functionCommon.setRequestApiTime = () => {
    let startDate = new Date();
    localStorage.setItem("RequestApiTime", startDate);
}

functionCommon.msToTime = (duration) => {
    const minutes = Math.floor((duration / (1000 * 60)));
    return minutes;
}

functionCommon.validatePassword = (value) => {
    let regex = new RegExp("^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
    let isValidate = regex.test(value) ? true : false;
    return isValidate;
}

functionCommon.validateEmail = (value) => {
    return /^[a-z][a-z0-9_\.]{1,32}@[a-z0-9]{2,}(\.[a-z0-9]{2,4}){1,2}$/.test(value);
}

functionCommon.checkfile = (file) => {
    let ext = file.name.match(/\.([^\.]+)$/)[1];
    if(ext === 'xlsx' || ext === 'xls' || ext === 'xlsm' ){
        return true
    }else{
        return false
    }
}

functionCommon.dateInMonth = (month, year) => {
    let monthIndex = month - 1;
    let names = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    let date = new Date(year, monthIndex, 1);
    let result = [];
    while (date.getMonth() == monthIndex) {
        result.push({
            dateConvert:names[date.getDay()] + "_" + date.getDate(),
            isSunOrSa: (names[date.getDay()] == 'Sun' || names[date.getDay()] == 'Sat') ? true : '',
            date:  year + '-' + ("0" + month).slice(-2) + '-' + ("0" + date.getDate()).slice(-2) + " 00:00:00",
            day: ("0" + date.getDate()).slice(-2)
        });
        date.setDate(date.getDate() + 1);
    }
    return result;
}

export default functionCommon;
