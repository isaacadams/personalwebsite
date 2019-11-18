import * as React from 'react';
import { Link } from "react-router-dom";

interface ILink {
    href: string;
    name: string;
}

interface IProp {
    links: ILink[];
    name: string;
}

export class NavDropdownItem extends React.Component<IProp, any> {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick(e) {
        //this.props.notifyParent(this.props.href);
    }
    render() {
        return (
            <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    {this.props.name}
                </a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                    {this.props.links.map((l, i) => 
                        <Link key={i} to={l.href} className="dropdown-item">{l.name}</Link>
                    )}
                </div>
            </li>
        );
    }
}
