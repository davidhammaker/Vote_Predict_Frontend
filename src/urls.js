export default class Urls {
  static here() {
    return window.location.pathname;
  }
  static home() {
    return "/";
  };
  static signup() {
    return "/signup";
  };
  static login() {
    return "/login";
  };
  static logout() {
    return "/logout";
  };
  static about() {
    return "/about";
  };
  static questions(id) {
    if (id) {
      return `/questions/${id}`;
    }
    return "/questions";
  };
}
