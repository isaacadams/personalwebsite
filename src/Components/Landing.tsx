import { Gallery } from "./Gallery";
import { Projects } from "./Projects";
import { Home } from "./Home";
import * as React from "react";
import { LandingPageContext } from "../routes/Main";

export function Landing(props) {
    let data = React.useContext(LandingPageContext);
    
    return (
        <div className="row">   
            <section className="col-12">
                <Home data={data["home"]} />
            </section>
            <hr className="col-12 py-2" />
            <section className="col-12">
                <Projects />
            </section>
            <hr className="col-12 py-2" />
            <section className="col-12">
                <Gallery data={data["gallery"]} />
            </section>        
        </div> 
    );
}