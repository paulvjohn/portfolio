var React = require('react');
var Reflux = require('reflux');
var { Navigation, Link, State } = require('react-router');
var { Table, ButtonToolbar, Button, Row, Col, Jumbotron } = require('react-bootstrap');

var Clients = React.createClass({

  mixins: [
    Navigation,
    State
  ],

  render: function () {

    return (
      <div className="page">
        <Jumbotron>
          <h1>Clients</h1>
          <p>Urbaitel Enterprises' team has over 20 years of experience building online solutions.  Our portfolio includes clients & projects worked on by our team of specialists.</p>

          <Link
            to='clients'
            className="btn btn-primary"
          >
            Clients
          </Link>
          {' '}
          <Link
            to='clients'
            className="btn btn-danger"
          >
            Projects
          </Link>
          {' '}
          <Link
            to='clients'
            className="btn btn-info"
          >
            Github
          </Link>
        </Jumbotron>
      </div>
    );
  }
});

module.exports = Clients;
