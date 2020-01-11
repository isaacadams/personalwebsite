import * as React from 'react';
import { PageComponent } from './Shared/Page';
import { Gallery } from './Gallery';
import { Projects } from './Projects';

interface data {
    title: string,
    message: string
}

export class Home extends PageComponent<data> {
    
    constructor(props: any) {
        super(props);
        this.datafilename = "home";
            
    }

    render() {
        let element: JSX.Element = super.render();
        if (element)
            return element;

        return (
            <div className="container-lg px-lg-5">
                {this.state.data.map(d =>
                    <div className="row pt-5 align-items-center justify-content-center">
                        <h3 className="col-12 col-lg-2 text-lg-right m-lg-0">
                            {d.title}
                        </h3>
                        <span className="col-12 col-lg-6">
                            {d.message}
                        </span>
                    </div>
                )}
            </div>
        );
    }
}