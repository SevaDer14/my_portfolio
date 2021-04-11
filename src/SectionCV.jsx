import React from "react";
import { Container, Divider, Grid, Header } from "semantic-ui-react";

const ToCebabCase = (string) => {
  return string.replace(/\s+/g, "-").replace(":", "").toLowerCase();
};

const ListData = ({ section }) => {
  return (
    <>
      {section.items.map((item) => (        
        <Grid columns="2">
          <Grid.Column textAlign='right' width='8'>            
            <Header as="h3" data-cy={ToCebabCase(item.title)}>
              {`${item.title}`}
            </Header>   
          </Grid.Column>
          <Grid.Column>
            {Object.keys(item.data).map((key) => (
              <p data-cy={`${key}`}>{`${key}: ${item.data[key]}`}</p>
            ))}
          </Grid.Column>
        </Grid>
      ))}
    </>
  );
};

const SectionCV = ({ section }) => {
  return (
    <Container text>      
      <div style={{backgroundColor: 'rgb(248, 248, 248)', paddingTop: '15px'}}>     
      <Header as="h2" data-cy={`${ToCebabCase(section.name)}-header`}>
        {`${section.name}:`}
      </Header>
      <Divider></Divider>
      </div>
      
      <ListData section={section} />
    </Container>
  );
};

export default SectionCV;
