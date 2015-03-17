var React = require('react');
var Reflux = require('reflux');
var { RouteHandler } = require('react-router');
var ClientsStore = require('./ClientsStore');

var ClientsRouteHandler = React.createClass({
  mixins: [
    Reflux.connect(ClientsStore, 'clientData')
  ],

  render: function () {
    var clientData = this.state.clientData;
    if (!clientData) {
      return <span />;
    }

    return (
      <RouteHandler {...this.props} clientData={clientData} />
    );
  }
});

module.exports = ClientsRouteHandler;
