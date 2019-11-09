export default class Utils {
    static navigateTo(path) {
        /**
         * Navigates the user to a new location within the web app.
         * @param {str} path The path to the new location.
         */
        window.location.replace(path);
    }
}
