import axios from 'axios';
import qs from 'qs';
import constant from '../constant/constant';
import apiHeader from '../helpers/apiHeader';


const apiService = {};

apiService.Post = (url, _params) => {
    const _body = qs.stringify(_params);
    return axios({
        method: 'post',
        url: constant.apiUrl + url,
        headers: apiHeader.authorization(),
        data: _body,
        timeout: constant.timeOutCallApi
    })
        .then(res => {
            return res.data;
        })
        .catch((error) => {
            errorHandle(error);
        });
}

apiService.Get = (url, _params) => {
    return axios({
        method: 'get',
        url: constant.apiUrl + url + '?',
        headers:apiHeader.authorization(),
        params: _params,
        timeout: constant.timeOutCallApi
    })
    .then(res => {
        return res.data;
    })
    .catch((error) => {
        errorHandle(error);
    });
}

apiService.Put = function (url, _params) {
    const _body = qs.stringify(_params);
    return axios({
        method: 'put',
        url: constant.apiUrl + url,
        headers: apiHeader.authorization(),
        data: _body,
        timeout: constant.timeOutCallApi
    })
        .then(res => {
            return res.data;
        })
        .catch((error) => {
            errorHandle(error);
        });
}

apiService.Delete = function (url, params) {
    return axios({
        method: 'delete',
        url: constant.apiUrl + url + '/' + params,
        headers: apiHeader.authorization(),
        // data: _body,
        timeout: constant.timeOutCallApi
    })
        .then(res => {
            return res.data;
        })
        .catch((error) => {
            errorHandle(error);
        });
}

const errorHandle = (error) => {
    console.log(error)
    if (error.code === 'ECONNABORTED') {
    } else {
    }
}


export default apiService;