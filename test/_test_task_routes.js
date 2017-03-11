
// load the `.env` file
const dotenv = require('dotenv');
dotenv.load();

const assert = require('assert');
const mongoose = require('mongoose');
const request = require('supertest');
const app = require('../src/app');
const User = require('../src/models/collections/user');

const testPassword = 'qwer1234';
const testEmail1 = '1234@mail.com';
const userId = mongoose.Types.ObjectId();
const testDescription = 'task unit test for create';
const testDate = new Date();
let testId;
let testToken;

describe('Task endpoints', () => {
  it('create user to task auth routes', (done) => {
    request(app)
      .post('/todo/v1/user/add')
      .send({
        _id: userId,
        email: testEmail1,
        password: testPassword,
      })
      .end((error, res) => {
        const test = res.body;
        testId = test._id;
        // capture the session token
        User.findById(testId).then((user) => {
          testToken = user.tokens[0].token;
        });


        assert(test.email === testEmail1);
        done();
      });
  });

  // =================================================
  it('create: /todo/v1/task/add', (done) => {
    request(app)
      .post('/todo/v1/task/add')
      .set('x-auth', testToken)
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
      .set('x-auth', testToken)
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
      .set('x-auth', testToken)
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
      // .set('x-auth', testToken)
      .end((error, res) => {
        assert(res.statusCode <= 204 && res.statusCode >= 200);
        done();
      });
  });

  // =================================================
  it('delete user', (done) => {
    request(app)
      .delete(`/todo/v1/user/remove/${userId}`)
      .set('x-auth', testToken)
      .end((error, res) => {
        assert(res.statusCode <= 204 && res.statusCode >= 200);
        done();
      });
  });
});
