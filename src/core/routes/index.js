import React from "react";
import { Switch } from "react-router-dom";
import Route from "./Route";
import HomePage from '../../containers/HomePage';
import AboutPage from '../../containers/AboutPage';

export default function Routes() {
    return (
        <div>
            <Switch>               
                <Route isHeader path="/" exact data={<HomePage />} />
                <Route isHeader path="/about" exact data={<AboutPage />} />
            </Switch>
        </div>
    );
}
