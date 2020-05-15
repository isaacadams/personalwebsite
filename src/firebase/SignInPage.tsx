import * as React from 'react';
import { WrappedComponentProps } from 'react-with-firebase-auth';
import createWithAuth from './createWithAuth';

function ShowLogin({signIn}) {
  return (
    <React.Fragment>
      <h1>Log in</h1>
      <button className="btn btn-primary" onClick={signIn}>Sign in with Google</button>
    </React.Fragment>
  );
}

function ShowLogout({name, signOut}) {

  return (
    <React.Fragment>
      <h1>Hello, {name}</h1>
      <button className="btn btn-primary" onClick={signOut}>Sign out</button>
    </React.Fragment>
  );
}

let ShowLoading = () => (<h2>Loading..</h2>);


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
          ? <ShowLogout name={user.displayName} signOut={signOut} />
          : <ShowLogin signIn={signInWithGoogle} />
      }
  
      {
        loading && <ShowLoading />
      }
    </React.Fragment>
  );

export default createWithAuth(SignInPage);