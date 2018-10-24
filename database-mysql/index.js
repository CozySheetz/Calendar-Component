var mysql = require('mysql');

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'test'
});


// LISTINGS TABLE
  // id of the listing - unique
  // location
  // cost
  // dates booked
  // dates available?

// MONTHS TABLE/DAYS
  // listing ID - foreign key
  // dates - calendar
  // booked/available
    // true or false?


var selectAll = function(callback) {
  connection.query('SELECT * FROM items', function(err, results, fields) {
    if(err) {
      callback(err, null);
    } else {
      callback(null, results);
    }
  });
};

module.exports.selectAll = selectAll;