import React from "react";
import { Container, Divider, Grid, Header, Segment } from "semantic-ui-react";

const ToFitDataCy = (string) => {
  return string.replace(/\s+/g, '-').replace(':', '').toLowerCase()
}

const GetData = ({section}) => {   
  let data = section.items[0].data 
 
  return (
    <div data-cy={`${ToFitDataCy(section.name)}`}>
      {Object.keys(data).map((key) => <p data-cy={`${key}`}>{`${key}: ${data[key]}`}</p>)}
    </div>
  )   
}

const SectionCV = ({section}) => {
  
  return (
    <Container text>      
      <Header as='h2' data-cy={`${ToFitDataCy(section.name)}-header`}>
        {section.name}
      </Header>
      <Grid columns={2} relaxed="very">
        <Grid.Column>
          <Header as='h3' data-cy={`${section.items[0].title}`}>            
            {`${section.items[0].title}:`}
          </Header>
        </Grid.Column>
        <Grid.Column>                      
            <GetData section={section}/>         
        </Grid.Column>
      </Grid>      
    </Container>
  )
}

export default SectionCV