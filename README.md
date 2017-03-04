# A demo API project for Node.js, Express.js, and MongoDB

# Index
- [Use]()
- [Installing MongoDB]()
- [API End points]()
- [Resources]()

# Use

To start using this TODO app it first needs the dependancies installed.
```bash
$ npm install
```

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
If you choose the alternate option to start MongoDB with `brew services start mongo` it will start up and run even when the terminal window that executed the command is closed. Also, it with run the MongoDB server everytime you start your machien. Just remember to stop the MongoDB server when you're ready to shut it down with:
```bash
$ brew services stop mongo
```
You should now have MongoDB installed and running. <br>
Robomongo is a very useful GUI for MongoDB. A link is provided in the Resources section at the bottom of this README on how to install the Robomongo GUI.

---
<br>

# API End points
There are 5 endpoints for this API:
- `/todo/v1/`: return all todo tasks
- `/todo/v1/:id`: return an individual task
- `/todo/v1/add`: create a new task
- `/todo/v1/edit/:id`: update and existing task
- `/todo/v1/remove/:id`: delete an individual task


**Note**
The `:id` in a route like `/todo/v1/:id` represents a parameter that should actually be an `_id` of an individual task in the TODO list
<br>

## Expected request body and responses for each endpoint:

### **`/todo/v1/`** <br>
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
      "__v" : 0
  }

  /* 2 */
  {
      "_id" : ObjectId("58baa58f96135106e7a3af7e"),
      "description" : "task 1",
      "finishedAt" : null,
      "isFinished" : false,
      "__v" : 0
  }

  /* 3 */
  {
      "_id" : ObjectId("58baa59396135106e7a3af7f"),
      "description" : "task 2",
      "finishedAt" : null,
      "isFinished" : false,
      "__v" : 0
  }
]

```
Failed response: request body rejected
```JavaScript
{
  fail: 'Failed to find tasks'
}
```

<br>

### **`/todo/v1/:id`** <br>
Expected request body: **No request body needed for this endpoint** <br>

Successful response: request body received
```JavaScript
// /todo/v1/58baa59396135106e7a3af7f
{
    "_id" : ObjectId("58baa59396135106e7a3af7f"),
    "description" : "task 2",
    "finishedAt" : null,
    "isFinished" : false,
    "__v" : 0
}
```

Failed response: request body rejected
```JavaScript
{
  fail: 'Failed to find task'
}
```

<br>

### **`/todo/v1/add`** <br>
Expected request body:
```JavaScript
{
  description: 'Description or shorthand of task to be completed'
}
```

Successful response: request body received
```JavaScript
{
    "_id" : ObjectId("58baa59396135106e7a3af7f"),
    "description" : "Description or shorthand of task to be completed",
    "finishedAt" : null,
    "isFinished" : false,
    "__v" : 0
}
```

Failed response: request body rejected
```JavaScript
{
  fail: 'Task not saved'
}
```

<br>

### **`/todo/v1/edit/:id`** <br>
Expected request body:
```JavaScript
// /todo/v1/edit/58baa59396135106e7a3af7f
{
  finishedAt: new Date(),
  isFinished: true
}
```

Successful response: request body received
```JavaScript
{
    "_id" : ObjectId("58baa59396135106e7a3af7f"),
    "description" : "Description or shorthand of task to be completed",
    "finishedAt" : "2016-05-18T16:00:00Z",
    "isFinished" : true,
    "__v" : 1
}
```

Failed response: request body rejected
```JavaScript
{
  fail: 'Failed to update task'
}
```

<br>

### **`/todo/v1/remove/:id`** <br>
Expected request body: **No request body needed for this endpoint** <br>

Successful response:
```JavaScript
{
    "_id" : ObjectId("58baa59396135106e7a3af7f"),
    "description" : "Description or shorthand of task to be completed",
    "finishedAt" : "2016-05-18T16:00:00Z",
    "isFinished" : true,
    "__v" : 1
}
```

Failed response:
```JavaScript
{
  fail: 'Failed to delete task'
}
```

---
<br>

# Resources

- [MongoDB Docs](https://docs.mongodb.com/manual/tutorial/query-documents/)
- [Mongoose Docs](http://mongoosejs.com/docs/guide.html)
- [Install Homebrew](https://brew.sh/)
- [Install MongoDB with Homebrew](https://docs.mongodb.com/master/tutorial/install-mongodb-on-os-x/?_ga=1.219543249.977592285.1488563147)
- [Install Robomongo](https://robomongo.org/)
