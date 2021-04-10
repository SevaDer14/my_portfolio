import React, { Component } from "react";
import { Card, CardGroup, Container, Divider, Grid } from "semantic-ui-react";
import ProjectCard from "./ProjectCard";
import axios from "axios";

class Projects extends Component {
  state = {
    projects: [],
  };

  componentDidMount() {
    axios.get("./data/data-projects.json").then((response) => {
      this.setState({ projects: response.data });
    });
  }

  render() {
    const { projects } = this.state;
    debugger
    let projectsList = projects.map((project) => {
      return (        
          <ProjectCard data-cy={`project-${project.id}`} project={project} />        
      );
    });

    return (
      <Container>
        <h1 style={{ marginBottom: "50px" }} data-cy="projects-header" id="projects-header">
          My Projects
        </h1>

        <Grid centered>          
          {projectsList}            
        </Grid>        
      </Container>
    );
  }
}

export default Projects;
