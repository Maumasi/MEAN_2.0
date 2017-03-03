# A demo API project for Node.js, Express.js, and MongoDB

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




# Resources

- [Install Homebrew](https://brew.sh/)
- [Install MongoDB with Homebrew](https://docs.mongodb.com/master/tutorial/install-mongodb-on-os-x/?_ga=1.219543249.977592285.1488563147)
- [Install Robomongo](https://robomongo.org/)
