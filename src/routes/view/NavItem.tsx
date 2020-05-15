import * as React from 'react';
import { Link } from "react-router-dom";

interface NavItemProps {
    href: string;
    text: string;
    active: boolean;
}

export function NavItem(props: NavItemProps) {
    return (
        <li className={`nav-item ${(props.active ? "active" : "")}`}>
            <Link to={props.href} className="nav-link">{props.text}</Link>
        </li>
    );
}