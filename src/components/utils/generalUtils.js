export default class Utils {
  static navigateTo(path, queryParameters = null) {
    /**
     * Navigates the user to a new location within the web app.
     * @param {str} path The path to the new location.
     * @param {obj} queryParameters The URL query parameters.
     */
    if (queryParameters) {
      let suffix = '?';
      Object.keys(queryParameters).forEach((key, index) => {
        if (index === 0) {
          suffix += `${key}=${queryParameters[key]}`
        }
        else {
          suffix += `&${key}=${queryParameters[key]}`
        }
      });
      window.location.replace(path + suffix);
    }
    else {
      window.location.replace(path);
    }
  }

  static getQueryParameters() {
    /**
     * Retrieves query parameters from the current URL.
     * @return {obj} An object with all parameters and values.
     */
    if (window.location.href.indexOf('?') !== -1) {
      const parameterString = window.location.href.split('?')[1];
      const parameters = parameterString.split('&');
      let parameterObject = {};
      parameters.forEach((parameter) => {
        const key = parameter.split('=')[0];
        const value = parameter.split('=')[1];
        parameterObject[key] = value;
      });
      return parameterObject;
    }
    return {}
  }
}
