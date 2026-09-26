// Asadin Edu Physics · Hash-Based SPA Router

export class PhysicsRouter {
  constructor(routes, notFoundHandler) {
    this.routes = routes;
    this.notFoundHandler = notFoundHandler;
    this.currentRoute = null;

    window.addEventListener('hashchange', () => this.handleRoute());
  }

  init() {
    this.handleRoute();
  }

  navigate(url) {
    window.location.hash = url.startsWith('#') ? url : `#${url}`;
  }

  handleRoute() {
    const rawHash = window.location.hash.slice(1) || '/';
    const [pathPart, queryPart] = rawHash.split('?');
    const path = pathPart.startsWith('/') ? pathPart : `/${pathPart}`;

    const params = {};
    if (queryPart) {
      const searchParams = new URLSearchParams(queryPart);
      for (const [key, value] of searchParams.entries()) {
        params[key] = value;
      }
    }

    // Match route pattern
    let matched = null;
    let pathParams = {};

    for (const route of this.routes) {
      const paramNames = [];
      const regexPath = route.path.replace(/:([a-zA-Z0-9_]+)/g, (_, name) => {
        paramNames.push(name);
        return '([^/]+)';
      });

      const regex = new RegExp(`^${regexPath}$`);
      const match = path.match(regex);

      if (match) {
        matched = route;
        paramNames.forEach((name, idx) => {
          pathParams[name] = decodeURIComponent(match[idx + 1]);
        });
        break;
      }
    }

    if (matched) {
      this.currentRoute = {
        path,
        params: { ...params, ...pathParams },
        handler: matched.handler
      };
      matched.handler(this.currentRoute.params);
    } else if (this.notFoundHandler) {
      this.notFoundHandler(path);
    }

    // Scroll to top on navigation unless specifically suppressed
    window.scrollTo({ top: 0, behavior: 'instant' });
  }
}
