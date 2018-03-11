import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { Routes } from '../../routes';
import Homepage from './components/homepage/Homepage';
import Aboutpage from './components/aboutpage/Aboutpage';

export default class App extends React.Component{
	constructor(props){
    	super(props);  	
    }

  render() {
  	const {location} = this.props;

    return (

    	 <Switch>
            {
              Routes.map((route, index) => {
              	return <Route exact={route.exact} path={route.path} component={route.component} key={'route_' + index}/>
              })
          	}
          </Switch>


    	
    );
  }
}

