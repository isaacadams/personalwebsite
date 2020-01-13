import * as React from 'react';
import { useData } from './Shared/useData';

export function Gallery(props) {
    let data = useData("gallery");
    
    let imgCss: any = {
        "objectFit": "cover"
    };

    return (
        <div className="container">
            <div className="row">
                {data.map((value: string, index: number) => 
                    <img className="col-lg-4 col-12 py-3" style={imgCss} key={index} src={value} />
                )}
            </div>                
        </div>
    );
}