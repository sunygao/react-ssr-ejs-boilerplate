import React, {PureComponent, PropTypes} from 'react';
import ReactDOM from 'react-dom';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import TransitionHook from "../../helpers/transitionHook";
import HomepageComponent from '../../components/homepage/Homepage';

// Actions
 import * as viewActions from './actions';

//selectors
import {selectBrowserObject} from './selectors';

class HomepageContainer extends PureComponent{
	constructor(props){
		super(props);
    }

  	render() {
    	return (
    		<HomepageComponent />
    	);
  	}
}

const mapStateToProps = (state) => {
  return {
    browser: selectBrowserObject(state)
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(viewActions, dispatch)
  };
}

HomepageContainer = connect(mapStateToProps, mapDispatchToProps) (HomepageContainer);
HomepageContainer = TransitionHook(HomepageContainer);
export default HomepageContainer;