require('dotenv').config();
const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();
app.use(express.static('public'));

mongoose.connect('mongodb://localhost:27017/data', {
  useMongoClient: true
})
mongoose.Promise = global.Promise;


app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');

    next();
});


// Need to be able to post info
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// These are all the routes for the API.
app.use(require('./api-routes.js'));

var port = process.env.PORT || 5003;

app.listen(port, function() {
  console.log('listening on port', port);
});
