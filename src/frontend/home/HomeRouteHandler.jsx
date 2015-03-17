var React = require('react');
var Reflux = require('reflux');
var { RouteHandler } = require('react-router');
var HomeStore = require('./HomeStore');

var HomeRouteHandler = React.createClass({
  mixins: [
    Reflux.connect(HomeStore, 'homeData')
  ],

  render: function () {
    var homeData = this.state.homeData;
    if (!homeData) {
      return <span />;
    }

    return (
      <RouteHandler {...this.props} homeData={homeData} />
    );
  }
});

module.exports = HomeRouteHandler;
