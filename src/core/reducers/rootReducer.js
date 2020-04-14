import { combineReducers } from 'redux';
import authReducer from './authReducer';


import {connectRouter} from 'connected-react-router';

import util from '../helpers/util';

export default combineReducers({
    authReducer,
    router: connectRouter(util.history)
});
