import * as React from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import { Routes } from './Routes';
import Navbar from './view/Navbar';
import { getData } from '../Components/Shared/useData';
import { useEffect, useState, createContext } from 'react';

export const LandingPageContext = createContext({});

export function Main () {

    let [data, setData] = useState({
        home: null,
        gallery: null
    });

    useEffect(() => {
        Promise
        .all([getData("home"), getData("gallery")])
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
                <div className="container mt-lg-5">
                    <Navbar />
                    <section className="row py-lg-5">&nbsp;</section>
                    <Routes />     
                    <section className="row py-5">&nbsp;</section>      
                </div>      
            </LandingPageContext.Provider>      
        </Router>
    );
}