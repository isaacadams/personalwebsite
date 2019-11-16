import * as React from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import { Routes } from './routes';
import Navbar from './view/navbar';

export const Main = () => (
    <div>
        <Router>
            <div className="container">
                <Navbar />
                <Routes />
            </div>            
        </Router>
    </div>
);