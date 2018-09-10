import React, { Component } from "react";
import {
  Form,
  FormGroup,
  Col,
  FormControl,
  Button,
  ControlLabel
} from "react-bootstrap";

class Login extends Component {
  state = {
    userData: this.props.userData
  };

  handleChange = e => {
    const userData = { ...this.state.userData };
    userData[e.currentTarget.type] = e.currentTarget.value;
    this.setState({ userData });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.onLogin(this.state.userData);
  };
  render() {
    const { userData, onLogin } = this.props;
    const { email, password } = this.state.userData;

    return (
      <Form horizontal onSubmit={this.handleSubmit}>
        <h1>Login</h1>
        <FormGroup controlId="formHorizontalEmail">
          <Col componentClass={ControlLabel} sm={2}>
            Email
          </Col>
          <Col sm={6}>
            <FormControl
              type="email"
              placeholder="Email"
              value={email}
              onChange={this.handleChange}
            />
          </Col>
        </FormGroup>

        <FormGroup controlId="formHorizontalPassword">
          <Col componentClass={ControlLabel} sm={2}>
            Password
          </Col>
          <Col sm={6}>
            <FormControl
              type="password"
              placeholder="Password"
              value={password}
              onChange={this.handleChange}
            />
          </Col>
        </FormGroup>

        <FormGroup>
          <Col smOffset={2} sm={10}>
            <Button type="submit">Sign in</Button>
          </Col>
        </FormGroup>
      </Form>
    );
  }
}

export default Login;
