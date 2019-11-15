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

        return (
            <div id="gallery">
                {this.state.data.map((value: string, index: number) => <img key={index} src={value} />)}
            </div>
        );
    }
}