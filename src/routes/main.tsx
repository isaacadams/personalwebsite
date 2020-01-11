import * as React from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import { Routes } from './routes';
import Navbar from './view/navbar';
import { Projects } from '../Components/Projects';
import { Gallery } from '../Components/Gallery';
import { Home } from '../Components/Home';

export const Main = () => (
    //<Router>
        <div className="container mt-lg-5">
            <section className="row py-5">&nbsp;</section>
            <div className="row">
                {/* <section className="col-12">
                    <Navbar />
                </section>
                <section className="col-12">
                    <Routes />
                </section> */}     
                <section className="col-12">
                    <h2>Isaac Adams</h2>
                    <Home />
                </section>
                <hr className="col-12 py-2" />
                <section className="col-12">
                    <Projects />
                </section>
                <hr className="col-12 py-2" />
                <section className="col-12">
                    <Gallery />
                </section>        
            </div>      
            <section className="row py-5">&nbsp;</section>      
        </div>            
    //</Router>
);