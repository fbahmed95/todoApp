import request from 'supertest';
// import app from './test_server/test-server';
import app from '../../server.js'
const todo = {"description": "new", "done": false};
const todoput = {"description": "check put req", "done": false};

// assuming todostestdb has just been configured


describe('Express App', () => {
  test('responds to a GET', (done) => {
    request(app)
    .get('/todos')
    .expect(200)
    .end((err, res) => {
      expect(err).toBeNull();
      expect(res.body.length).toBe(3);
      done();
    });
  });
  test('responds to a PUT', (done) => {
    request(app)
    .put('/todos/2')
    .send(todoput)
    .expect(200)
    .end((err, res) => {
      expect(err).toBeNull();
      done();
    });
  });
  test('after PUT, GET at 2', (done) => {
    request(app)
    .get('/todos')
    .expect(200)
    .end((err, res) => {
      expect(err).toBeNull();
      expect(res.body[1]).toHaveProperty('description', 'check put req');
      done();
    });
  });
  test('responds to a DELETE', (done) => {
    request(app)
    .delete('/todos/1')
    .expect(302)
    .end((err, res) => {
      expect(err).toBeNull();
      done();
    });
  });
  test('after DELETE, GET returns 2', (done) => {
    request(app)
    .get('/todos')
    .expect(200)
    .end((err, res) => {
      expect(err).toBeNull();
      expect(res.body.length).toBe(2);
      done();
    });
  });
  test('responds to a POST with the todo which was posted to it', (done) => {
    request(app)
    .post('/todos')
    .send(todo)
    .expect(200)
    .end((err, res) => {
      expect(err).toBeNull();
      done();
    });
  });
  test('after POST, GET returns 3', (done) => {
    request(app)
    .get('/todos')
    .expect(200)
    .end((err, res) => {
      expect(err).toBeNull();
      expect(res.body.length).toBe(3);
      done();
    });
  });

});
