import * as React from 'react';

interface IProps {
    link: string;
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
                    <a href={this.props.link} className="btn btn-outline-primary stretched-link">Website</a>
                </div> 
            </div>            
        );
    }
}