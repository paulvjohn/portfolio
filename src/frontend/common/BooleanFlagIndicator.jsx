var React = require('react');
var FontAwesome = require('react-fontawesome');

var BooleanFlagIndicator = React.createClass({

  propTypes: {
    checked: React.PropTypes.bool,
  },

  getDefaultProps: function () {
    return {
      checked: false,
    }
  },

  render: function () {
    var icon = 'remove',
        className = 'text-danger';

    if (!!this.props.checked) {
      icon = 'check';
      className = 'text-success';
    }

    return (
      <FontAwesome
        className={className}
        name={icon} />
    );
  }
});

module.exports = BooleanFlagIndicator;
