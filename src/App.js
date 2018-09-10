import React, { Component } from "react";
import "./App.css";
import AppRoutes from "./components/routes/app_routes";
import Login from "./components/authentication/login";

class App extends Component {
  state = {
    jwt: ""
  };
  render() {
    const { jwt } = this.state;
    return (
      <div className="App">
        {!jwt && <Login />}
        {jwt && <AppRoutes />}
      </div>
    );
  }
}

export default App;
