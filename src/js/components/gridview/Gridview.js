import React from 'react';
import ReactDOM from 'react-dom';
import TransitionHook from "../../helpers/transitionHook";
import PageComponent from '../../abstract/PageComponent';


class Gridview extends PageComponent{
	constructor(props){
		super(props);
  	}

  	render() {
    	return <h1>grid page!!</h1>;
  	}
}

Gridview = TransitionHook(Gridview);
export default Gridview;

