import * as React from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import { Routes } from './routes';
import Navbar from './view/navbar';

export const Main = () => (
    <div>
        <Router>
            <div>
                <Navbar />
                <div className="container">
                    <Routes />
                </div> 
            </div>           
        </Router>
    </div>
);