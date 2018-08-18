import React, { Component } from "react";
import { BrowserRouter as Route, Redirect } from "react-router-dom";
import Auth from "./Auth";

const Protected = ({ component: Component, ...props }) => (
  <Route {...props} render={(props) => (
    Auth.Auth === true
      ? <Component {...props} />
      : <Redirect to='/login' />
  )} />
)

export default Protected;