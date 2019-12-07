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
                    <h3 className="col-12">
                        What is this?
                    </h3>
                    <div className="col lead">
                        A place where I log mistakes or tasks that I failed to complete.
                        <br />
                        My philosophy is that success is made from the accumulation of mistakes you made on they way there.
                        <br />
                        So this acts as a journal of sorts, documenting my path to success.
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
