import * as React from 'react';

interface IProps {
    website: string;
    github: string;
    name: string;
    message: string;
    image: string;
}

export class ProjectCard extends React.Component<IProps, any> {

    constructor(props: IProps) {
        super(props);
    }

    render() {
        return (
            <div className="card" style={{ width: "18rem" }}>
                <img className="card-img-top" src={this.props.image} style={{ height: "16rem"}} />        
                <div className="card-body">
                    <h5 className="card-title">{this.props.name}</h5>
                    <p className="card-text">{this.props.message}</p>
                    <div className="d-flex justify-content-between">
                        <a href={this.props.website} className="btn  btn-outline-info">Website</a>
                        <a href={this.props.github} className="btn btn-secondary"><span className="fa fa-github"></span> GitHub</a>
                    </div>
                </div> 
            </div>            
        );
    }
}