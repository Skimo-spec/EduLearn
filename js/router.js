/**
 * Router Module
 * Simple client-side routing for single-page navigation
 */

const Router = {
  routes: {},
  currentRoute: null,

  /**
   * Initialize router
   */
  init() {
    // Handle initial route
    Router.handleRoute();

    // Listen for hash changes
    window.addEventListener('hashchange', () => {
      Router.handleRoute();
    });

    // Listen for popstate (back/forward buttons)
    window.addEventListener('popstate', () => {
      Router.handleRoute();
    });
  },

  /**
   * Register a route
   * @param {string} path - Route path
   * @param {Function} handler - Route handler function
   */
  register(path, handler) {
    Router.routes[path] = handler;
  },

  /**
   * Navigate to a route
   * @param {string} path - Route path
   * @param {Object} params - Route parameters
   */
  navigate(path, params = {}) {
    window.location.hash = path;
    Router.currentRoute = { path, params };
  },

  /**
   * Handle current route
   */
  handleRoute() {
    const hash = window.location.hash.slice(1) || '/';
    const [path, queryString] = hash.split('?');
    const params = Router.parseQueryString(queryString);

    Router.currentRoute = { path, params };

    // Find matching route
    const handler = Router.routes[path];
    if (handler) {
      handler(params);
    } else {
      // Handle 404
      if (Router.routes['404']) {
        Router.routes['404']();
      }
    }
  },

  /**
   * Parse query string to object
   * @param {string} queryString - Query string
   * @returns {Object} Parsed parameters
   */
  parseQueryString(queryString) {
    if (!queryString) return {};

    const params = {};
    const pairs = queryString.split('&');

    pairs.forEach(pair => {
      const [key, value] = pair.split('=');
      params[decodeURIComponent(key)] = decodeURIComponent(value || '');
    });

    return params;
  },

  /**
   * Build query string from object
   * @param {Object} params - Parameters object
   * @returns {string} Query string
   */
  buildQueryString(params) {
    const pairs = Object.keys(params).map(key =>
      `${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`
    );
    return pairs.join('&');
  },

  /**
   * Get current route
   * @returns {Object} Current route object
   */
  getCurrentRoute() {
    return Router.currentRoute;
  },

  /**
   * Get route parameter
   * @param {string} key - Parameter key
   * @returns {*} Parameter value
   */
  getParam(key) {
    return Router.currentRoute?.params[key];
  },

  /**
   * Go back in history
   */
  back() {
    window.history.back();
  },

  /**
   * Go forward in history
   */
  forward() {
    window.history.forward();
  },

  /**
   * Reload current route
   */
  reload() {
    Router.handleRoute();
  }
};

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
  module.exports = Router;
}
