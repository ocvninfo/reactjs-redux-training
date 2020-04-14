import React from "react";
import { Router } from 'react-router-dom';
import { connect } from 'react-redux';

import Routes from './core/routes';
import util from './core/helpers/util';

function App() {

    return (
        <Router history={util.history}>
            <Routes />
        </Router>
    );
}

export default connect()(App);
