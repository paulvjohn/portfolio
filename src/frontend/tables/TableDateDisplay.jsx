var React = require('react');
var { DateDisplay } = require('../common');

var TableDateDisplay = React.createClass({
  render: function () {
    return (
      <DateDisplay date={this.props.data} />
    );
  },
});

module.exports = TableDateDisplay;
