import React from "react";
import { Button, Card, Image } from "semantic-ui-react";

const GenerateButtons = ({ project }) => {
  if (project.weblink === "") {
    return (
      <Button data-cy="button-github" id="button-github" href={project.github}>
        Github
      </Button>
    );
  }
  return (
    <>
      <Button data-cy="button-github" id="button-github" href={project.github}>
        Github
      </Button>
      <Button
        data-cy="button-weblink"
        id="button-weblink"
        href={project.weblink}
      >
        Website
      </Button>
    </>
  );
};

const ProjectCard = ({ project }) => {
  return (
    <Card raised data-cy={`project-${project.id}`}>
      <Image src={project.image} wrapped ui={false} />
      <Card.Content>
        <Card.Header>{project.name}</Card.Header>
        <Card.Description>{project.description}</Card.Description>
        <GenerateButtons project={project} />
      </Card.Content>
    </Card>
  );
};

export default ProjectCard;
