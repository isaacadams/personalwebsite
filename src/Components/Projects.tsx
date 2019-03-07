import * as React from 'react';
import { PageComponent } from './Shared/Page';
import { Link, Route } from 'react-router-dom';
import { GameOfWar } from './Projects/gameofwar';

interface data {
    title: string,
    description: string,
    image: string,
    link: string
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

        let url = this.match.url;

        return (
            <div>
                <Route path={`${url}/gameofwar`} component={GameOfWar} />
                <Route
                    exact
                    path={url}
                    render={() =>
                        <div>
                            {this.state.data.map((val: data, index) =>
                                <div key={index} className="card">
                                    <img src="{val.image}" />
                                    <Link to={`${url}/gameofwar`}><h2 className="title">{val.title}</h2></Link>
                                    <p className="message">{val.description}</p>
                                </div>
                            )}
                        </div>}
                />


                
            </div>
        );
    }
}