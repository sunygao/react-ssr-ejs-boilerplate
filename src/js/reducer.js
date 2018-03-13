import { combineReducers } from 'redux';
import { createResponsiveStateReducer } from 'redux-responsive';

import homepage from './containers/homepage/reducer';
import vars from './base/index';


export default combineReducers({
  homepage,
  browser: createResponsiveStateReducer({
  	mobileS: parseInt(vars['bp-mobile-s'].split('px')[0]),
  	mobile: parseInt(vars['bp-mobile'].split('px')[0]),
  	tabletL: parseInt(vars['bp-tablet-l'].split('px')[0]),
  	tablet: parseInt(vars['bp-tablet'].split('px')[0]),
  	desktop: parseInt(vars['bp-desktop'].split('px')[0])
  },
  {
    extraFields: () => ({
     		width: typeof(window) !== 'undefined' ? window.innerWidth : null,
        height: typeof(window) !== 'undefined' ? window.innerHeight : null
    	})
	})
})

