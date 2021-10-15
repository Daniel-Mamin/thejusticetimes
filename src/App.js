import React from 'react';
import {Route, Switch} from "react-router-dom";

import { Header, Footer } from './components';

import routes from "./routes/routes";

import './App.scss';

const App = () => {
  return (
    <div className="all-content">
      <Header/>
      <Switch>
        {
          routes.map((route, index) => (
            <Route
              key={index}
              path={route.path}
              exact={route.exact}
              component={route.component}
            />
          ))
        }
      </Switch>
      <Footer/>
    </div>
  );
}

export default App;
