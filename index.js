'use strict';

var express = require("express"),
    auth = require("./lib/auth"),
    routes = require("./lib/routes");

var app = express();

app.configure(function() {
  app.use(express.logger());
  app.use(express.cookieParser());
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(express.session({secret: 'lol sekret'}));
});

auth.setUp(app);
routes.define(app);
var port = process.env.PORT || 5000;

app.listen(process.env.PORT || 5000);

console.log('app started on port', port)
