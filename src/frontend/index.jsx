/* @flow */
var React = require('react');
var Router = require('react-router');
var Routes = require('./routes');
var RouteActions = require('./RouteActions');

Router.run(Routes, /*Router.HistoryLocation,*/ function (Handler, state) {
  // Send the path to an action, so stores can update
  RouteActions.routeChanged(state);
  React.render(<Handler />, document.body);
});
