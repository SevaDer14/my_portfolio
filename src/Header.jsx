import React from 'react'
import { NavLink } from 'react-router-dom';
import { Menu, Segment} from "semantic-ui-react";


const Header = () => {
  return (
    <Segment inverted textAlign='center' color='violet'>
      <div style={{padding: '10px'}}>
        <h1 id='my-name' name='seva-deriushkin' style={{fontSize: '38px'}}>
          SEVA DERIUSHKIN
        </h1>
      </div>
      <Menu ui secondary inverted compact menu size='large'>        
        <Menu.Item                  
          position='right' 
          id="about-tab"
          name="about me"
          as={NavLink}
          to={{ pathname: '/about' }}
        />
        <Menu.Item 
          id="projects-tab"
          name="my portfolio"
          as={NavLink}
          to={{ pathname: '/projects' }}
        />
        <Menu.Item 
          id="cv-tab"
          name="my CV"
          as={NavLink}
          to={{ pathname: '/cv' }}
        />
      </Menu>
    </Segment>
  )
}

export default Header
