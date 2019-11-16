import * as React from 'react';
import { Link } from "react-router-dom";

interface NavItemProps {
    href: string;
    text: string;
    notifyParent: (href: string) => void;
    active: boolean;
}

export class NavItem extends React.Component<NavItemProps, any> {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        this.props.notifyParent(this.props.href);
    }
    
    render() {
        return (
            <li onClick={this.handleClick} className={`nav-item ${(this.props.active ? "active" : "")}`}>
                <Link to={this.props.href} className="nav-link">{this.props.text}</Link>
            </li>
        );
    }
}