import * as React from 'react';
import { WrappedComponentProps } from 'react-with-firebase-auth';
import createWithAuth from './createWithAuth';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function ShowLogin({signIn}) {
  return (
    <React.Fragment>
      <h1>Log in</h1>
      <button className="btn btn-outline-dark" onClick={signIn}><FontAwesomeIcon icon={["fab", "google"]} className="mr-2" /> Sign in with Google</button>
    </React.Fragment>
  );
}

function ShowLogout({name, signOut}) {

  return (
    <React.Fragment>
      <h1>Hello, {name}</h1>
      <button className="btn btn-outline-dark" onClick={signOut}>Sign out</button>
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
    <div className="d-flex justify-content-center">
      {
        user
          ? <ShowLogout name={user.displayName} signOut={signOut} />
          : <ShowLogin signIn={signInWithGoogle} />
      }
      {
        loading && <ShowLoading />
      }
    </div>
  );

export default createWithAuth(SignInPage);