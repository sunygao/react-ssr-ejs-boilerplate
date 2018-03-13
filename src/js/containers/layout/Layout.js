import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import Grid from '../grid/Grid';
import CV from '../../models/CV';

// Utils
import {getParameterByName} from '../../utils/all';

// Actions
 import {viewActions} from './actions';



//for testing only
class Layout extends React.Component{
    constructor(props){
        super(props);
        this.scrollTimer = null;  	     
        this.scrollTicker = false;
        this._bindEvents();
    }

    showGrid() {
        if (typeof(window) === 'undefined') return false;
        return getParameterByName('grid') === 'true';
    }

    _bindEvents() {
        if (typeof(window) === 'undefined') return;
        const { actions } = this.props;
      
        window.addEventListener('orientationchange', () => actions.resize(window), false);
        window.addEventListener('resize', () => actions.resize(window), false);

        window.addEventListener('scroll', (e) => { 
            this.scrollTicker = true;

            if(this.scrollTimer) {
              clearTimeout(this.scrollTimer);
              this.scrollTimer = null;
            } 
        }, false);

        window.requestAnimationFrame(this.rafUpdate);

    }

    rafUpdate = () => {
        if (this.scrollTicker) {
            this.scrollTicker = false;
            this.setScroll(false);
        } 

        window.requestAnimationFrame(this.rafUpdate);
    }

    setScroll = () => {
        let scrollTop = document.documentElement.scrollTop || document.body.scrollTop;

        CV.scroll.y = scrollTop;
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

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(viewActions, dispatch)
  };
}

Layout = connect(null, mapDispatchToProps) (Layout);
export default Layout;
