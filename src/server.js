// Import express
var async = require('async');
var express = require('express');
var bodyParser = require('body-parser');
var app = express();
const jsonParser = bodyParser.json()

// Load config for RethinkDB and express
var config = require(__dirname+"/config.js");
var r = require('rethinkdb');

//CORS middleware
var allowCrossDomain = function(req, res, next) {
   res.header('Access-Control-Allow-Origin', '*');
   res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
   res.header('Access-Control-Allow-Headers', 'Content-Type');
   next();
}

app.use(allowCrossDomain);
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
// parse various different custom JSON types as JSON
app.use(bodyParser.json({ type: 'application/*+json' }))

// Middleware that will create a connection to the database
//app.use(createConnection);

// Define main routes
// app.route('/todo/get').get(get);
// app.route('/todo/new').put(create);
// app.route('/update').post(update);
// app.route('/todo/delete').post(del);

// Middleware to close a connection to the database
//app.use(closeConnection);
const cxnOptions = {
    host: 'localhost',
    port: 28015,
    db: 'rethinkdb_ex'
}

var connection = null;
r.connect({ host: cxnOptions.host, port: cxnOptions.port, db: "rethinkdb_ex" }, function(err, conn) {
    if (err) throw err;
    connection = conn;
})

/** Update a todo */
app.post('/update', function(req, res) {
  console.log('req.body', req.body);
  const user = {
    'firstName': req.body.firstName,
    'lastName': req.body.lastName,
    'username': req.body.username,
    'password': req.body.password,
  }

  // console.log("req: ", todo);
  r.table('todos').insert(user).run(connection, function(err, result) {
    if (err) throw err;
    console.log(JSON.stringify(result, null, 2));
    })
    res.json({});
})

// login function

app.post('/login',function(req, res){
  console.log('req.body', req.body)
  const user = {
    username: req.body.username,
    password: req.body.password
  }
  // console.log("req: ", todo);
  r.table('todos').filter(user).run(connection, function(err, cursor) {
    if (err) throw err;
    cursor.toArray(function(err, result) {
        if (err) throw err;
        console.log(JSON.stringify(result, null, 2));
        res.json(result);
    });
      // console.log(JSON.stringify(result, null, 2));
    })
})





/** Send back a 500 error */

function handleError(res) {
    return function(error) {
        res.send(500, {error: error.message});
    }
}

app.listen(3000, 'localhost', function (err) {
  if (err) {
    console.log(err)
    return
  }
  console.log('Listening at http://localhost:3000')
})
