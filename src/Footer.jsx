import React from 'react'
import { Segment } from "semantic-ui-react";

const Footer = () => {
  return (
    <Segment basic inverted color='violet' textAlign='center'>    
        <p id="footer">Made with Semantic UI for React {React.version}</p>      
    </Segment>
  )
}

export default Footer
