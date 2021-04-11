import React from "react";
import { Segment } from "semantic-ui-react";

const Footer = () => {
  return (
    <Segment basic inverted color="blue" textAlign="center">
      <p id="footer" data-cy="footer">
        Made with Semantic UI for React {React.version}
      </p>
    </Segment>
  );
};

export default Footer;
