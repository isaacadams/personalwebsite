import * as React from 'react';
import { PageComponent } from './Shared/Page';


export class Gallery extends PageComponent<string> {
    constructor(props: any) {
        super(props);
        this.datafilename = "gallery";
    }

    render() {
        let element: JSX.Element = super.render();
        if (element)
            return element;

        let imgCss: any = {
            "objectFit": "cover"
        };
//hello
        return (
            <div className="container">
                <div className="row">
                    {this.state.data.map((value: string, index: number) => 
                        <img className="col-lg-4 col-12 py-3" style={imgCss} key={index} src={value} />
                    )}
                </div>                
            </div>
        );
    }
}