import React, { useEffect, useState } from "react";
import { Redirect, Route, Switch } from "react-router-dom";

import { Header, Footer, ProtectedRoute } from "./components";

import routes from "./routes/routes";

import "./App.scss";

const App = () => {
  const [idUser, setIdUser] = useState(
    localStorage.getItem("ID_USER") || false
  );

  return (
    <div className="all-content">
      <Header idUser={idUser} />
      <Switch>
        {routes.map((route, index) =>
          route.withAuth ? (
            <ProtectedRoute
              path={route.path}
              key={index}
              component={route.component}
              exact
              idUser={idUser}
            />
          ) : (
            <Route
              key={index}
              path={route.path}
              exact={route.exact}
              component={route.component}
            />
          )
        )}
      </Switch>
      <Footer idUser={idUser} />
    </div>
  );
};

export default App;
