import React from 'react';
import Grid from '../grid/Grid';

// Utils
import {getParameterByName} from '../../utils/all';


//for testing only
export default class Layout extends React.Component{
	constructor(props){
		super(props);
  	  
    }

    showGrid() {
      if (typeof(window) === 'undefined') return false;
      return getParameterByName('grid') === 'true';
    }



  	render() {
     // const {children, browser, showGrid, location} = this.props;
     const { children } = this.props;
    	return (
    		<div>
    		  <Grid show={this.showGrid()} />
          { children }
    		</div>
    	);
  	}
}