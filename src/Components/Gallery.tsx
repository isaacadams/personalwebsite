import * as React from 'react';
import { Box, Image, Grid, ResponsiveContext } from 'grommet';
import { ShowLoading } from './Shared/ShowLoading';
import useWindowSize, { sizes } from './Shared/useWindowSize';

export function Gallery({ data }) {
    //const size = React.useContext(ResponsiveContext);
    const [width, height] = useWindowSize();
    
    let getColumnAmount = (): number => {
        if(width < sizes.small) return 1;
        if(width < sizes.large) return 2;
        return 3;
    }

    const [columnCount, setColumnCount] = React.useState(1);

    React.useLayoutEffect(() => {
        setColumnCount(getColumnAmount());
    });

    if(!data) return <ShowLoading />;

    return (
        <Box align="center" >
            <Grid
                columns={{
                    count: columnCount,
                    size: 'auto',
                }}
                gap="small" >
                {data.map((value: string, index: number) => 
                    <Box key={index} height="medium" width ="medium">
                        <Image
                            src={value}
                            fit="cover"
                        />
                    </Box>
                )}
            </Grid>
        </Box>
    );
}
