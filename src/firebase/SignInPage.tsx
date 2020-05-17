import * as React from 'react';
import { WrappedComponentProps } from 'react-with-firebase-auth';
import createWithAuth from './createWithAuth';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ShowLoading } from '../Components/Shared/ShowLoading';

function ShowLogin({signIn}) {
  return (
    <Layout 
      header={`Log in`} 
      clickFunction={signIn} 
      buttonContent={
        <React.Fragment>
          <FontAwesomeIcon icon={["fab", "google"]} className="mr-2" /> Sign in with Google
        </React.Fragment>
      } 
    />
  );
}

function ShowLogout({name, signOut}) {
  return (
    <Layout 
      header={`Hello, ${name}`} 
      clickFunction={signOut} 
      buttonContent={"Sign out"} 
    />
  );
}

function Layout({ header, clickFunction, buttonContent }) {
  return (
    <div className="d-flex flex-column align-items-center">
      <h1>{header}</h1>
      <button className="btn btn-outline-dark" onClick={clickFunction}>{buttonContent}</button>
    </div>
  );
}

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
    <div className="bootstrap-styles">
      <div className="d-flex justify-content-center">
        {
          !loading && (user
            ? <ShowLogout name={user.displayName} signOut={signOut} />
            : <ShowLogin signIn={signInWithGoogle} />)
        }
        {
          loading && <ShowLoading />
        }
      </div>
    </div>
  );

export default createWithAuth(SignInPage);