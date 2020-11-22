import * as React from 'react';
import {Box, Image, Grid, ResponsiveContext} from 'grommet';
import {ShowLoading} from './Shared/ShowLoading';
import useWindowSize, {sizes} from './Shared/useWindowSize';

export function Gallery({data}) {
  return (
    <>
      {!data && <ShowLoading />}
      {data && <DisplayGallery data={data} />}
    </>
  );
}

function DisplayGallery({data}) {
  const [width, height] = useWindowSize();

  let getColumnAmount = (): number => {
    if (width < sizes.small) return 1;
    if (width < sizes.large) return 2;
    return 3;
  };

  const [gallery, setGallery] = React.useState({
    columns: 1,
    //opacity: {}
  });

  React.useEffect(() => {
    setGallery((p) => ({
      ...p,
      columns: getColumnAmount(),
    }));
  }, [width]);

  return (
    <Box align="center">
      <Grid
        columns={{
          count: gallery.columns,
          size: 'auto',
        }}
        gap="small"
      >
        {data.map((value: string, index: number) => (
          <Box key={index} height="medium" width="medium">
            {value && (
              <Image
                src={value}
                fit="cover"
                //opacity="medium" going to use opacity by default and then remove it when hovering
              />
            )}
          </Box>
        ))}
      </Grid>
    </Box>
  );
}
