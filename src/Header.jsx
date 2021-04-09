import React from 'react'
import { Link, NavLink } from 'react-router-dom';
import { Menu, Segment } from "semantic-ui-react";

const Header = () => {
  return (
    <Segment>
      <Menu secondary>        
        <Menu.Item 
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
      </Menu>
    </Segment>
  )
}

export default Header
