import React, { useState, useEffect } from 'react';

export function useData(filename) {
    
    let [data, setData] = useState([]);

    useEffect(() => {

        let endpoint = "/generated/data/" + filename + ".json";
        fetch(endpoint, {
            method: 'GET',
            headers: {
                Accept: 'application/json, text/html',
                'Content-Type': 'application/json'
            }
        }).then(r => {
            //console.log(r);
            return r.json();           
        }).then(data => {
            setData(data);
        });
    }, [filename]);

    return data;
}

{/* <div className="container text-center">
    <span className="fa fa-spinner"></span>
</div> */}