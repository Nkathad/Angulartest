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

/*
 * Retrieve all todos
 */
// function get(req, res, next) {
//     r.table('todos').orderBy({index: "createdAt"}).run(req._rdbConn).then(function(cursor) {
//         return cursor.toArray();
//     }).then(function(result) {
//         res.send(JSON.stringify(result));
//     }).error(handleError(res))
//     .finally(next);
// }

/*
 * Insert a todo
 */
// function create(req, res, next) {
//     var todo = req.body;
//     todo.createdAt = r.now(); // Set the field `createdAt` to the current time
//     r.table('todos').insert(todo, {returnChanges: true}).run(req._rdbConn).then(function(result) {
//         if (result.inserted !== 1) {
//             handleError(res, next)(new Error("Document was not inserted."));
//         }
//         else {
//             res.send(JSON.stringify(result.changes[0].new_val));
//         }
//     }).error(handleError(res))
//     .finally(next);
// }

/*
 * Update a todo
 */
app.post('/update', function(req, res) {
  console.log('req.body', req.body);
  console.log("{SDs}");
  const user = {
     'username': req.body.username,
     'password': req.body.password
   }

      // console.log("req: ", todo);
      r.table('todos').insert(user).run(connection, function(err, result) {
               if (err) throw err;
               console.log(JSON.stringify(result, null, 2));
           })
           res.json({});
})


// app.post('/update', jsonParser, (req, res) => {
//   console.log('req.body', req.body)
//     const user = {
//        'username': req.body.username,
//        'password': req.body.password
//      }
//      r.db("rethinkdb_ex").table('todos').insert(user).run().then(result => {
//          res.send(result)  })
//          .catch(err => {
//            console.log('Error:', err)
//          })
//       })

/*
 * Delete a todo
 */
// // function del(req, res, next) {
//     var todo = req.body;
//     if ((todo != null) && (todo.id != null)) {
//         r.table('todos').get(todo.id).delete().run(req._rdbConn).then(function(result) {
//             res.send(JSON.stringify(result));
//         }).error(handleError(res))
//         .finally(next);
//     }
//     else {
//         handleError(res)(new Error("The todo must have a field `id`."));
//         next();
//     }
// }

/*
 * Send back a 500 error
 */
function handleError(res) {
    return function(error) {
        res.send(500, {error: error.message});
    }
}

/*
 * Store the db connection and start listening on a port.
 */
// function startExpress(connection) {
//   app._rdbConn = connection;
//   app.listen(config.express.port);
//   console.log('Listening on port ' + config.express.port);
// }
//
// /*
//  * Connect to rethinkdb, create the needed tables/indexes and then start express.
//  * Create tables/indexes then start express
//  */
// async.waterfall([
//   function connect(callback) {
//     r.connect(config.rethinkdb, callback);
//   },
//   function createDatabase(connection, callback) {
//     //Create the database if needed.
//     r.dbList().contains(config.rethinkdb.db).do(function(containsDb) {
//       return r.branch(
//         containsDb,
//         {created: 0},
//         r.dbCreate(config.rethinkdb.db)
//       );
//     }).run(connection, function(err) {
//       callback(err, connection);
//     });
//   },
//   function createTable(connection, callback) {
//     //Create the table if needed.
//     r.tableList().contains('todos').do(function(containsTable) {
//       return r.branch(
//         containsTable,
//         {created: 0},
//         r.tableCreate('todos')
//       );
//     }).run(connection, function(err) {
//       callback(err, connection);
//     });
//   },
//   function createIndex(connection, callback) {
//     //Create the index if needed.
//     r.table('todos').indexList().contains('createdAt').do(function(hasIndex) {
//       return r.branch(
//         hasIndex,
//         {created: 0},
//         r.table('todos').indexCreate('createdAt')
//       );
//     }).run(connection, function(err) {
//       callback(err, connection);
//     });
//   },
//   function waitForIndex(connection, callback) {
//     //Wait for the index to be ready.
//     r.table('todos').indexWait('createdAt').run(connection, function(err, result) {
//       callback(err, connection);
//     });
//   }
// ], function(err, connection) {
//   if(err) {
//     console.error(err);
//     process.exit(1);
//     return;
//   }
//
//   startExpress(connection);
// });

app.listen(3000, 'localhost', function (err) {
  if (err) {
    console.log(err)
    return
  }
  console.log('Listening at http://localhost:3000')
})
