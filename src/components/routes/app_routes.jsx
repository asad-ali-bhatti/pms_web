import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Project from "../projects/project";
import Projects from "../projects/projects";

class AppRoutes extends Component {
  render() {
    return (
      <Switch>
        <Route path="/projects/:id" component={Project} />
        <Route path="/projects" component={Projects} />
        <Route path="/" component={Projects} />
      </Switch>
    );
  }
}

export default AppRoutes;
