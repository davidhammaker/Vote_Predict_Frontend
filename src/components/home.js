import React from 'react';
import Urls from '../urls';
import { getCookie } from './utils/cookieFunctions';
import Utils from './utils/generalUtils';


export default function Home() {
  const token = getCookie('token');
  if (token) {
    Utils.navigateTo(Urls.questions());
  }
  return (
    <>
      {!token && (
        <div className="d-flex align-items-center min-vh-100">
          <div className="container text-center">
            <h1 className="color-very-light font-weight-bold mb-5">
              <span className="title-style">VOT</span>E<span className="title-style"> PREDIC</span>T
            </h1>
            <h6 className="row">
              {!token && (
                <>
                  <div className="col-sm p-4">
                    <a className="text-decoration-none" href={ Urls.signup() }>
                      Sign&nbsp;Up
                    </a>
                  </div>
                  <div className="col-sm p-4">
                    <a className="text-decoration-none" href={ Urls.login() }>
                      Log&nbsp;In
                    </a>
                  </div>
                </>
              )}
              <div className="col-sm p-4">
                <a className="text-decoration-none" href={ Urls.about() }>
                  Where&nbsp;am&nbsp;I?
                </a>
              </div>
            </h6>
          </div>
        </div>
      )}
    </>
  );
}