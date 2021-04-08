import React from "react"
import { Card, Image } from "semantic-ui-react"

import firstWebsite from "./public/img/my_first_website.png"


const ProjectCard = ({ project }) => {
  return (
    <Card>
      <Image src={project.image} wrapped ui={false} />
      <Card.Content>
        <Card.Header>{project.name}</Card.Header>
        <Card.Description>{project.description}</Card.Description>
      </Card.Content>
    </Card>
  )
}

export default ProjectCard