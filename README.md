# Description
An API project using NodeJS with ExpressJS and MongoDB using Mongoose. This is a TODO API that is meant to serve as an exercise on how to implement NodeJS, ExpressJS, and MongoDB as a backend. I enjoy working with JavaScript and wanted to do a refresher on what I've already learned and work in some things I haven't tried yet.

# Index
- [Use](#user-content-use)
- [Installing MongoDB](#user-content-installing-mongoDB)
- [Running The TODO App](#user-content-running-the-todo-app)
- [API Endpoints](#user-content-api-endpoints)
- [Resources](#user-content-resources)
- [Unit Tests](#user-content-unit-tests)

---
<br>

# Use

To get started with this TODO app just issue a pull request from inside a new directory and install dependancies.
```bash
$ cd /path/to/new/project/directory
$ git init
$ git pull https://github.com/Maumasi/MEAN_2.0.git
$ npm install
```
Next you'll have to rename the file `env.dist` in the ROOT directory to `.env`. The default values for this file are for development only. Any real credentials should NEVER be committed with `git`! <br>
Default values are:
```bash
PORT=3000
DB_NAME=todo
DB_TEST_NAME=todo_test
DB_USER=
DB_PW=
DB_HOST=localhost
DB_SCHEMA=mongodb
DB_PORT=
```
**Note**
On a linux Ubuntu machine these variables would be set in `/etc/environment`. If you'll planning to deploy with another OS check to see where these environmental variable should be set.

---
<br>


# Installing MongoDB

First you'll have to install MongoDB
```bash
$ brew install mongo
```
MongoDB requires a `/data/db` directory and we'll have to make this our selves. We can do with by running the following command:
```bash
$ sudo mkdir -p /data/db
```
Now the owner of that directory needs to be changed over to the developer with the following command:
```bash
$ sudo chown -Rv `whoami` /data/db
```

Finally we can run the MongoDB server with:
```bash
$ mongod
```
Alternatively you can start the MongoDB server with which will keep the MongoDB server alive until explicitly told to stop:
```bash
$ brew services start mongo
```
**Note**
If you choose the alternate option to start MongoDB with `brew services start mongo` it will start up and run even when the terminal window that executed the command is closed. Also, it with run the MongoDB server every time you start your machine. Just remember to stop the MongoDB server when you're ready to shut it down with:
```bash
$ brew services stop mongo
```
You should now have MongoDB installed and running. <br>
Robomongo is a very useful GUI for MongoDB. A link is provided in the Resources section at the bottom of this README on how to install the Robomongo GUI. For instructions on how to get started with Robomongo, MongoDB, or mongoose checkout the [Resources](#user-content-resources) section at the bottom for links to the guides.

---
<br>

# Running The TODO App
Now that all dependancies are installed and MongoDB is installed and running the only thing left to get this API off the ground, locally, is to start the `server.js` script. Just enter the following command:
```bash
# if you're not already inside the ROOT directory
$ cd /path/to/new/project/directory

$ node server.js
```
The server should running be now and a print to the terminal should read:
```bash
Server running on port 3000
```
A very useful app to test out this API is called *Postman*. A link on how to install and use this tool is in the [Resources](#user-content-resources) section.

---
<br>

# API Endpoints
There are 5 endpoints for this API:
**Task Routes**
- *GET* `/todo/v1/tasks/`: return all todo tasks
- *GET* `/todo/v1/task/:id`: return an individual task
- *POST* `/todo/v1/task/add`: create a new task
- *PUT* `/todo/v1/task/edit/:id`: update and existing task
- *DELETE* `/todo/v1/task/remove/:id`: delete an individual task

**User Routes**
- *GET* `/todo/v1/user/:id`: return an individual user
- *POST* `/todo/v1/user/add`: create a new user
- *PUT* `/todo/v1/user/edit/:id`: update and existing user
- *DELETE* `/todo/v1/user/remove/:id`: delete an individual user
- *POST* `/todo/v1/user/login`: login user
- *DELETE* `/todo/v1/user/logout`: logout user

**Note**
The `:id` in a route like `/todo/v1/:id` represents a parameter that should actually be an `_id` of an individual task in the TODO list
<br>

## Expected request body and responses for **Tasks** routes:

### **`/todo/v1/task/`** <br>
Expected request body: **No request body needed for this endpoint** <br>

Successful response: request body received
```JavaScript
// this is a demo response
[
  {
      "_id" : ObjectId("58baa55396135106e7a3af7d"),
      "description" : "task 0",
      "finishedAt" : null,
      "isFinished" : false,
      "_owner": "23bca55396135106e7a3af2s",
      "__v" : 0
  }

  /* 2 */
  {
      "_id" : ObjectId("58baa58f96135106e7a3af7e"),
      "description" : "task 1",
      "finishedAt" : null,
      "isFinished" : false,
      "_owner": "23bca55396135106e7a3af2s",
      "__v" : 0
  }

  /* 3 */
  {
      "_id" : ObjectId("58baa59396135106e7a3af7f"),
      "description" : "task 2",
      "finishedAt" : null,
      "isFinished" : false,
      "_owner": "23bca55396135106e7a3af2s",
      "__v" : 0
  }
]

```
Failed response: request body rejected
```JavaScript
{
  "fail": 'Failed to find tasks'
}
```

<br>

### **`/todo/v1/task/:id`** <br>
Expected request body: **No request body needed for this endpoint** <br>

Successful response: request body received
```JavaScript
// /todo/v1/task/58baa59396135106e7a3af7f
{
    "_id" : ObjectId("58baa59396135106e7a3af7f"),
    "description" : "task 2",
    "finishedAt" : null,
    "isFinished" : false,
    "_owner": "23bca55396135106e7a3af2s",
    "__v" : 0
}
```

Failed response: request body rejected
```JavaScript
{
  "fail": 'Failed to find task'
}
```

<br>

### **`/todo/v1/task/add`** <br>
Expected request body:
```JavaScript
{
  "description": 'Description or shorthand of task to be completed'
}
```

Successful response: request body received
```JavaScript
{
    "_id" : ObjectId("58baa59396135106e7a3af7f"),
    "description" : "Description or shorthand of task to be completed",
    "finishedAt" : null,
    "isFinished" : false,
    "_owner": "23bca55396135106e7a3af2s",
    "__v" : 0
}
```

Failed response: request body rejected
```JavaScript
{
  "fail": 'Failed to create task'
}
```

<br>

### **`/todo/v1/task/edit/:id`** <br>
Expected request body:
```JavaScript
// /todo/v1/task/edit/58baa59396135106e7a3af7f
{
  "finishedAt": new Date(),
  "isFinished": true
}
```

Successful response: request body received
```JavaScript
{
    "_id" : ObjectId("58baa59396135106e7a3af7f"),
    "description" : "Description or shorthand of task to be completed",
    "finishedAt" : "2016-05-18T16:00:00Z",
    "isFinished" : true,
    "_owner": "23bca55396135106e7a3af2s",
    "__v" : 1
}
```

Failed response: request body rejected
```JavaScript
{
  "fail": 'Failed to update task'
}
```

<br>

### **`/todo/v1/task/remove/:id`** <br>
Expected request body: **No request body needed for this endpoint** <br>

Successful response:
```JavaScript
{
    "_id" : ObjectId("58baa59396135106e7a3af7f"),
    "description" : "Description or shorthand of task to be completed",
    "finishedAt" : "2016-05-18T16:00:00Z",
    "isFinished" : true,
    "_owner": "23bca55396135106e7a3af2s",
    "__v" : 1
}
```

Failed response:
```JavaScript
{
  "fail": 'Failed to delete task'
}
```

---
<br>

## Expected request body and responses for **User** routes:
**Note:**
Users have much of their properties hidden when a user record is returned to prevent malicious manipulation

### **`/todo/v1/user/:id`** <br>
Expected request body: **No request body needed for this endpoint** <br>

Successful response: request body received
```JavaScript
// /todo/v1/user/23bca55396135106e7a3af2s
{
  "_id": "23bca55396135106e7a3af2s",
  "email": "maumasi+1@mail.com"
}
```

Failed response: request body rejected
```JavaScript
{
  "fail": 'Failed to find user'
}
```

<br>

### **`/todo/v1/user/add`** <br>
Expected request body:
```JavaScript
{
    "email": "demo_user@mail.com",
    "password": "password123"
}
```

Successful response: request body received
```JavaScript
{
  "_id": "58c49ef57170e9301424105d",
  "email": "maumasi+1@mail.com"
}
```

Failed response: request body rejected
```JavaScript
{
  "fail": 'Failed to create user'
}
```

<br>

### **`/todo/v1/user/edit/:id`** <br>
Expected request body:
```JavaScript
// /todo/v1/user/edit/58c49ef57170e9301424105d
{
  "email": "new_email@mail.com"
}
```

Successful response: request body received
```JavaScript
{
  "_id": "58c49ef57170e9301424105d",
  "email": "new_email+1@mail.com"
}
```

Failed response: request body rejected
```JavaScript
{
  "fail": 'Failed to update user'
}
```

<br>

### **`/todo/v1/user/remove/:id`** <br>
Expected request body: **No request body needed for this endpoint** <br>

Successful response:
```JavaScript
// /todo/v1/user/remove/58c49ef57170e9301424105d
// status code === 204
```

Failed response:
```JavaScript
{
  "fail": 'Failed to delete user'
}
```

<br>

### **`/todo/v1/user/login`** <br>
Expected request body: <br>
```JavaScript
// /todo/v1/user/edit/58c49ef57170e9301424105d
{
    "email": "another_demo_user@mail.com",
    "password": "passwordABCD"
}

```

Successful response:
```JavaScript
{
  "_id": "58c4a36741a3f03074456c7c",
  "email": "maumasi@mail.com"
}
```

Failed response:
```JavaScript
{
  "fail": "User failed to login with credentials"
}
```

<br>

### **`/todo/v1/user/logout`** <br>
Expected request body: **No request body needed for this endpoint** <br>

Successful response:
```JavaScript
{
  "success": "User logged out and session token deleted"
}
```

Failed response:
```JavaScript
{
  "fail": "Could not find user or user was not authenticated"
}
```

<br>


# Unit Tests
To run the unit tests that test all the API endpoints all you have to do is enter the following command in the terminal:
```bash
$ npm run test
```
**Note:**
This command invokes `nodemon`, so if you don't have this installed globally checkout the link to do so in the [Resources](#user-content-resources) section or change the `test` script in the `package.json` file located in the ROOT directory.

Next you will see something that looks like this...
```bash
[nodemon] 1.11.0
[nodemon] to restart at any time, enter `rs`
[nodemon] watching: *.*
[nodemon] starting `mocha`


  Task endpoints
    ✓ create user to task auth routes (907ms)
    ✓ create: /todo/v1/task/add
    ✓ update: /todo/v1/task/edit/:id
    ✓ find by id: /todo/v1/task/:id
    ✓ find all: /todo/v1/tasks/
    ✓ delete: /todo/v1/task/remove/:id
    ✓ delete user

  User endpoints
    ✓ create: /todo/v1/user/add (806ms)
    ✓ update: /todo/v1/user/edit/:id
    ✓ find by id: /todo/v1/user/:id
    ✓ user login: /todo/v1/user/login (816ms)
    ✓ delete: /todo/v1/user/remove/:id
    ✓ user logout: /todo/v1/user/logout


  13 passing (3s)

[nodemon] clean exit - waiting for changes before restart
```
If one or more of the unit tests do not pass then there will be a red mark next to the unit test description and an error printout at the end of the test list (the list above).

**Note**
The server script and the unit test command can run at the same time. Unit tests run on a separate port than the server main API server so you can auto run unit test live while developing. Very nice.
---
<br>

# Resources
- [Installing NodeJS](https://nodejs.org/en/download/)
- [Installing **nodemon** globally](https://www.npmjs.com/package/nodemon)
- [ExpressJS](http://expressjs.com/)
- [MongoDB Docs](https://docs.mongodb.com/manual/tutorial/query-documents/)
- [Mongoose Docs](http://mongoosejs.com/docs/guide.html)
- [Postman for testing APIs](https://www.getpostman.com/docs/)
- [Install Homebrew](https://brew.sh/)
- [Install MongoDB with Homebrew](https://docs.mongodb.com/master/tutorial/install-mongodb-on-os-x/?_ga=1.219543249.977592285.1488563147)
- [Install Robomongo](https://robomongo.org/)
