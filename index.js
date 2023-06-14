const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

const personRoutes = require('./src/routes/user');

const { handleNonExistingEndpoint, handleServerError } = require('./src/utils/helper');


//cors middleware for cross orgin sharing-- cors() this allows by default all http requests
app.use(cors());
app.use(bodyParser.json());

let persons = [
  {
    id: "1",
    name: "Sam",
    age: "26",
    hobbies: []
  }
]; // This is your in-memory database. DO NOT CHANGE THE INITIAL STATE

app.set('db', persons);

//person route
app.use('/person',personRoutes);

app.use(handleNonExistingEndpoint);
app.use(handleServerError);

if (require.main === module) {
    app.listen(3000);
}

module.exports = app;
