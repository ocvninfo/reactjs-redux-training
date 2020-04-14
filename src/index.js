import 'babel-polyfill';
import 'react-app-polyfill/ie9';
import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';
import 'normalize.css';
import React from 'react';
import './core/helpers/i18n';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './core/store';
import 'semantic-ui-css/semantic.min.css';
import './assets/style/global-styles.scss';
import * as serviceWorker from './core/serviceWorker';

import App from './App';

ReactDOM.render(
    <Provider store={configureStore()}>
        <App />
    </Provider>,
    document.getElementById('root')
);


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
