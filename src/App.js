import React, { Component } from "react";
import "./App.css";
import AppRoutes from "./components/routes/app_routes";
import getToken from "./services/authService";
import AuthRoutes from "./components/routes/authRoutes";

class App extends Component {
  state = {
    jwt: window.localStorage.getItem("token"),
    user_data: { email: "", password: "" }
  };

  async componentDidMount() {
    // const token = await getToken("asad@example.com", "password");
    // this.setState({ jwt: token });
  }

  handleLogin = async ({ email, password }) => {
    const token = await getToken(email, password);
    if (token) {
      window.localStorage.setItem("token", token);
    }
    this.setState({ jwt: token });
  };

  render() {
    const { jwt, user_data } = this.state;
    return (
      <div className="App">
        {!jwt && (
          <AuthRoutes userData={user_data} handleLogin={this.handleLogin} />
        )}
        {jwt && <AppRoutes jwt={jwt} />}
      </div>
    );
  }
}

export default App;
