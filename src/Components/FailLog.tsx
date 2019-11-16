import * as React from 'react';
import { PageComponent } from './Shared/Page';

interface ILog {
    date: Date;
    message: string;
    tags: string[]; // a way to group failures into related categories
}

export class FailLog extends PageComponent<ILog> {
    constructor(props: any) {
        super(props);
        this.datafilename = "fails";
    }
    render() {
        let element: JSX.Element = super.render();
        if (element)
            return element;
        
        return (
            <div className="container my-4">
                <div className="row pb-3">
                    <h3 className="col-lg-auto col-12">
                        What is this?
                    </h3>
                    <div className="col lead">
                        Here is where you can find a log that I frequently update concerning tasks I failed to complete.
                        I feel that this keeps me humble and motivated to keep pushing forward. 
                        It also helps remind me what I have been working on or what I have left to do.
                    </div>
                </div>
                {this.state.data.map((val, index) =>
                    <div key={index} className="row py-2">
                        <div className="col-2">{val.date}</div>
                        <div className="col">{val.message}</div>
                    </div>
                )}
            </div>
        );
    }
}
