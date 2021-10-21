import React from "react";
import { Route, Redirect } from "react-router-dom";

const ProtectedRoute = ({
  idUser,
  flag,
  setFlag,
  component: Component,
  ...rest
}) => {
  return (
    <Route
      {...rest}
      render={() =>
        idUser ? (
          <Component flag={flag} setFlag={setFlag} />
        ) : (
          <Redirect to="/login" />
        )
      }
    />
  );
};

export default ProtectedRoute;
