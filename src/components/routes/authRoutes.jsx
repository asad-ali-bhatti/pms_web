import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Login from "../authentication/login";

class AuthRoutes extends Component {
  render() {
    const { userData, handleLogin } = this.props;
    return (
      <Switch>
        <Route
          path="/login"
          render={() => <Login userData={userData} onLogin={handleLogin} />}
        />
        <Redirect to="/login" />
      </Switch>
    );
  }
}

export default AuthRoutes;
