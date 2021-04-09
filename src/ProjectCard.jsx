import React from "react"
import { Button, Card, Image } from "semantic-ui-react"

const Buttons = ({ project }) => {
  if (project.weblink === '') {
    return <Button id='buttonGithub'>Github</Button>
  } 
  return (
  <>
  <Button id='buttonGithub'>Github</Button>
  <Button id='buttonWeblink'>Website</Button>
  </>
    )
  }


const ProjectCard = ({ project }) => {
  return (
    <Card raised>
      <Image src={project.image} wrapped ui={false} />
      <Card.Content>
        <Card.Header>{project.name}</Card.Header>
        <Card.Description>{project.description}</Card.Description>       
        <Buttons project={project} />
      </Card.Content>
    </Card>
  )
}

export default ProjectCard