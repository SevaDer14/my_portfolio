import React, { Component } from "react";
import { Container, Segment } from "semantic-ui-react";
import CVSection from "./CVSection"
import axios from "axios";

class CV extends Component {
  state = {
    cv: {},
  }

  componentDidMount() {
    axios.get("./data/data-cv.json").then((response) => {
      this.setState({ cv: response.data });
    });
  }

  render () {
    const { sections } = this.state
    debugger
    return (
      <p></p>
    );
  }
}



export default CV;
