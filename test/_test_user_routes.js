
// load the `.env` file
const dotenv = require('dotenv');
dotenv.load();

const assert = require('assert');
const request = require('supertest');
const app = require('../src/app');

const testEmail1 = 'stud123@mail.com';
const testEmail2 = 'testUser@mail.com';
let testId;


describe('User endpoints', () => {
  it('create: /todo/v1/user/add', (done) => {
    request(app)
      .post('/todo/v1/user/add')
      .send({
        username: 'stud123',
        email: testEmail1,
        password: 'qwer1234',
      })
      .end((error, res) => {
        const test = res.body;
        testId = test._id;

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
      assert(res.statusCode <= 204 && res.statusCode >= 200);
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


  it('delete: /todo/v1/user/remove/:id', (done) => {
    request(app)
      .delete(`/todo/v1/user/remove/${testId}`)
      .end((error, res) => {
        assert(res.statusCode <= 204 && res.statusCode >= 200);
        done();
      });
  });
});
