import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

interface IProps {
    website?: string;
    github: string;
    name: string;
    message: string;
    image: string;
    tags: string[];
}

export class ProjectCard extends React.Component<IProps, any> {

    constructor(props: IProps) {
        super(props);
    }

    render() {
        return (
            <div className="card" style={{ width: "20rem" }}>
                <img className="card-img-top p-2" src={this.props.image} style={{ height: "16rem"}} />        
                <div className="card-body">
                    <h5 className="card-title">{this.props.name}</h5>
                    <p className="card-text mb-1" style={{ height: "6rem" }}>
                        {this.props.message}
                    </p>
                    <span className="d-block small mb-3">{this.props.tags.map(t => `#${t} `)}</span>
                    <div className="d-flex justify-content-between">
                        {this.props.website === undefined ? <div></div> : <a href={this.props.website} className="btn  btn-outline-info">Website</a>}
                        <a href={this.props.github} className="btn btn-secondary">
                            <FontAwesomeIcon icon={["fab", "github"]} />
                            <span className="ml-1">GitHub</span>
                        </a>
                    </div>
                </div> 
            </div>            
        );
    }
}