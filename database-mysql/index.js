var mysql = require('mysql');

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'test'
});


// LISTINGS TABLE
  // ListingID - int, PRIMARY KEY
  // address,
  // minimum nights to book
  // 

// BOOKINGS Table
  // Listing_ID - Foreig Key
  // start date - references the first date that one specific person/group is using it
  // end date - references when that rental time  is done\
    // MAX IS 8 DAYS


// Markings 
// ***** PEOPLE CAN GO IN AND SAY FOR CERTAIN DAYS THEIR PROPERTY IS UNAVAILABLE FOR RENTAL
  // type: - string?
  // start date 
  // end date



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