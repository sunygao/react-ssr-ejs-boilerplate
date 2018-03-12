import React from 'react';
import ReactDOM from 'react-dom';
import TransitionHook from "../../helpers/transitionHook";
import PageComponent from '../../abstract/PageComponent';

class Homepage extends PageComponent{
	constructor(props){
		super(props);
  	 //console.log('render home', props);
    }


  	render() {
    	return (
    		<div>
    		   
    			<h1>Homepage!!</h1>
    		</div>
    	);
  	}
}


Homepage = TransitionHook(Homepage);
export default Homepage;