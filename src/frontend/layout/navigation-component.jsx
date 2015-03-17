var React = require('react');
var Reflux = require('reflux');
var { Link, State } = require('react-router');
var { Navbar, Nav } = require('react-bootstrap');

var Navigation = React.createClass({

  mixins: [
    State
  ],

  render: function () {

    var brand = (
      <div>
        <Link to="app">
          <img src="ue-logo.jpg" height='40' />
        </Link>
      {' '} A Premier Web Consulting Company
      </div>
    );

    var submenu = <span />;

    return (
        <Navbar brand={brand}>
          {submenu}
        </Navbar>
    );
  }
});

module.exports = Navigation;
