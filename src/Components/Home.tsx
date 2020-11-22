import {Box, Heading, Paragraph} from 'grommet';
import * as React from 'react';

interface IHome {
  title: string;
  message: string;
}

export function Home({data}: {data: IHome[]}) {
  if (!data) return <div>Loading...</div>;

  return (
    <>
      {data.map((d, i) => (
        <Box responsive key={i}>
          <Heading responsive level={3}>
            {d.title}
          </Heading>
          <Paragraph responsive>{d.message}</Paragraph>
        </Box>
      ))}
    </>
  );
}
