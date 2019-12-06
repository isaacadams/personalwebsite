import * as React from 'react';
import { NavItemsParent } from './NavItemsParent';

interface IState {
    showing: boolean;
    active: string;
}

export default class Navbar extends React.Component<any, IState> {

    constructor(props) {
        super(props);

        this.state = {
            showing: false,
            active: "/"
        };

        this.handleTogglerClick = this.handleTogglerClick.bind(this);
    }

    handleTogglerClick(e) {
        this.setState({
            showing: !this.state.showing
        });
    }

    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-transparent">
                <a className="navbar-brand" href="/">Isaac Adams</a>
                <button className={`navbar-toggler ${(this.state.showing ? "" : "collapsed")}`} 
                        onClick={this.handleTogglerClick} 
                        type="button" 
                        data-toggle="collapse" 
                        data-target="#navbarText" 
                        aria-controls="navbarText" 
                        aria-expanded="false" 
                        aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className={`collapse navbar-collapse d-flex ${(this.state.showing ? "show" : "")}`} id="navbarText">
                    <NavItemsParent />
                    {/* <form className="form-inline">
                        <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                    </form> */}
                </div>
            </nav>
        );
    }
}