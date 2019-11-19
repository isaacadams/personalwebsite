import * as React from 'react';
import { PageComponent } from './Shared/Page';
import { Link, Route } from 'react-router-dom';
import { ProjectCard } from './Projects/projectCard';

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

       
        return (
            <div className="container">
                <div className="row">
                    <div className="col-auto">
                        <ProjectCard name="Game of War" link="https://cards-gameofwar.web.app/" image="" message="Hello World" />
                    </div>
                    <div className="col-auto">
                        <ProjectCard 
                            name="Jenkins" 
                            link="https://lightsail.isaacadams.me/jenkins/" 
                            image="https://jenkins.io/images/logos/jenkins/jenkins.svg" 
                            message="I host maintain my own jenkins server which is used to build all of my public and private projects" />
                    </div>
                </div>                
            </div>
        );
    }
}