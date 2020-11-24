import * as React from 'react';
import {Box, Image, Grid} from 'grommet';
import useWindowSize, {sizes} from './Shared/useWindowSize';
import {Loader} from './Shared/Loader';

export function Gallery({data}) {
  return (
    <>
      {!data && <Loader />}
      {data && <DisplayGallery data={data} />}
    </>
  );
}

function DisplayGallery({data}) {
  let columns = useDynamicColumn();

  return (
    <Grid
      columns={{
        count: columns,
        size: 'auto',
      }}
      gap="small"
    >
      {data.map((value: string, index: number) => (
        <Box key={index} responsive height="medium">
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
  );
}

export function useDynamicColumn(max?: number): number {
  const [width, height] = useWindowSize();

  let getColumnSize = (): number => {
    if (width < sizes.small) return 1;
    if (width < sizes.large) return 2;
    return 3;
  };

  function getColumnSizeWithoutExceedingMax(): number {
    let col = getColumnSize();
    if (max) return Math.min(max, col);
    return col;
  }

  const [column, setColumn] = React.useState<number>(
    getColumnSizeWithoutExceedingMax()
  );

  React.useEffect(() => {
    setColumn(getColumnSizeWithoutExceedingMax());
  }, [width]);

  return column;
}
