var React = require('react');
var { BooleanFlagIndicator } = require('../common');

var TableBooleanFlagInidicator = React.createClass({
  render: function () {
    return (
      <BooleanFlagIndicator checked={this.props.data} />
    );
  },
});

module.exports = TableBooleanFlagInidicator;
