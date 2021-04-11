import React from "react";
import { Container, Divider, Grid, Header, Segment } from "semantic-ui-react";

const ToFitDataCy = (string) => {
  return string.replace(/\s+/g, '-').replace(':', '').toLowerCase()
}

const ListTitles = ({section}) => {
  return (
  <>
    {
      section.items.map((item) => 
        <Header as='h3' data-cy={ToFitDataCy(item.title)}>            
          {`${item.title}`}
        </Header>
      )
    }
  </>  
  )
}



const ListData = ({section}) => {   
  let data = section.items[0].data 
  return (
    <>
      {
        section.items.map((item) =>
          <div>
            {Object.keys(item.data).map((key) => <p data-cy={`${key}`}>{`${key}: ${item.data[key]}`}</p>)}
          </div>
        )
      }
    </>
  )   
}

const SectionCV = ({section}) => {
  
  return (
    <Container text>      
      <Header as='h2' data-cy={`${ToFitDataCy(section.name)}-header`}>
        {section.name}
      </Header>
      <Grid columns='2' relaxed="very">
        <Grid.Column>          
          <ListTitles section={section} />
        </Grid.Column>
        <Grid.Column>                      
            <ListData section={section}/>         
        </Grid.Column>
      </Grid>      
    </Container>
  )
}

export default SectionCV