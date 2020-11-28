import myFirebase from './myFirebase';
import React, { useEffect, useState } from 'react';

export function useAuthHook(): { user: firebase.default.User, loading: boolean, error: string} {
    let [user, setUser] = useState<firebase.default.User>(myFirebase.auth.currentUser);
    let [loading, setLoading] = useState<boolean>(undefined);
    let [error, setError] = useState<string>(undefined);

    useEffect(() => {

        let unsubscribe = myFirebase.auth.onAuthStateChanged(u => { setUser(u) });

        return () => {
            unsubscribe();
        }
    }, []);

    return {
        user, 
        loading, 
        error
    }
}
