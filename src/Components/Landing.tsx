import { Gallery } from "./Gallery";
import { Projects } from "./Projects";
import { Home } from "./Home";
import * as React from "react";
import { LandingPageContext } from "../routes/App";

export function Landing(props) {
    let data = React.useContext(LandingPageContext);
    
    return (
        <div className="bootstrap-styles">
            <div className="row">   
                <section className="col-12">
                    <Home data={data["home"]} />
                </section>
                <div className="col-12">
                    <hr className="py-2" />
                </div>
                <section className="col-12">
                    <Projects />
                </section>
                <div className="col-12">
                    <hr className="py-2" />
                </div>
                <section className="col-12">
                    <Gallery data={data["gallery"]} />
                </section>        
            </div> 
        </div>
    );
}