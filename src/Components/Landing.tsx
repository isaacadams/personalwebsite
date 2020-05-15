import { NavPageComponent } from "./Shared/NavPageComponent";
import { Gallery } from "./Gallery";
import { Projects } from "./Projects";
import { Home } from "./Home";
import * as React from "react";
import { useData } from "./Shared/useData";

function LandingContent(props) {
    let homeData = useData("home");
    let galleryData = useData("gallery");

    return (
        <div className="row">   
            <section className="col-12">
                <h2>Isaac Adams</h2>
                <Home data={homeData} />
            </section>
            <hr className="col-12 py-2" />
            <section className="col-12">
                <Projects />
            </section>
            <hr className="col-12 py-2" />
            <section className="col-12">
                <Gallery data={galleryData} />
            </section>        
        </div> 
    );
}

export class Landing extends NavPageComponent {
    constructor(props: any) {
        super(props);
    }

    render() {        
        return <LandingContent />;
    }
}