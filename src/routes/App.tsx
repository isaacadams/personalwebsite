import React, {useEffect, useState, createContext} from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import {Routes} from './Routes';
import {getData} from '../Components/Shared/useData';
import {Footer} from '../Footer';
import {Container, Row, YSpacer} from './StyleComponents';
import {Navigation} from './view/Navigation';

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
        <Container>
          <Row>
            <YSpacer height="75px" />
            <Navigation />
            <YSpacer height="25px" />
            <div>
              <Routes />
            </div>
            <YSpacer height="75px" />
            <div className="bootstrap-styles">
              <Footer />
            </div>
          </Row>
        </Container>
      </LandingPageContext.Provider>
    </Router>
  );
}
