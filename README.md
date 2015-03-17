# Starter Node App w/ Reflux, React & Websockets 

Welcome to Urbaitel Enterprises' Starter Reflux, React, Node, Websockets App.  Designed by our team in the North Bay of California, it comprises of our collective experiences building web applications -- the best of the best.


## Overview

Features include:

- **[Socket.io][socket-io]** - Feature rich, stable real-time WebSockets library.
- **[React][react]** - One way view rendering framework by Facebook.
    - **[Reflux][reflux]** - A simple library for uni-directional dataflow application architecture inspired by ReactJS Flux.
- **[WebPack][webpack]** - Allows CommonJS (`require('module')` style) imports in your frontend JavaScript code and other build tools.
- **[LESS][less]** - A CSS preprocessor with variables, functions, and tons of utilities to make writing CSS suck less.
- **[fb-flo][fb-flo]** for automatic reloading of your HTML, CSS and JavaScript code without refresh.
- **[Mocha][mocha]** - Lightning fast, extensible JavaScript test runner.
- **[Bower][bower]** - Front-end package management tool.
- **[Bootstrap][bootstrap]** - Front-end user interface library.
    - **[react-bootstrap][react-bootstrap]** - React components for common Bootstrap components.

Running the NPM scripts (see below), allows you to do some other awesome things like:

- Generate sourcemaps for you CSS and JavaScript.
- Automatically concatenate and minify your CSS and JavaScript.
- Run code linting on your JavaScript.
- Automatically run your test suite on any changes (with an awesome test runner to boot!).


## Setup

Copy the `.env.example` file over to `.env` and adjust the settings in it as needed. The `.env` file is loaded to configure your environment.


## Development

For local development, you'll most likely want to run the watch task by typing `npm run watch`

This will startup a web server using [fb-flo][fb-flo], watch for changes to your JavaScript, HTML and LESS files and automatically rebuild them with WebPack and run the test suite.

Try running it in one tab in your terminal program and then edit a LESS, HTML or JavaScript file and watch the page reload automatically. Sexy.

_**Note:** You'll need to install the [fb-flo browser extension][fb-flo-extension] for fb-flo to work. Make sure to have developers tools open with the flo extension enabled or it won't work properly._


### Database Migrations

To run database migrations, run `npm run migrate`.


## Production

For production the following should work:

```bash
npm run build
npm test
npm start
```


## Testing

If you run the default `npm run watch` task, the test suite is automatically run and rerun on changes to your source and test files.

If you just want to watch tests but no other code, run `npm run watch:test`.

To run the test suite once and then quit, type `npm run test`.

Tests can be found in the `test` folder and use Mocha, Sinon and Should.js.


[webpack]: http://webpack.github.io/
[react]: http://facebook.github.io/react/
[reflux]: https://github.com/spoike/refluxjs
[less]: http://lesscss.org/
[node]: http://nodejs.org/
[should]: https://github.com/shouldjs/should.js
[gulp]: http://gulpjs.com
[fb-flo]: https://github.com/facebook/fb-flo
[bower]: http://bower.io/
[mocha]: http://mochajs.org/
[fb-flo-extension]: https://chrome.google.com/webstore/detail/ahkfhobdidabddlalamkkiafpipdfchp
[bootstrap]: http://getbootstrap.com
[react-bootstrap]: http://react-bootstrap.github.io
[socket-io]: http://socket.io/
