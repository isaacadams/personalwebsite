import * as React from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import { Routes } from './routes';
import Navbar from './view/navbar';

export const Main = () => (
    <Router>
        <div>
            <section className="d-none d-lg-block py-5">&nbsp;</section>
            <div className="container mt-lg-5">
                <div className="row">
                    <Navbar />
                </div>
                <div className="row">
                    <section className="col-lg-1"></section>
                    <section className="col">
                        <Routes />
                    </section>
                </div>                
            </div>      
            <section className="py-5">&nbsp;</section>      
        </div>            
    </Router>
);