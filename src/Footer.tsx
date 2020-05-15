import * as React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
let packagejson = require('../package.json');

export function Footer() {
    return (
        <footer className="row pb-5 d-flex justify-content-center">
            <hr className="col-12 py-2" />
            <span className="w-75 justify-content-around d-flex">
                <div className="d-flex align-items-center">{packagejson.author}</div>
                <div className="d-flex align-items-center">v{packagejson.version}</div>
                <div><a className="page-link text-dark" href="https://github.com/isaacadams/personalwebsite/tree/master"><FontAwesomeIcon icon={["fab", "github"]} className="mr-2" />source</a></div>
            </span>
        </footer>
    );
}