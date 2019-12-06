import * as React from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import { Routes } from './routes';
import Navbar from './view/navbar';

export const Main = () => (
    <Router>
        <div>
            <section className="mt-5 py-5">&nbsp;</section>
            <div className="container mt-5">
                <Navbar />
                <Routes />
            </div>            
        </div>            
    </Router>
);