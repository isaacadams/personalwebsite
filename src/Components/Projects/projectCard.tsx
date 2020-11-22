import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {
  Box,
  Button,
  ButtonProps,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Text,
  Image,
  Grid,
} from 'grommet';

interface IProps {
  website?: string;
  github: string;
  name: string;
  message: string;
  image: string;
  tags: string[];
}

export function ProjectCard({
  name,
  github,
  message,
  image,
  tags,
  website,
}: IProps) {
  return (
    <Card height="tall" width="medium" background="light-1">
      <Image src={image} style={{height: '16rem'}} />
      <CardHeader pad={{horizontal: 'medium', vertical: 'small'}} gap="xsmall">
        {name}
      </CardHeader>
      <CardBody pad={{horizontal: 'medium', vertical: 'small'}}>
        <Grid rows={['xsmall', 'xxsmall']} gap="small">
          <Text>{message}</Text>
          <Text>{tags.map((t) => `#${t} `)}</Text>
        </Grid>
      </CardBody>
      <CardFooter
        pad={{horizontal: 'medium', vertical: 'small'}}
        background="light-2"
      >
        <DisplayButton href={website} label={'Website'} />
        <DisplayButton
          href={github}
          secondary
          icon={<FontAwesomeIcon icon={['fab', 'github']} />}
          label={'GitHub'}
        />
      </CardFooter>
    </Card>
  );
}

function DisplayButton(props: ButtonProps) {
  return (
    <>
      {!props?.href && <div></div>}
      {props?.href && <Button {...props} />}
    </>
  );
}
