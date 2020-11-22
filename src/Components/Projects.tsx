import {Grid} from 'grommet';
import * as React from 'react';
import {useDynamicColumn} from './Gallery';
import {ProjectCard} from './Projects/projectCard';

export function Projects(props) {
  let columns = useDynamicColumn(2);
  return (
    <Grid columns={{count: columns, size: 'small'}} gap="large">
      <ProjectCard
        name="Game of War"
        website="https://cards-gameofwar.web.app/"
        github="https://github.com/isaacadams/GameOfWar"
        image="assets/imgs/hide/cards.svg"
        message="I created a simulation of the classic card game called 'Game of War'"
        tags={['react', 'javascript', 'css', 'less']}
      />
      <ProjectCard
        name="Jenkins"
        github="https://github.com/isaacadams/naruto"
        image="https://jenkins.io/images/logos/jenkins/jenkins.svg"
        message="I used to host and maintain my own jenkins server but decided to take it down and switch to using free platforms like TravisCI"
        tags={['docker', 'linux', 'lightsail', 'nginx']}
      />
    </Grid>
  );
}
