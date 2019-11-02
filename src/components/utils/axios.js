import axios from 'axios';
import { getCookie } from './cookiefunctions';

let backendUrl = '';
if (process.env.NODE_ENV == 'development') {
  backendUrl = 'http://localhost:8000/';
}
else {
  backendUrl = 'example.com'
}

export default function login(username, password) {
  /**
   * Sends a username and password to the backend, then receives an
   * authentication token, which is stored as a cookie.
   * @param {str} username The login username.
   * @param {str} password The login password.
   */
  const data = {username: username, password: password};
  const config = {headers: {'X-CSRFToken': getCookie('csrftoken')}};
  axios.post(`${backendUrl}api-token-auth/`, data, config)
  .then((response) => {
    document.cookie = `token=${response.data['token']}`;
    console.log(response.data['token']);
  })
  .catch(
    (errors) => {
      console.log(errors);
    }
  );
}
