import React, {useEffect, useState, createContext} from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import {Routes} from './Routes';
import {getData} from '../Components/Shared/useData';
import {DisplayFooter} from '../Footer';
import {Navigation} from './view/Navigation';
import {Box, Grid, Header} from 'grommet';

export const LandingPageContext = createContext({});

export function App() {
  let [data, setData] = useState({
    home: null,
    gallery: null,
  });

  useEffect(() => {
    Promise.all([getData('home'), getData('gallery')]).then((results) => {
      let updatedData = results.reduce((p, c, i, a) => {
        return {
          ...p,
          [c.name]: c.data,
        };
      }, data);
      setData(updatedData);
    });
  }, []);

  return (
    <Router>
      <LandingPageContext.Provider value={data}>
        <Grid rows={['xsmall', 'responsive', 'xsmall']}>
          <Header
            fill="horizontal"
            flex
            justify="center"
            pad={{vertical: 'medium'}}
          >
            <Navigation />
          </Header>
          <Box align="center" pad={{vertical: 'medium', horizontal: 'medium'}}>
            <Routes />
          </Box>
          <Box>
            <DisplayFooter />
          </Box>
        </Grid>
      </LandingPageContext.Provider>
    </Router>
  );
}
