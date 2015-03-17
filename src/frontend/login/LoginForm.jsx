var React = require('react');
var Reflux = require('reflux');
var { Modal, Button, Input, Alert } = require('react-bootstrap');
var LoginActions = require('./LoginActions');

var LoginForm = React.createClass({

  componentDidMount: function  () {
    console.log('[LoginForm] Component mounted');
    this.refs.username.getInputDOMNode().focus();
  },

  handleSubmit: function (e) {
    e.preventDefault();

    var username = this.refs.username.getInputDOMNode().value,
        password = this.refs.password.getInputDOMNode().value;

    console.log('[LoginForm] Submitting login form with:', username, password);

    LoginActions.login(
      username,
      password
    );
  },

  render: function () {
    var message;
    if (this.props.errorMessage) {
      message = (
        <Alert
          bsStyle="danger">
          {this.props.errorMessage}
        </Alert>
      );
    }

    return (
      <div>
        <h1 className="page-header">Login</h1>
        <form onSubmit={this.handleSubmit}>
          {message}
          <Input
            ref="username"
            type="text"
            placeholder="Username..."
            label="Email address"
            autofocus />
          <Input
            ref="password"
            type="password"
            placeholder="Password..."
            label="Password"
            autofocus />
          <p className="pull-right">
            <a href="#">Forgot your password?</a>
          </p>
          <Button
            type="submit"
            bsSize="large"
            bsStyle="primary"
            onClick={this.handleSubmit}>
            Login</Button>
        </form>
      </div>
    );
  }
});

module.exports = LoginForm;
