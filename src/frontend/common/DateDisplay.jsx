var React = require('react');
var moment = require('moment');
var { SetIntervalMixin } = require('../mixins');
var Validator = require('validator');

var DateDisplay = React.createClass({

  mixins: [SetIntervalMixin],

  render: function () {
    var date, timestamp;

    if (Validator.isDate(this.props.date)) {
      date = new Date(this.props.date);
      timestamp = moment(date).format('MMMM Do YYYY, h:mm a');
    } else {
      timestamp = '';
    }

    return (
      <span>{timestamp}</span>
    );
  },
});

module.exports = DateDisplay;
