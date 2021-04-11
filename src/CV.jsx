import React, { Component } from "react";
import { Container, Divider, Header } from "semantic-ui-react";
import SectionCV from "./SectionCV";
import axios from "axios";

class CV extends Component {
  state = {
    sections: [],
  };

  componentDidMount() {
    axios.get("./data/data-cv.json").then((response) => {
      this.setState({ sections: response.data });
    });
  }

  render() {
    const { sections } = this.state;

    let sectionList = sections.map((section) => {
      return (
        <SectionCV
          data-cy={section.name.replace(/\s+/g, "-").toLowerCase()}
          section={section}
        />
      );
    });

    return (
      <Container data-cy="cv">
        <Header as="h1" color="blue" data-cy="cv-header">My CV</Header>
      <Divider />
      <p>{sectionList}</p>
      </Container>
    );
  }
}

export default CV;
