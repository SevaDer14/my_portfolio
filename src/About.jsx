import React from "react";
import { Container, Grid, Image } from "semantic-ui-react";

const About = () => {
  return (
    <Container>
      <Grid columns={2} relaxed="very">
        <Grid.Column>
          <p>
            <Image id="photo-of-me" data-cy="photo-of-me" src="/img/Avatar.jpg" circular />
          </p>
        </Grid.Column>
        <Grid.Column>
          <h1 id="about-header" data-cy="about-header"> About Me</h1>
          <p id="about-me-paragraph" data-cy="about-me-paragraph" style={{ fontSize: "22px" }}>
          I'm a student in Craft Academy, on a way to becoming a junior developer. 
          I have a background in fundamental physics concirning semiconductor research. 
          As a hobby I play electric guitar, piano and compose music.
          </p>
        </Grid.Column>
      </Grid>
    </Container>
  );
};

export default About;
