import React, { Component } from "react";
import { getTasks } from "../../services/taskService";
import { Table, Button, Col } from "react-bootstrap";

class Project extends Component {
  state = {
    tasks: []
  };

  async componentDidMount() {
    const tasks = await getTasks(this.props.match.params.id);
    this.setState({ tasks: tasks });
  }

  render() {
    return (
      <Col sm={10}>
        <h2>Tasks of Project </h2>
        <Table striped bordered>
          <thead>
            <tr>
              <th>ID</th>
              <th>Task</th>
              <th>Description</th>
              <th />
            </tr>
          </thead>
          <tbody>
            {this.state.tasks.map(task => {
              return (
                <tr key={task.id}>
                  <td>{task.id}</td>
                  <td>{task.title}</td>
                  <td>{task.description}</td>
                  <td>
                    <Button className="btn btn-default">Edit</Button>{" "}
                    <Button className="btn btn-danger">Delete</Button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </Col>
    );
  }
}

export default Project;
