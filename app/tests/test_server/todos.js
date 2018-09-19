const { Router } = require('express');
const pool = require('./db');
// router is almost like a mini express app
// used to group similar routes together
const router = Router();

// get all data from db
router.get('/', (request, response, next) => {
  pool.query('SELECT * FROM todos ORDER BY id ASC', (err, res) => {
    //using the error handling middleware
    //next looks for the 'next' middleware that corresponds to the function args
    if(err) return next(err);
    response.end('got data');
  });
});

// get todo by specific id
router.get('/:id', (request, response, next) => {
  //id is in request params
  const { id } = request.params;

  pool.query('SELECT * FROM todos WHERE id = $1', [id], (err, res) => {
    if(err) return next(err);

    response.end('got data');
  })
});

// adding more todos
// data is passed in the body of request
router.post('/', (request, response, next) => {
  const { description, done } = request.body;

  pool.query(
    'INSERT INTO todos(description, done) VALUES($1, $2)',
    [description, done],
    (err, res) => {
      if(err) return next(err);

      // use bodyParser to parse POSTed data
      // redirect to GET
      response.redirect('/todos');
    }
  );
});


//update a todo
//MUST be sent all columns in table (description, done)
router.put('/:id', (request, response, next) => {
  const { id } = request.params;
  const { description, done } = request.body;

  pool.query(
    'UPDATE todos SET description=($1), done=($2) WHERE id=($3)',
    [description, done, id],
    (err, res) => {
      if(err) return next(err);
      response.end('updated data');
    }
  );
});

//delete a todo
router.delete('/:id', (request, response, next) => {
  const { id } = request.params;

  pool.query(
    'DELETE FROM todos WHERE id=($1)',
    [id],
    (err, res) => {
      if(err) return next(err);
      response.end('deleted');
    }
  );

});

module.exports = router;