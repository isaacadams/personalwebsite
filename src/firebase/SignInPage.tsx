import * as React from 'react';
import {WrappedComponentProps} from 'react-with-firebase-auth';
import createWithAuth from './createWithAuth';
import {Google} from 'grommet-icons';
import {Button, ButtonProps} from 'grommet';
import {ShowLoading} from '../Components/Shared/ShowLoading';

function ShowLogin({signIn}) {
  return (
    <Layout
      header={`Log in`}
      button={{
        label: 'Sign in with Google',
        icon: <Google />,
      }}
      onClick={signIn}
    />
  );
}

function ShowLogout({name, signOut}) {
  return (
    <Layout
      header={`Hello, ${name}`}
      button={{
        label: 'Sign Out',
      }}
      onClick={signOut}
    />
  );
}

interface IProps {
  header: string;
  button: ButtonProps;
  onClick: any;
}

function Layout({header, button, onClick}: IProps) {
  return (
    <div className="d-flex flex-column align-items-center">
      <h1>{header}</h1>
      <Button {...button} onClick={onClick} />
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
  <div>
    <div>
      {!loading &&
        (user ? (
          <ShowLogout name={user.displayName} signOut={signOut} />
        ) : (
          <ShowLogin signIn={signInWithGoogle} />
        ))}
      {loading && <ShowLoading />}
    </div>
  </div>
);

export default createWithAuth(SignInPage);
