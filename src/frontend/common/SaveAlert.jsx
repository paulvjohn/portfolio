var React = require('react');
var FontAwesome = require('react-fontawesome');

var SaveAlert = React.createClass({

  propTypes: {
    message: React.PropTypes.string
  },

  getDefaultProps: function () {
    return {
      message: 'Saved'
    }
  },

  render: function () {
    return (
      <div>
        <FontAwesome
          className='text-success'
          name='check' /> {this.props.message}
      </div>
    );
  }

});

module.exports = SaveAlert;
