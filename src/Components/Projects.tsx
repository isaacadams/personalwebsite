import * as React from 'react';
import { PageComponent } from './Shared/Page';

interface data {
    title: string,
    description: string,
    image: string
}

export class Projects extends PageComponent<data> {

    constructor(props: any) {
        super(props);
        this.datafilename = "projects";
    }

    render() {

        let element: JSX.Element = super.render();
        if (element)
            return element;



        return (
            <div>
                {this.state.data.map((val: data, index) =>
                    <div key={index} className="card">
                        <img src="{val.image}" />
                        <h2 className="title">{val.title}</h2>
                        <p className="message">{val.description}</p>
                    </div>
                )}
            </div>
        );
    }
}