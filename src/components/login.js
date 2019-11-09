import React, { useState, useEffect } from 'react';
import axiosUtils from './utils/axiosUtils';


export default function Login() {
  return (
    <div className="d-flex align-items-center min-vh-100">
      <div className="container">
        <h3 className="color-very-light font-weight-bold text-center mb-3">
          Log In
        </h3>
        <div className="row">
          <div className="col-md-4" />
          <form onSubmit="{ this.handleSubmit }" className="p-4 col-md-4">
            <div message="{ message }" />
            <small></small>
            <div className="form-group mb-4">
              <label className="text-muted">Username:</label>
              <input
                type="text"
                value="{ this.state.value }"
                onChange="{ this.handleUsernameChange }"
                className="form-control" />
            </div>
            <div className="form-group mb-4">
              <label className="text-muted">Password:</label>
              <input
                type="password"
                value="{ this.state.value }"
                onChange="{ this.handlePasswordChange }"
                className="form-control" />
            </div>
            <div className="d-flex justify-content-end">
              <input type="submit" value="Submit" className="btn btn-secondary mt-2" />
            </div>
          </form>
          <div className="col-md-4" />
        </div>
      </div>
    </div>
  )
}