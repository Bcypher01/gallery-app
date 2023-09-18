import React from "react";
import { Redirect, Route } from "react-router-dom";

function ProtectedRoute({ component: Component, ...rest }) {
  const user = JSON.parse(localStorage.getItem("user"));
  return (
    <Route
      {...rest}
      render={(props) =>
        user && user.uid ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: "/",
            }}
          />
        )
      }
    />
  );
}

export default ProtectedRoute;
