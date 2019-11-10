import React from 'react';
import { unsetCookie } from './utils/cookieFunctions';


export default function Logout() {
  unsetCookie('token');
  return (
    <div className="d-flex align-items-center min-vh-100">
      <div className="container text-center">
        <h3 className="color-very-light font-weight-bold text-center mb-3">
          Logged Out
        </h3>
        <div className="row">
        <div className="col-sm p-4"><a className="text-muted text-decoration-none" href="/">Home</a></div>
            <div className="col-sm p-4"><a className="text-muted text-decoration-none" href="/">Log&nbsp;In</a></div>
        </div>
      </div>
    </div>
  );
}
