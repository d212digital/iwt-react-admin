import React, { useState } from 'react';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import * as firebase from 'firebase/app';
import PropTypes from 'prop-types';
import ModalLoginForm from '../ModalLoginForm';
import { auth, authError } from '../../../redux/actions/authActions';

function withAuthFirebase(WrappedComponent) {
  const HocAuth = (props) => {
    const { history, dispatch } = props;
    const [error, setError] = useState('');
    const [isOpen, setIsOpen] = useState(false);
    const closeModal = () => {
      setIsOpen(!isOpen);
    };

    const onSubmitFireBase = async ({ username, password }) => {
      setError('');
      try {
        const res = await firebase.auth().signInWithEmailAndPassword(username, password);
        dispatch(auth({ name: res.user.email }));
        history.push('/dashboard_mobile_app');
        setIsOpen(false);
      } catch (e) {
        setError(e.message);
      }
    };

    const onLoginGoogle = async () => {
      const provider = new firebase.auth.GoogleAuthProvider();
      try {
        const res = await firebase.auth().signInWithPopup(provider);
        localStorage.setItem('easydev', res.credential.accessToken);
        dispatch(auth({ name: res.user.displayName, avatar: res.user.photoURL }));
        history.push('/dashboard_mobile_app');
      } catch (e) {
        dispatch(authError(e.message));
      }
    };

    const onLoginFacebook = async () => {
      const provider = new firebase.auth.FacebookAuthProvider();
      try {
        const res = await firebase.auth().signInWithPopup(provider);
        localStorage.setItem('easydev', res.credential.accessToken);
        dispatch(auth({ name: res.user.displayName, avatar: res.user.photoURL }));
        history.push('/dashboard_mobile_app');
      } catch (e) {
        dispatch(authError(e.message));
      }
    };

    const changeIsOpenModalFireBase = () => {
      setIsOpen(true);
      setError('');
    };

    return (
      <div className="account">
        <ModalLoginForm
          title="Sign in with Firebase"
          isOpen={isOpen}
          error={error}
          form="log_in_modal"
          onSubmit={onSubmitFireBase}
          closeModal={closeModal}
          onGoogleClick={onLoginGoogle}
          onFacebookClick={onLoginFacebook}
        />
        <WrappedComponent {...props} changeIsOpenModalFireBase={changeIsOpenModalFireBase} />
      </div>
    );
  };

  HocAuth.propTypes = {
    history: PropTypes.shape({
      push: PropTypes.func,
    }).isRequired,
    dispatch: PropTypes.func.isRequired,
  };

  return connect()(withRouter(HocAuth));
}

export default withAuthFirebase;
