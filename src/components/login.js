import React from 'react';
import axiosUtils from './utils/axiosUtils';


export default function Login() {
  return (
    <button
      onClick={() => {axiosUtils.login('username', 'password');}}
    >
      Click Me
    </button>
  )
}