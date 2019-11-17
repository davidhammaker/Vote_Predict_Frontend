import React, { useState } from 'react';
import Urls from '../urls';
import AxiosUtils from './utils/axiosUtils';
import Utils from './utils/generalUtils';
import NavBar from './navbar';
import Message from './message';


export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  }

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  }

  const loginSuccess = () => {
    const parameters = Utils.getQueryParameters();
    if (parameters['next'] === 'questions') {
      Utils.navigateTo(Urls.questions());
    }
    else {
      Utils.navigateTo(Urls.home());
    }
    setErrorMessage('');
  }
  const loginFailure = () => {
    setErrorMessage('Incorrect username or password.');
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    AxiosUtils.login(username, password, loginSuccess, loginFailure);
  }

  return (
    <>
      <NavBar />
      <div className="d-flex align-items-center min-vh-100 centralized">
        <div className="container">
          <Message />
          <h3 className="color-very-light font-weight-bold text-center mb-3">
            Log In
          </h3>
          <div className="row">
            <form onSubmit={ handleSubmit } className="p-4 col-md-4 mx-auto">
              <div className="form-group mb-4">
                <label className="text-muted">Username:</label>
                <input
                  type="text"
                  value={ username }
                  onChange={ handleUsernameChange }
                  className="form-control" />
              </div>
              <div className="form-group">
                <label className="text-muted">Password:</label>
                <input
                  type="password"
                  value={ password }
                  onChange={ handlePasswordChange }
                  className="form-control" />
              </div>
              <div className="text-center">
                <small style={{color: "#f00", textAlign: "center"}}>{ errorMessage }</small>
              </div>
              <div className="d-flex justify-content-end">
                <input
                  type="submit"
                  value="Submit"
                  className={!errorMessage ? "btn standard-btn mt-3" : "btn standard-btn mt-1"}
                  />
              </div>
              <div className="text-muted col-sm p-4 text-center">
                Need an account?{' '}
                <a className="text-decoration-none" href={ Urls.signup() }>
                  SIGN&nbsp;UP
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}