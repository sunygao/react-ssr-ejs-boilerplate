import React from 'react';
import ReactDOM from 'react-dom';
import PageComponent from '../../abstract/PageComponent';

class HomepageComponent extends PageComponent{
	 constructor(props){
		super(props);
  	 //console.log('render home', props);
    }


  	render() {
    	return (
    		<div>
    			<h1>HomepageComponent!!!!!</h1>
    		</div>
    	);
  	}
}


export default HomepageComponent;