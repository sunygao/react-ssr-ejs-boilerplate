import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import {responsiveStoreEnhancer} from 'redux-responsive'
import GetRouter from '../../router';
import reducer from './reducer';

import '../scss/app.scss'; // eslint-disable-line


const store = createStore(reducer, responsiveStoreEnhancer);


ReactDOM.render(
	<Provider store={store}>
		<GetRouter env='client' />
	</Provider>
, document.getElementById('root'));
