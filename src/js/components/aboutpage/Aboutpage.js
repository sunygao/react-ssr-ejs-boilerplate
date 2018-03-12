import React from 'react';
import ReactDOM from 'react-dom';
import TransitionHook from "../../helpers/transitionHook";
import PageComponent from '../../abstract/PageComponent';


class Aboutpage extends PageComponent{
	constructor(props){
		super(props);
  	}

  	render() {
    	return <h1>about page!!</h1>;
  	}
}

Aboutpage = TransitionHook(Aboutpage);
export default Aboutpage;

