import React from 'react';
import { getCookie } from './utils/cookieFunctions';


export default function NavBar() {
  const token = getCookie('token');
  const username = getCookie('username');
  return (
    <nav className="navbar navbar-expand-sm text-muted">
      <a className="navbar-brand text-decoration-none" href="/">VOTE PREDICT</a>
      <ul className="navbar-nav w-100 justify-content-end">
        <li className="navbar-item">
          <a className="nav-link" href="/">Home</a>
        </li>
        <li className="navbar-item">
          <a className="nav-link disabled" >|</a>
        </li>
        <li className="navbar-item">
          <a className="nav-link" href="/about">About</a>
        </li>
        <li className="navbar-item">
          <a className="nav-link disabled" >|</a>
        </li>
        {!token && (
          <li className="navbar-item">
            <a className="nav-link" href="/login">Log In</a>
          </li>
        )}
        {token && (
          <li className="navbar-item">
            <a className="nav-link" href="/logout">Log Out { username }</a>
          </li>
        )}
      </ul>
    </nav>
  );
}
