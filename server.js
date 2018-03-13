import express from 'express';
import favicon from 'express-favicon';
import path from 'path';
// import favicon from 'favicon';
import logger from 'morgan';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';

import React from 'react';
import fs from 'fs';
import { renderToString } from 'react-dom/server';
import { createStore } from 'redux';

import { Provider } from 'react-redux';
import {responsiveStoreEnhancer} from 'redux-responsive';
import reducer from './src/js/reducer';

import expressLayouts from 'express-ejs-layouts';
import { StaticRouter } from 'react-router-dom';

import GetRouter from './router';


const port = 8080;
const server = express();
server.set('view engine', 'ejs');
server.use(expressLayouts);
// view engine setup
server.set('views', path.join(__dirname, 'views'));
server.use(express.static('public'));

//uncomment after placing your favicon in /public
server.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
server.use(logger('dev'));
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: false }));
server.use(cookieParser());

const router = express.Router();
const store = createStore(reducer, responsiveStoreEnhancer);


server.get('*', (req, res) => {
  let context = {};
  
  const component = (
    <Provider store={store}>
      <GetRouter env='server' url={req.url} context={context} />
    </Provider>);

  const html = renderToString(component);
  var locals = {
    title: 'The Title',
    body: html
  };

  res.render('layout', locals);

});

server.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

server.listen(port);
module.exports = server;
