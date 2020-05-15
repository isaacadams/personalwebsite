import * as React from 'react';
import { WrappedComponentProps } from 'react-with-firebase-auth';
import createWithAuth from './createWithAuth';

const SignInPage = ({
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    signInWithGoogle,
    signInWithFacebook,
    signInWithGithub,
    signInWithTwitter,
    signInAnonymously,
    signOut,
    setError,
    user,
    error,
    loading,
  }: WrappedComponentProps) => (
    <React.Fragment>
      {
        user
          ? <h1>Hello, {user.displayName}</h1>
          : <h1>Log in</h1>
      }
  
      {
        user
          ? <button className="btn btn-primary" onClick={signOut}>Sign out</button>
          : <button className="btn btn-primary" onClick={signInWithGoogle}>Sign in with Google</button>
      }
  
      {
        loading && <h2>Loading..</h2>
      }
    </React.Fragment>
  );

export default createWithAuth(SignInPage);