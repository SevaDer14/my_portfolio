import React from "react";
import { Container, Divider, Grid, Header, Segment } from "semantic-ui-react";

const GetData = ({section}) => {   
  let output = JSON.stringify(section.items[0].data)
  output = output.replace(/{/g, '')
  output = output.replace(/}/g, '')
  output = output.replace(/"/g, '')
  output = output.replace(/:/g, ': ')
  let result = output.split(',')
  return (
    <>
    {result.map(txt => <p>{txt}</p>)}
    </>
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