
// load the `.env` file
const dotenv = require('dotenv');
dotenv.load();

const assert = require('assert');
const request = require('supertest');
const app = require('../src/app');

const testDescription = 'task unit test for create';
const testDate = new Date();
let testId;


describe('Task endpoints', () => {
  it('create: /todo/v1/task/add', (done) => {
    request(app)
      .post('/todo/v1/task/add')
      .send({
        description: testDescription,
      })
      .end((error, res) => {
        const test = res.body;
        testId = test._id;

        assert(test.description === testDescription);
        done();
      });
  });


  it('update: /todo/v1/task/edit/:id', (done) => {
    request(app)
    .put(`/todo/v1/task/edit/${testId}`)
    .send({
      finishedAt: testDate,
    })
    .end((error, res) => {
      assert(res.statusCode <= 204 && res.statusCode >= 200);
      done();
    });
  });


  it('find by id: /todo/v1/task/:id', (done) => {
    request(app)
      .get(`/todo/v1/task/${testId}`)
      .end((error, res) => {
        if (res.body) {
          assert(res.body._id === testId);
          done();
        }
      });
  });


  it('find all: /todo/v1/tasks/', (done) => {
    request(app)
      .get('/todo/v1/tasks/')
      .end((error, res) => {
        if (res.body) {
          assert(res.body.length > 0);
          done();
        }
      });
  });


  it('delete: /todo/v1/task/remove/:id', (done) => {
    request(app)
      .delete(`/todo/v1/task/remove/${testId}`)
      .end((error, res) => {
        assert(res.statusCode <= 204 && res.statusCode >= 200);
        done();
      });
  });
});
