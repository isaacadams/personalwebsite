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
            <div>
                <div className="container px-5">
                    {this.state.data.map(d => 
                        <div className="row pt-4 align-items-center">                
                            <h3 className="col-2 text-right m-0">
                                {d.title}
                            </h3>
                            <span className="col-5">
                                {d.message}
                            </span>
                        </div>
                    )}                
                </div>
                {/* <Projects match={null} />
                <Gallery match={null} /> */}
            </div>
        );
    }
}