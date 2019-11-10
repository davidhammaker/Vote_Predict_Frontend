import axios from 'axios';
import { getCookie, setCookie } from './cookieFunctions';


let backendUrl = process.env.REACT_APP_BACKEND;

export default class AxiosUtils {
  static login(username, password, success, failure) {
    /**
     * Sends a username and password to the backend, then receives an
     * authentication token, which is stored as a cookie.
     * @param {str} username The login username.
     * @param {str} password The login password.
     * @param {function} success Callback function on success.
     * @param {function} failure Callback function on failure.
     */
    const data = {username: username, password: password};
    const config = {headers: {'X-CSRFToken': getCookie('csrftoken')}};
    axios.post(`${backendUrl}api-token-auth/`, data, config)
    .then((response) => {
      setCookie('token', response.data['token']);
      success(response);
    })
    .catch(
      (errors) => {
        failure(errors);
      }
    );
  }
}
