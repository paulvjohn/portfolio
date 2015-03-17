var React = require('react');
var { ConnectionStatus } = require('../connection-status');

var Footer = React.createClass({
  render: function () {
    return (
      <footer className="container page-footer">
        <ConnectionStatus
          className="connection-status" />
      </footer>
    );
  }
});

module.exports = Footer;
