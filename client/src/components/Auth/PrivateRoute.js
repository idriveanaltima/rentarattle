import React, { Component } from "react";
import { BrowserRouter as Route, Redirect } from "react-router-dom";
import Auth from "./Authenticate";


const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      Auth.Authenticate.state.isAuthenticated ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{
            pathname: "/login",
            state: { from: props.location }
          }}
        />
      )
    }
  />
);

export default PrivateRoute;