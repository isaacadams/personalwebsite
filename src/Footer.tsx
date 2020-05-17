import * as React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import meta from './meta';

export function Footer() {
    return (
        <div className="col-12">
            <div className="row pb-5 d-flex justify-content-center">
                <hr className="col-12 py-2" />
                <span className="w-75 justify-content-around d-flex">
                    <div className="d-flex align-items-center">{meta.owner}</div>
                    <div className="d-flex align-items-center">{meta.version}</div>
                    <div><a className="page-link text-dark" href="https://github.com/isaacadams/personalwebsite/tree/master"><FontAwesomeIcon icon={["fab", "github"]} className="mr-2" />source</a></div>
                </span>
            </div>
        </div>
    );
}