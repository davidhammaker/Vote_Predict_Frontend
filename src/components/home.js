import React from 'react';
import { getCookie } from './utils/cookieFunctions';


export default function Home() {
  const token = getCookie('token');
  return (
    <div className="d-flex align-items-center min-vh-100">
      <div className="container text-center">
        <h1 className="color-very-light font-weight-bold mb-5">
          <span className="title-style">VOT</span>E<span className="title-style"> PREDIC</span>T
        </h1>
        <h6 className="row">
          {!token && (
            <>
              <div className="col-sm p-4"><a className="text-muted text-decoration-none" href="/signup">Sign&nbsp;Up</a></div>
              <div className="col-sm p-4"><a className="text-muted text-decoration-none" href="/login">Log&nbsp;In</a></div>
            </>
          )}
          {token && (
            <div className="col-sm p-4"><a className="text-muted text-decoration-none" href="/logout">Log&nbsp;Out</a></div>
          )}
          <div className="col-sm p-4"><a className="text-muted text-decoration-none" href="/about">Where&nbsp;am&nbsp;I?</a></div>
        </h6>
      </div>
    </div>
  );
}