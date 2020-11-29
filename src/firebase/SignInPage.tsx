import * as React from 'react';
import {WrappedComponentProps} from 'react-with-firebase-auth';
import createWithAuth from './createWithAuth';
import {Google} from 'grommet-icons';
import {Box, Button, ButtonProps, Heading} from 'grommet';
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
    <Box>
      <Heading size={'1'}>{header}</Heading>
      <Button {...button} onClick={onClick} />
    </Box>
  );
}

function SignInPage({
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
}: WrappedComponentProps) {
  return (
    <>
      {!loading &&
        (user ? (
          <ShowLogout name={user.displayName} signOut={signOut} />
        ) : (
          <ShowLogin signIn={signInWithGoogle} />
        ))}
      {loading && <ShowLoading />}
    </>
  );
}

export default createWithAuth(SignInPage);
