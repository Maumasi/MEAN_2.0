
// load the `.env` file
const dotenv = require('dotenv');
dotenv.load();

const assert = require('assert');
const mongoose = require('mongoose');
const request = require('supertest');
const app = require('../src/app');
const User = require('../src/models/collections/user');

const testPassword = 'qwer1234';
const testEmail1 = 'stud123@mail.com';
const testEmail2 = 'testUser@mail.com';
const userId = mongoose.Types.ObjectId();
let testId;
let testToken;


describe('User endpoints', () => {
  it('create: /todo/v1/user/add', (done) => {
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


  it('update: /todo/v1/user/edit/:id', (done) => {
    request(app)
    .put(`/todo/v1/user/edit/${testId}`)
    .send({
      email: testEmail2,
    })
    .end((error, res) => {
      assert(res.body.email === testEmail2);
      done();
    });
  });


  it('find by id: /todo/v1/user/:id', (done) => {
    request(app)
      .get(`/todo/v1/user/${testId}`)
      .end((error, res) => {
        if (res.body) {
          assert(res.body._id === testId);
          done();
        }
      });
  });


  it('user login: /todo/v1/user/login', (done) => {
    request(app)
      .post('/todo/v1/user/login')
      .send({
        email: testEmail2,
        password: testPassword,
      })
      .end((error, res) => {
        if (res.body) {
          assert(res.body._id === testId);
          done();
        }
      });
  });


  it('user login: /todo/v1/user/logout', (done) => {
    request(app)
      .delete('/todo/v1/user/logout')
      .set('x-auth', testToken)
      .end((error, res) => {
        if (res.body) {
          assert(res.body);
          done();
        }
      });
  });


  it('delete: /todo/v1/user/remove/:id', (done) => {
    request(app)
      .delete(`/todo/v1/user/remove/${testId}`)
      .end((error, res) => {
        assert(res.statusCode <= 204 && res.statusCode >= 200);
        done();
      });
  });
});
