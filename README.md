photography-portfolio
=====================

tomsabin.co.uk - photography portfolio

### Starting the server with a defined MongoDB

1) Start MongoDB

`mongod --dbpath=<path>`

2) Start Meteor

`MONGO_URL="mongodb://127.0.0.1:27017/<database-name>" meteor run --port 3000`

3) Go to `http://localhost:3000`
