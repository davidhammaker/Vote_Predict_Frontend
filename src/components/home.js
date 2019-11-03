import React from 'react';


export default function Home() {
  return (
    <div className="d-flex align-items-center min-vh-100">
      <div className="container text-center">
        <h1 className="color-very-light font-weight-bold mb-5">
          <span className="title-style">VOT</span>E<span className="title-style"> PREDIC</span>T</h1>
        <div >
          <h6 className="row">
            <div className="col-sm-4 p-4"><a className="text-muted text-decoration-none" href="/">Sign&nbsp;Up</a></div>
            <div className="col-sm-4 p-4"><a className="text-muted text-decoration-none" href="/login">Log&nbsp;In</a></div>
            <div className="col-sm-4 p-4"><a className="text-muted text-decoration-none" href="/">Where&nbsp;am&nbsp;I?</a></div>
          </h6>
        </div>
      </div>
    </div>
  );
}