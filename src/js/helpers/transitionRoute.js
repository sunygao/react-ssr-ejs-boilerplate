import React from 'react';
import {Route} from 'react-router-dom';

const TransitionRoute = ({ props, component:Component, ...rest}) => {

  return <Route {...rest} render={(matchProps) => {
    return (
    <Component {...matchProps} {...props} />
  )}} />
}

export default TransitionRoute;
