import React, { useEffect } from "react";
import myFirebase from './myFirebase';

export interface IDatabaseProps<T> {
    table: string;
    transform?: (data: any) => T;
}

export interface IDatabaseReturn<T> {
    error: boolean | string,
    loading: boolean,
    data: T,
}

export function useDatabase<T>({ table, transform }: IDatabaseProps<T>): IDatabaseReturn<T> {

    // initialize our default state
    let [error, setError] = React.useState(false);
    let [loading, setLoading] = React.useState(true);
    let [data, setData] = React.useState<T>(null);

    useEffect(() => {

        const db = myFirebase.app.database();
        let tableRef = db.ref(table);
        tableRef.on('value',
            snapShot => {
                setLoading(false);
                let feed = snapShot.val();
                if (transform)
                    feed = transform(feed);
                setData(feed);
            },
            setError
        );
        return () => tableRef?.off();
    }, [table]);

    return {
        error,
        loading,
        data,
    };
}
