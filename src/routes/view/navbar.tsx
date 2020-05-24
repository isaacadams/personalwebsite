import * as React from 'react';
import { animations } from 'react-animation'
import { NavItemsParent } from './NavItemsParent';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import meta from '../../meta';
import { Menu } from 'grommet';
import { routeDefinitions } from '../RouteDefinitions';
import { useHistory } from 'react-router-dom';

function NavBarView({showing, handleTogglerClick}) {
    let history = useHistory();

    return (
        <div className="col-12">
            <nav className="navbar navbar-expand-lg navbar-light bg-transparent">
                <a className="navbar-brand" href="/">Isaac Adams</a>
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
                <div>
                    <Menu
                        icon={false}
                        label={<FontAwesomeIcon icon={["fas", "cog"]} />}
                        items={[
                            { label: routeDefinitions.Blog.name, onClick: () => { history.push(routeDefinitions.Blog.path) } },
                            { label: routeDefinitions.SignIn.name, onClick: () => { history.push(routeDefinitions.SignIn.path) } },
                        ]}
                    />
                </div>
            </nav>
        </div>
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