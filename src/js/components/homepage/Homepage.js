import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';


export default class Homepage extends React.Component{
	constructor(props){
		super(props);
  	}

  	render() {
    	return (
    		<div>
    		    <Link to="/about">to about</Link>

    			<h1>Homepage!!</h1>
    		</div>
    	);
  	}
}

