import React, { Component } from "react";
import getProjects from "../../services/projectService";
import { Table, Button } from "react-bootstrap";

class Projects extends Component {
  state = {
    projects: []
  };

  async componentDidMount() {
    const { data } = await getProjects();
    console.log(data);
    this.setState({ projects: data });
  }
  goto(link) {
    this.props.history.push(link);
  }
  render() {
    return (
      <React.Fragment>
        <h2>Projects</h2>
        <Table striped bordered>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th />
            </tr>
          </thead>
          <tbody>
            {this.state.projects.map(project => {
              return (
                <tr key={"project_" + project.id}>
                  <th>{project.id}</th>
                  <th>{project.title}</th>
                  <th>
                    <Button
                      className="btn btn-primary"
                      onClick={() => this.goto(`/projects/${project.id}`)}
                    >
                      Show
                    </Button>{" "}
                    <Button className="btn btn-default">Update</Button>{" "}
                    <Button className="btn btn-danger">Delete</Button>
                  </th>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </React.Fragment>
    );
  }
}

export default Projects;
