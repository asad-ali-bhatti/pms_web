import React, { Component } from "react";
import "./App.css";
import AppRoutes from "./components/routes/app_routes";
import Login from "./components/authentication/login";
import getToken from "./services/authService";

class App extends Component {
  state = {
    jwt: ""
  };

  async componentDidMount() {
    const token = await getToken("asad@example.com", "password");
    this.setState({ jwt: token });
  }

  render() {
    const { jwt } = this.state;
    return (
      <div className="App">
        {!jwt && <Login />}
        {jwt && <AppRoutes jwt={jwt} />}
      </div>
    );
  }
}

export default App;
