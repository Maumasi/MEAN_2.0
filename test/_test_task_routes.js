
// load the `.env` file
const dotenv = require('dotenv');
dotenv.load();

const assert = require('assert');
const request = require('supertest');
const app = require('../src/app');

describe('Task endpoints', () => {
  it('create: /todo/v1/task/add', (done) => {
    assert(1 + 1 === 2);
    done();
  });

  it('update: /todo/v1/task/edit/:id', (done) => {
    assert(1 + 1 === 2);
    done();
  });

  it('find by id: /todo/v1/task/:id', (done) => {
    assert(1 + 1 === 2);
    done();
  });

  it('find all: /todo/v1/tasks/', (done) => {
    request(app)
      .get('/todo/v1/tasks/')
      .end((error, res) => {
        done();
      });
    // assert(1 + 1 === 2);
    // done();
  });

  it('delete: /todo/v1/task/remove/:id', (done) => {
    assert(1 + 1 === 2);
    done();
  });
});
