const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const todos = require('./app/routes/todos');
var path = require('path');

let environment = process.env.NODE_ENV || 'development';
if(environment == 'test'){
  const pool = require('./app/tests/test_server/db');
} else {
  const pool = require('./app/db');
}

// Sends static files  from the public path directory
app.use(express.static(path.join(__dirname, '/public')))


app.use(bodyParser.json());

// todos routes using middleware
app.use('/todos', todos);


//error handling using middleware
app.use((err, req, res, next) => {
  res.json(err);
})

//starting up server
const port = 3000;

module.exports = app.listen(port, () => {
  console.log(`listening on port ${port}`);
});

// Serve index.html page when request to the root is made
app.get('/', function (req, res, next) {
  res.sendfile('./public/index.html')
})
