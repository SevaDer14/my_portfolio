import React from "react";
import { NavLink } from "react-router-dom";
import { Menu, Segment } from "semantic-ui-react";

const Header = () => {
  return (
    <Segment basic inverted textAlign="center" color="blue">
      <div style={{ padding: "10px" }}>
        <h1 id="my-name" data-cy="my-name" name="seva-deriushkin" style={{ fontSize: "38px" }}>
          SEVA DERIUSHKIN
        </h1>
      </div>
      <Menu ui secondary inverted compact menu size="large">
        <Menu.Item
          position="right"
          id="about-tab" data-cy="about-tab"
          name="about me"
          data-cy="about-tab"
          as={NavLink}
          to={{ pathname: "/about" }}
        />
        <Menu.Item
          id="projects-tab" data-cy="projects-tab"
          name="my projects"
          data-cy="projects-tab"
          as={NavLink}
          to={{ pathname: "/projects" }}
        />
        <Menu.Item
          id="cv-tab" data-cy="cv-tab"
          name="my CV"
          data-cy="cv-tab"
          as={NavLink}
          to={{ pathname: "/cv" }}
        />
      </Menu>
    </Segment>
  );
};

export default Header;
