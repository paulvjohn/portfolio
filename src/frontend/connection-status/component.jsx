var React = require('react');
var Reflux = require('reflux');
var capitalize = require('capitalize');
var FontAwesome = require('react-fontawesome');
var ConnectionStatusStore = require('./store');

var ConnectionStatus = React.createClass({
  mixins: [Reflux.connect(ConnectionStatusStore, 'status')],

  // TODO: Add reconneciton action.
  //onUpdateConnectionStatus: function () {
    //ConnectionStatusActions.refresh();
  //},

  render: function () {
    var className = this.props.className;
    className += this.state.status === 'connected'
      ? ' connected'
      : ' disconnected';

    var icon = <FontAwesome name="check" />;
    if (this.state.status !== 'connected') {
      icon = <FontAwesome name="times" />;
    }

    return (
      <span className={className}>
        {icon} {capitalize(this.state.status)}
      </span>
    );
  }
});

module.exports = ConnectionStatus;
