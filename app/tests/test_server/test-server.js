const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const todos = require('./todos');
const pool = require('./db');
var path = require('path');

// Sends static files  from the public path directory
app.use(express.static(path.join(__dirname, '/public')))


app.use(bodyParser.json());

// todos routes using middleware
app.use('/todos', todos);


//error handling using middleware
app.use((err, req, res, next) => {
  res.json(err);
})

// //starting up server
 const port = 4000;

// Serve index.html page when request to the root is made
app.get('/', function (req, res, next) {
  res.sendfile('./public/index.html')
})

module.exports = app.listen(port)
