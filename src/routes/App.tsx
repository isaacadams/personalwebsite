import React, { useEffect, useState, createContext } from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import { Routes } from './Routes';
import Navbar from './view/Navbar';
import { getData } from '../Components/Shared/useData';
import { Footer } from '../Footer';
import meta from '../meta';
import { Container, WhitespaceRow, Row, BootstrappedRow } from './StyleComponents';

export const LandingPageContext = createContext({});

export function App () {

    let [data, setData] = useState({
        home: null,
        gallery: null
    });

    useEffect(() => {
        Promise.all([getData("home"), getData("gallery")])
        .then(results => {
            let updatedData = results.reduce((p, c, i, a) => {
                return {
                    ...p,
                    [c.name]: c.data
                };
            }, data);
            setData(updatedData);
        });
    }, []);
    
    return (
        <Router>
            <LandingPageContext.Provider value={data}>
                <Container>
                    <WhitespaceRow height="75px" />
                    <BootstrappedRow>
                        <Navbar />
                    </BootstrappedRow>
                    <WhitespaceRow height="25px" />
                    <Row>
                        <Routes />
                    </Row>
                    <WhitespaceRow height="75px" />
                    <BootstrappedRow>
                        <Footer />
                    </BootstrappedRow>
                </Container> 
            </LandingPageContext.Provider>      
        </Router>
    );
}

