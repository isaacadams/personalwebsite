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
            <div className="mt-3 row justify-content-center">
                <div className="col-auto mb-4">
                    <ProjectCard 
                        name="Game of War" 
                        website="https://cards-gameofwar.web.app/"
                        github="https://github.com/isaacadams/GameOfWar"
                        image="assets/imgs/hide/cards.svg" 
                        message="I created a simulation of the classic card game called 'Game of War'"
                        tags={["react", "javascript", "css", "less"]} />
                </div>
                <div className="col-auto mb-4">
                    <ProjectCard 
                        name="Jenkins" 
                        website="https://lightsail.isaacadams.me/jenkins/" 
                        github="https://github.com/isaacadams/naruto"
                        image="https://jenkins.io/images/logos/jenkins/jenkins.svg" 
                        message="I host and maintain my own jenkins server which is used to build all of my public and private projects"
                        tags={["docker", "linux", "lightsail", "nginx"]} />
                </div>
            </div>
        );
    }
}