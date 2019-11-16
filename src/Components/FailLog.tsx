import * as React from 'react';
import { PageComponent } from './Shared/Page';

interface ILog {
    date: Date;
    message: string;
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
            <div className="container mt-4">
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
