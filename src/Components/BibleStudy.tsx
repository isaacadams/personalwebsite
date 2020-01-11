import { NavPageComponent } from "./Shared/NavPageComponent";
import React from "react";



export class BibleStudy extends NavPageComponent {
    constructor(props: any) {
        super(props);
    }
    render() {
        return (
            <div className="row">
                Hello Worlds
            </div>
        );
    }
}
