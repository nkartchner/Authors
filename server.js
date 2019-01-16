const express = require('express');

const app = express();

const mongoose = require('mongoose');

const path = require('path');

const bodyParser = require('body-parser');

app.use(express.static( __dirname + './public/dist/public' ));

app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json());

mongoose.Promise = global.Promise;

app.all("*", (request,response,next) => {
    response.sendFile(path.resolve("./public/dist/public/index.html"));
  });

const routes = require('./server/config/routes');
routes(app);

app.listen(8000, function () {
    console.log("listening on port 8000");
});

