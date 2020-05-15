import * as React from 'react';
import { animations } from 'react-animation'
import { NavItemsParent } from './NavItemsParent';

function NavBarView({showing, handleTogglerClick}) {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-transparent">
            {/* <a className="navbar-brand" href="/">put a cool logo here?</a> */}
            <button className={`navbar-toggler ${(showing ? "" : "collapsed")}`} 
                    onClick={handleTogglerClick} 
                    type="button" 
                    data-toggle="collapse" 
                    data-target="#navbarText" 
                    aria-controls="navbarText" 
                    aria-expanded={showing ? "true": "false"} 
                    aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className={`navbar-collapse collapse ${(showing ? "show" : "")}`} style={{animation: animations.slideIn}}>
                <NavItemsParent />
            </div>
        </nav>
    );
}

interface IState {
    showing: boolean;
}

export default class Navbar extends React.Component<any, IState> {

    constructor(props) {
        super(props);

        this.state = {
            showing: false
        };

        this.handleTogglerClick = this.handleTogglerClick.bind(this);
    }

    handleTogglerClick(e) {
        this.setState({
            showing: !this.state.showing
        });
    }

    render() {
        return <NavBarView showing={this.state.showing} handleTogglerClick={this.handleTogglerClick} />;
    }
}