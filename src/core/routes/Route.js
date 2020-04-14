import React from "react";
import PropTypes from "prop-types";
import { Route, Redirect } from "react-router-dom";

import Header from '../../components/Header';

export default function RouteWrapper({
  component: Component,
  data: data,
  isHeader,
  isStaff,
  isError,
  ...rest
}) 

{  
  if (isHeader) {
    return <Route {...rest}><Header /><section className="body-content">{data}</section></Route>;
  } else {    
    return <Route {...rest}><section className="body-content">{data}</section></Route>;
  }
}

RouteWrapper.propTypes = {
  isHeader: PropTypes.bool,
  data: PropTypes.oneOfType([PropTypes.element, PropTypes.func]),
  component: PropTypes.oneOfType([PropTypes.element, PropTypes.func])
};

RouteWrapper.defaultProps = {
  isHeader: false
};
