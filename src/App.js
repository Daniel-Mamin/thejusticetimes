import React, { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";

import { Header, Footer, ProtectedRoute } from "./components";

import routes from "./routes/routes";
import users from "./mocks/users";
import getSortedArray from "./services/getSortedArray";
import "./App.scss";

const App = () => {
  const [idUser, setIdUser] = useState();

  useEffect(() => setIdUser(localStorage.getItem("ID_USER")), [idUser]);
  useEffect(() => {
    localStorage.setItem("ALL_ARTICLES", JSON.stringify(getSortedArray()));
    localStorage.setItem("ALL_USERS", JSON.stringify(users));
  }, []);

  return (
    <div className="all-content">
      <Header idUser={idUser} setIdUser={setIdUser} />
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
              render={() => (
                <route.component idUser={idUser} setIdUser={setIdUser} />
              )}
            />
          )
        )}
      </Switch>
      <Footer idUser={idUser} setIdUser={setIdUser} />
    </div>
  );
};

export default App;
