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
     * Returns query parameters from the current URL.
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

  static getPathParameters(pathFormat) {
    /**
     * Returns parameters contained in a URL path.
     * @param {str} pathFormat The format of the path from which
     *  parameters can be parsed. Parameters should be designated by a
     *  name with surrounding carats.
     * @return {obj} An object with all parameters and values.
     */
    let parameterObject = {};
    let pathFormatArray = pathFormat.split('/');
    let pathArray = window.location.pathname.split('/');
    for (let i = 0; i < pathFormatArray.length; i += 1) {
      if (pathArray[i] !== pathFormatArray[i]) {
        const key = pathFormatArray[i].slice(
          1, pathFormatArray[i].length - 1
        );
        const value = pathArray[i];
        parameterObject[key] = value;
      }
    }
    return parameterObject;
  }
}
