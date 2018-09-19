import request from 'supertest';
import app from './test_server/test-server';

const todo = {"description": "Buy more books", "done": false};


describe('Express App', () => {
    test('responds to a GET', (done) => {
      request(app)
      .get('/todos')
      .expect(200)
      .end((err) => {
        expect(err).toBeNull();
        done();
      });
    });
  });

describe('Express App', () => {
  test('responds to a POST with the todo which was posted to it', (done) => {
    request(app)
    .post('/todos')
    .send(todo)
    .expect(302)
    .end((err, res) => {
      expect(err).toBeNull();
      done();
    });
  });
});

describe('Express App', () => {
  test('responds to a DELETE', (done) => {
    request(app)
    .delete('/todos/4')
    .expect(200)
    .end((err) => {
      expect(err).toBeNull();
      done();
    });
  });
});

describe('Express App', () => {
  test('responds to a POST', (done) => {
    request(app)
    .put('/todos/1')
    .send(todo)
    .expect(200)
    .end((err, res) => {
      expect(err).toBeNull();
      done();
    });
  });
});
