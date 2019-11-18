import React from 'react';
import Urls from '../urls';
import { getCookie } from './utils/cookieFunctions';


export default function NavBar() {
  const token = getCookie('token');
  const username = getCookie('username');
  return (
    <nav className="navbar navbar-expand-sm text-muted">
      <a className="navbar-brand text-decoration-none" href={ Urls.home() }>VOTE PREDICT</a>
      <ul className="navbar-nav w-100 justify-content-end">
        <li className="navbar-item">
          <a className="nav-link" href={ Urls.home() }>Home</a>
        </li>
        <li className="navbar-item">
          <span className="nav-link disabled no-mobile" >|</span>
        </li>
        <li className="navbar-item">
          <a className="nav-link" href={ Urls.about() }>About</a>
        </li>
        <li className="navbar-item">
          <span className="nav-link disabled no-mobile" >|</span>
        </li>
        {!token && (
          <li className="navbar-item">
            <a className="nav-link" href={ Urls.login() }>Log In</a>
          </li>
        )}
        {token && (
          <li className="navbar-item">
            <a className="nav-link" href={ Urls.logout() }>Log Out { username }</a>
          </li>
        )}
      </ul>
    </nav>
  );
}
