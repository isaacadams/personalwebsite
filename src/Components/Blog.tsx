import * as React from 'react';
import {GetSignInMethods} from '../firebase/database';

export function Blog(props) {

    return(
        <button className="btn btn-outline-dark" onClick={GetSignInMethods}>Do Something</button>
    );
}