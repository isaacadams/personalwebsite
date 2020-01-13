import * as React from 'react';
import { useData } from './Shared/useData';

interface data {
    title: string,
    message: string
}

export function Home(props) {
    let data = useData("home");

    return (
        <div className="container-lg px-lg-5 pb-2">
            {data.map((d, i) =>
                <div key={i} className="row pt-5 align-items-center justify-content-center">
                    <h3 className="col-12 col-lg-2 text-lg-right m-lg-0">
                        {d.title}
                    </h3>
                    <span className="col-12 col-lg-6">
                        {d.message}
                    </span>
                </div>
            )}
        </div>
    );
}