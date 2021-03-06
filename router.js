import React from 'react';
import { StaticRouter, BrowserRouter } from 'react-router-dom';

import App from './src/js/containers/app/App';

const routerConf = {

}

const Router = (props) => {

    if (props.env === 'client') {
        return (
          <BrowserRouter router={routerConf}>
            <App />
          </BrowserRouter>
        );
    }

    //Server side
    return (
      <StaticRouter
          location={props.url}
          context={props.context}>
              <App />
      </StaticRouter>
    )
}

export default Router;
