import React, { Component } from "react";
import { Card, Container, Divider, Header } from "semantic-ui-react";
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
    
    let projectsList = projects.map((project) => {
      return (        
          <ProjectCard data-cy={`project-${project.id}`} project={project} />        
      );
    });

    return (
      <Container>
        <Header as='h1' color='blue' data-cy="projects-header" id="projects-header">
          My Projects
        </Header>
        <Divider style={{ marginBottom: "50px" }}/>

        <Card.Group centered>          
          {projectsList}            
        </Card.Group>        
      </Container>
    );
  }
}

export default Projects;
