var React = require('react');
var Reflux = require('reflux');
var { Navigation, Link, State } = require('react-router');
var { Table, Button, Row, Col, Jumbotron } = require('react-bootstrap');

var Home = React.createClass({

  mixins: [
    Navigation,
    State
  ],

  render: function () {

    return (
      <div className="page">
        <Jumbotron>
          <h1>Portfolio</h1>
          <p>Urbaitel Enterprises' team has over 20 years of experience building online solutions.  Our portfolio includes projects worked on by our team of specialists.</p>
          <p><Button bsStyle="primary">Learn more</Button></p>
        </Jumbotron>
      </div>
    );
  }
});

module.exports = Home;
