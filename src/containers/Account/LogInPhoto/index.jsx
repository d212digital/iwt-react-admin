import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'reactstrap';
import FirebaseIcon from 'mdi-react/FirebaseIcon';
import withAuthFirebase from '../../../shared/components/auth/withAuthFirebase';
import { useAuth0 } from '../../../shared/components/auth/withAuth0';
import Loading from '../../../shared/components/Loading';
import LogInFormPhoto from '../../../shared/components/loginPhotoForm/LogInFormPhoto';
import GoogleAuthBtn from '../AuthBtn/googleAuthBtn';
import FacebookAuthBtn from '../AuthBtn/fbAuthBtn';

//const auth0Icon = `${process.env.PUBLIC_URL}/img/auth0.svg`;

const LogInPhoto = ({ changeIsOpenModalFireBase }) => {
  const {
    /*loginWithRedirect*/ loading,
  } = useAuth0();
  if (loading) {
    return (<Loading loading={loading} />);
  }
  return (
    <div className="account account--photo">
      <div className="account__wrapper">
        <div className="account__card">
          <div className="account__head">
            <h3 className="account__title">Sign in to
              <span className="account__logo"> IWT
                <span className="account__logo-accent"> Backoffice</span>
              </span>
            </h3>
            <h4 className="account__subhead subhead">Find your syle</h4>
          </div>
          <LogInFormPhoto
            onSubmit
            form="log_in_form"
          />
          <div className="account__or">
            <p>Alternatively Use </p>
          </div>
          <div className="account__social">
            <FacebookAuthBtn />
            <GoogleAuthBtn />
            <Button
              className="account__social-btn account__social-btn--firebase"
              onClick={changeIsOpenModalFireBase}
            >
              <FirebaseIcon />
            </Button>
            {/* <Button className="account__social-btn account__social-btn--auth0" onClick={() => loginWithRedirect({})}>
              <img className="customizer__btn-icon" src={auth0Icon} alt="icon"/>
            </Button> */}
          </div>
        </div>
      </div>
    </div>
  );
};

LogInPhoto.propTypes = {
  changeIsOpenModalFireBase: PropTypes.func.isRequired,
};

export default withAuthFirebase(LogInPhoto);
