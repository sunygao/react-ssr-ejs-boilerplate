import React, {PureComponent, PropTypes} from 'react';
import ReactDOM from 'react-dom';
import TransitionHook from "../../helpers/transitionHook";
import GridviewComponent from '../../components/gridview/Gridview';


class GridviewContainer extends PureComponent{
	constructor(props){
		super(props);
  	}

  	render() {
    	return <GridviewComponent />;
  	}
}

GridviewContainer = TransitionHook(GridviewContainer);
export default GridviewContainer;

