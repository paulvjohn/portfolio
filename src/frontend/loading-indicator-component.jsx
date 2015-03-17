var React = require('react');
var FontAwesome = require('react-fontawesome');

var LoadingIndicator = React.createClass({
  render: function () {
    return (
      <div className="center-on-page">
        <FontAwesome
          size="5x"
          name="spinner"
          spin />
      </div>
    );
  }
});

module.exports = LoadingIndicator;
