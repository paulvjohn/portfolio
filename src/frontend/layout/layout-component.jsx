var React = require('react');
var Reflux = require('reflux');
var Router = require('react-router');
var RouteHandler = Router.RouteHandler;
var { Grid, Row, Col } = require('react-bootstrap');
var LoadingIndicator = require('../loading-indicator-component');
var Footer = require('./footer-component');
var Navigation = require('./navigation-component');

var Layout = React.createClass({

  render: function () {
    //if (!this.state) {
    //  return (
    //    <LoadingIndicator />
    //  );
    //}

    return (
      <div>
        <Navigation {...this.state} />
        <div className="container">
          <RouteHandler {...this.state} />
        </div>
        <Footer />
      </div>
    );
  }
});

module.exports = Layout;
