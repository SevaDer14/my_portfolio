import React from "react"
import { Button, Card, Image } from "semantic-ui-react"

const Buttons = ({ project }) => {
  if (project.weblink === '') {
    return <Button id='buttonGithub' href={project.github}>Github</Button>
  } 
  return (
  <>
  <Button id='buttonGithub' href={project.github}>Github</Button>
  <Button id='buttonWeblink' href={project.weblink}>Website</Button>
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