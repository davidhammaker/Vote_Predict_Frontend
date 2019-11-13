import React, { useState } from 'react';
import AxiosUtils from './utils/axiosUtils';
import Utils from './utils/generalUtils';


export default function SignUp() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [usernameError, setUsernameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [confirmPasswordError, setConfirmPasswordError] = useState('');

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  }

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  }

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  }

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  }

  const signupSuccess = () => {
    setUsernameError('');
    setEmailError('');
    setPasswordError('');
    setConfirmPasswordError('');
    const loginSuccess = () => Utils.navigateTo('/');
    AxiosUtils.login(username, password, loginSuccess);
  }

  const signupFailure = (errors) => {
    console.log(errors.response.data);
    for (let error in errors.response.data) {
      if (error === 'username') {
        setUsernameError('That username is already in use.');
      }
      if (error === 'email') {
        setEmailError('That email address is already in use.');
      }
      if (error === 'password') {
        setPasswordError('Unknown password error.');
      }
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    let errors = false;
    if (!username) {
      setUsernameError('Username is required.');
      errors = true;
    } else {
      setUsernameError('');
    }
    if (!email) {
      setEmailError('Email address is required.');
      errors = true;
    } else {
      setEmailError('');
    }
    if (!password) {
      setPasswordError('Password is required.');
      errors = true;
    } else {
      setPasswordError('');
    }
    if (!confirmPassword || password !== confirmPassword) {
      setConfirmPasswordError('Passwords must match.');
      errors = true;
    } else {
      setConfirmPasswordError('');
    }
    if (!errors) {
      AxiosUtils.signUp(username, email, password, signupSuccess, signupFailure);
    }
  }

  return (
    <div className="d-flex align-items-center min-vh-100">
      <div className="container">
        <h3 className="color-very-light font-weight-bold text-center mb-3">
          Sign Up
        </h3>
        <div className="row">
          <form onSubmit={ handleSubmit } className="p-4 col-md-4 mx-auto">
            <div className="form-group mb-0">
              <label className="text-muted">Username:</label>
              <input
                type="text"
                value={ username }
                onChange={ handleUsernameChange }
                className="form-control" />
            </div>
            
            <div className="text-center">
              <small style={{color: "#f00", textAlign: "center"}}>{ usernameError }</small>
            </div>
            <div className="form-group mb-0 mt-4">
              <label className="text-muted">Email Address:</label>
              <input
                type="text"
                value={ email }
                onChange={ handleEmailChange }
                className="form-control" />
            </div>
            
            <div className="text-center">
              <small style={{color: "#f00", textAlign: "center"}}>{ emailError }</small>
            </div>
            <div className="form-group mb-0 mt-4">
              <label className="text-muted">Password:</label>
              <input
                type="password"
                value={ password }
                onChange={ handlePasswordChange }
                className="form-control" />
            </div>
            <div className="text-center">
              <small style={{color: "#f00", textAlign: "center"}}>{ passwordError }</small>
            </div>
            <div className="form-group mb-0 mt-4">
              <label className="text-muted">Confirm password:</label>
              <input
                type="password"
                value={ confirmPassword }
                onChange={ handleConfirmPasswordChange }
                className="form-control" />
            </div>
            <div className="text-center">
              <small style={{color: "#f00", textAlign: "center"}}>{ confirmPasswordError }</small>
            </div>
            <div className="d-flex justify-content-end">
              <input type="submit" value="Submit" className="btn btn-secondary mt-3" />
            </div>
            <div className="text-muted col-sm p-4 text-center">Already have an account? <a className="text-muted text-decoration-none" href="/login">LOG&nbsp;IN</a></div>
          </form>
        </div>
      </div>
    </div>
  )
}
