import * as React from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import { Routes } from './routes';
import Navbar from './view/navbar';

export const Main = () => (
    <Router>
        <div className="container mt-lg-5">
            <section className="row py-lg-5">&nbsp;</section>
            <Routes />     
            <section className="row py-5">&nbsp;</section>      
        </div>            
    </Router>
);