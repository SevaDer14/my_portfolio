import React from "react";
import { Container, Divider, Grid, Header, Segment } from "semantic-ui-react";

const GetData = ({section}) => {
  return (
    'p'
  )
}

const SectionCV = ({section}) => {
  
  return (
    <Container text>      
      <Header as='h2' data-cy='section-header'>
        {section.name}
      </Header>
      <Grid columns={2} relaxed="very">
        <Grid.Column>
          <Header as='h3' data-cy={`${section.data.title}`}>            
            {`${section.data[0].title}:`}
          </Header>
        </Grid.Column>
        <Grid.Column>                      
            <GetData section={section}/>         
        </Grid.Column>
      </Grid>
      <p></p>
    </Container>
  )
}

/*
const ProjectCard = ({ project }) => {
  return (
    <Card raised>
      <Image src={project.image} wrapped ui={false} />
      <Card.Content>
        <Card.Header>{project.name}</Card.Header>
        <Card.Description>{project.description}</Card.Description>
        <GenerateButtons project={project} />
      </Card.Content>
    </Card>
  );
};
*/
export default SectionCV