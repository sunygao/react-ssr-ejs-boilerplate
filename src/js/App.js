import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Transition, TransitionGroup } from 'react-transition-group';
import { Routes } from '../../routes';
import { Link } from 'react-router-dom';
import TransitionRoute from './helpers/transitionRoute';
import Layout from './components/layout/Layout';

const DURATION = 500;

export default class App extends React.Component{
	constructor(props){
    	super(props);  	
  }

  renderRoutes() {
    return (
      <div>
        <Link to="/">homepage</Link>
        <Link to="/about">about page</Link>

        <Route path="/" render={({location, match}) => 
          <TransitionGroup>
              <Transition key={location.key} timeout={DURATION} appear>
              {(status) => {
                
                //console.log('the status', status, {location});

                return <div>
                  <Switch location={location} key={location.key}>
                    {
                      Routes.map((route, index) => (
                        <TransitionRoute {...route} location={location} props={{
                          status: status,
                          duration: DURATION
                        }} key={'route_' + index} /> )) 
                    }
                  </Switch>
                </div> }
              }
            </Transition>
          </TransitionGroup>
        }/>
      </div>
    	
    );
  }

  render() {
    const { location } = this.props;

    return (
      <Layout location={location}>
        { this.renderRoutes() }
      </Layout>
    );
  }
}

