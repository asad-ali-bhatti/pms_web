import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Project from "../projects/project";
import Projects from "../projects/projects";

class AppRoutes extends Component {
  render() {
    const { jwt } = this.props;
    return (
      <Switch>
        <Route path="/projects/:id" render={() => <Project jwt={jwt} />} />
        <Route path="/projects" render={() => <Projects jwt={jwt} />} />
        <Route path="/" exact component={Projects} />
        <Redirect to="/projects" />
      </Switch>
    );
  }
}

export default AppRoutes;
