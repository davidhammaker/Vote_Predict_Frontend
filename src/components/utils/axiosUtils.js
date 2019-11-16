import axios from 'axios';
import { getCookie, setCookie } from './cookieFunctions';


let backendUrl = process.env.REACT_APP_BACKEND;

export default class AxiosUtils {
  static login(username, password, successCallback = null, failureCallback = null) {
    /**
     * Sends a username and password to the backend, then receives an
     * authentication token, which is stored as a cookie.
     * @param {str} username The login username.
     * @param {str} password The login password.
     * @param {function} successCallback Callback function on success.
     * @param {function} failureCallback Callback function on failure.
     */
    const data = {username: username, password: password};
    const config = {headers: {'X-CSRFToken': getCookie('csrftoken')}};
    axios.post(`${backendUrl}api-token-auth/`, data, config)
    .then((response) => {
      setCookie('token', response.data['token']);
      setCookie('username', username);
      if (successCallback) {
        successCallback(response);
      }
    })
    .catch(
      (errors) => {
        if (failureCallback) {
          failureCallback(errors);
        }
      }
    );
  }

  static signUp(username, email, password, successCallback = null, failureCallback = null) {
    /**
     * Sends a username, email, and password to the backend to the backend to
     * create a new User.
     * @param {str} username The new user's username.
     * @param {str} email The new user's email address.
     * @param {str} password The new user's password.
     * @param {function} successCallback Callback function on success.
     * @param {function} failureCallback Callback function on failure.
     */
    const data = {username: username, email: email, password: password};
    const config = {headers: {'X-CSRFToken': getCookie('csrftoken')}};
    axios.post(`${backendUrl}users/`, data, config)
    .then((response) => {
      if (successCallback) {
        successCallback(response);
      }
    })
    .catch(
      (errors) => {
        if (failureCallback) {
          failureCallback(errors);
        }
      }
    );
  }

  static getQuestions(successCallback = null, failureCallback = null) {
    /**
     * Retrieves a list of Questions.
     * @param {function} successCallback Callback function on success.
     * @param {function} failureCallback Callback function on failure.
     */
    axios.get(`${backendUrl}questions/`)
    .then((response) => {
      if (successCallback) {
        successCallback(response);
      }
    })
    .catch(
      (errors) => {
        if (failureCallback) {
          failureCallback(errors);
        }
      }
    );
  }
}
