import React, { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";

import { Header, Footer, ProtectedRoute } from "./components";
import AuthContext from "./context/AuthContext";
import useAuth from "./hooks/auth";

import routes from "./routes/routes";
import users from "./mocks/users";
import getSortedArray from "./services/getSortedArray";
import "./App.scss";

const App = () => {
  const { login, logout, token, id, isReady } = useAuth();
  const isLogin = !!token;

  const [idUser, setIdUser] = useState();
  const [flag, setFlag] = useState(true);

  useEffect(() => setIdUser(localStorage.getItem("ID_USER")), [idUser]);

  useEffect(() => {
    localStorage.setItem("ALL_ARTICLES", JSON.stringify(getSortedArray()));
    localStorage.setItem("ALL_USERS", JSON.stringify(users));
  }, []);

  return (
    <AuthContext.Provider
      value={{ login, logout, token, id, isReady, isLogin }}
    >
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
                flag={flag}
                setFlag={setFlag}
              />
            ) : (
              <Route
                key={index}
                path={route.path}
                exact={route.exact}
                render={() => (
                  <route.component
                    idUser={idUser}
                    setIdUser={setIdUser}
                    flag={flag}
                    setFlag={setFlag}
                  />
                )}
              />
            )
          )}
        </Switch>
        <Footer idUser={idUser} setIdUser={setIdUser} />
      </div>
    </AuthContext.Provider>
  );
};

export default App;
