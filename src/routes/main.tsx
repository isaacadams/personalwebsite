import * as React from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import { Routes } from './routes';
import Navbar from './view/navbar';

export const Main = () => (
    <Router>
        <div className="container mt-lg-5">
            <section className="row py-5">&nbsp;</section>
            <div className="row">
                <section className="col-12">
                    <Navbar />
                </section>
                <section className="col-12">
                    <Routes />
                </section>     

                {/* <hr />
                <section className="row">
                    <Projects />
                </div>
                <hr />
                <section className="row">
                    <Gallery />
                </div>  */}          
            </div>      
            <section className="row py-5">&nbsp;</section>      
        </div>            
    </Router>
);