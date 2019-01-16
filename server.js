const express = require('express');

const app = express();

const mongoose = require('mongoose');

const bodyParser = require('body-parser');

app.use(express.static( __dirname + './dist/HelloAngluar' ));

app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json());

mongoose.Promise = global.Promise;

const routes = require('./server/config/routes');
routes(app);

app.listen(8000, function () {
    console.log("listening on port 8000");
});

