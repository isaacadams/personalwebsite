import { NavPageComponent } from "./Shared/NavPageComponent";
import { Gallery } from "./Gallery";
import { Projects } from "./Projects";
import { Home } from "./Home";
import React from "react";

export class Landing extends NavPageComponent {
    constructor(props: any) {
        super(props);
    }

    render() {        
        return (
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
        );
    }
}