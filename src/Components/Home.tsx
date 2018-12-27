import * as React from 'react';
import * as $ from 'jquery';
import { PageComponent } from './Shared/Page';

interface data {
    title: string,
    message: string
}

export class Home extends PageComponent<data> {

    constructor(props: any) {
        super(props);
        this.endpoint = "/assets/data/home.json";
    }

    render() {

        let element: JSX.Element = super.render();
        if (element)
            return element;

        let messagebutton = <a href="mailto:isaac.d.adams@gmail.com"><button>Message Me</button></a>

        return (
            <div>                
                {this.state.data.map((val, index) =>
                    <div key={index} className="info">
                        <h2 className="title">{val.title}</h2>
                        <p className="message">{val.message}</p>
                        {index == this.state.data.length - 1 ? messagebutton : null}
                    </div>
                )}                
            </div>
        );
    }
}