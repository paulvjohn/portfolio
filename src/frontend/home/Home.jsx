var React = require('react');
var Reflux = require('reflux');
var { Navigation, Link, State } = require('react-router');
var { Table, ButtonToolbar, Button, Row, Col, Jumbotron } = require('react-bootstrap');
var { DateDisplay } = require('../common');
var HomeActions = require('./HomeActions');
var HomeStore = require('./HomeStore');

var Home = React.createClass({

  mixins: [
    Navigation,
    State,
    Reflux.connect(HomeStore, 'homeData')
  ],

  componentWillUpdate() {
    if (this.state.homeData.updated === true) {
      HomeActions.getTime();
    }
  },

  render() {

    var currentTime =  (
      <DateDisplay
        date={this.state.homeData.currentTime}
      />
    );

    return (
      <div className="page">
        <Jumbotron>
          <h1>Portfolio</h1>
          <p>Urbaitel Enterprises' team has over 20 years of experience building online solutions.  Our portfolio includes clients & projects worked on by our team of specialists.</p>


          <p>The current time is <b>{currentTime}</b>.  </p>
          <p>It changes every second using ReactJS, Reflux, MomentJS & Magic.  Just one simple example of the beauty of React. </p>


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

module.exports = Home;
