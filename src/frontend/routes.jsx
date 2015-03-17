var React = require('react');
var { Route, Redirect, RouteHandler, DefaultRoute, NotFoundRoute } = require('react-router');
var Layout = require('./layout/layout-component');
var { HomeRouteHandler, Home } = require('./home');
var { ClientsRouteHandler, Clients } = require('./clients');
var NotFound = require('./page-not-found-component');

module.exports = (
  <Route name="app" handler={Layout} path="/">
    <Route name="home" handler={HomeRouteHandler}>
      <DefaultRoute handler={Home} />
    </Route>
    <Route name="clients" handler={ClientsRouteHandler}>
      <DefaultRoute handler={Clients} />
    </Route>
    <Redirect from="/" to="home" />
    <NotFoundRoute handler={NotFound} />
  </Route>
);
