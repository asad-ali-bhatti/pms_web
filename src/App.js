import React, { Component } from "react";
import "./App.css";
import AppRoutes from "./components/routes/app_routes";

class App extends Component {
  render() {
    return (
      <div className="App">
        <AppRoutes> </AppRoutes>
      </div>
    );
  }
}

export default App;
