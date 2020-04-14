//API variable
const CONSTANT = {
    apiUrl: 'http://103.18.7.212:1239/',
    errorCode: {
        "APISuccess": 200,
        "APIUpdatedSuccess": 201,
        "APIInvalids": 400,
        "TOKENExpired": 401,
        "ClientNotPermission": 403,
        "APINotFound": 404,
        "APIMethodNotSupported": 405,
        "DBCanNotConnect": 500
    },
    timeOutCallApi: 30000,
    pageRecord: 20
};
export default CONSTANT;
