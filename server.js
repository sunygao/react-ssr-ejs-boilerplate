import express from 'express';
import path from 'path';
// import favicon from 'favicon';
import logger from 'morgan';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';
import React from 'react';
import fs from 'fs';
import App from './src/js/App';
import { renderToString } from 'react-dom/server';
import expressLayouts from 'express-ejs-layouts';
import { StaticRouter } from 'react-router-dom';

//routes
import index from './routes/index';

const port = 8080;
const server = express();
server.set('view engine', 'ejs');
server.use(expressLayouts);

// view engine setup
server.set('views', path.join(__dirname, 'views'));
server.use(express.static('public'));

//uncomment after placing your favicon in /public
//server.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
server.use(logger('dev'));
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: false }));
server.use(cookieParser());


// function handleRender(req, res) {
//   const html = renderToString(<App />);

//   var locals = {
//     title: 'The Title',
//     body: html
//   };
//   res.render('layout', locals);
// }

//server.get('/',  handleRender);
const router = express.Router();

server.get('*', (req, res) => {
  console.log('load', req.url);
  let context = {};
  

  const html = renderToString(
    <StaticRouter 
      location={req.url} 
      context={context}>
        <App />
    </StaticRouter>
  );

  var locals = {
    title: 'The Title',
    body: html
  };

  res.render('layout', locals);

//  res.render('index', {title: 'Express', data: false, mtl });
});

// Creating a single index route to server our React application from.



// catch 404 and forward to error handler
server.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

server.listen(port);
module.exports = server;
