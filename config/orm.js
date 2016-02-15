var connection = require('./connection.js');


var orm = {

  getBurgers: function(callback) {
    connection.query('SELECT * FROM burgers', function(err, result) {
      if (err) throw err;
      console.log(result);
      callback(result);
    });
  },

  newBurger: function(addBurger, callback) {
    connection.query('INSERT INTO burgers (burger_name, devoured) VALUES (?, ?);', [addBurger, false], function(err, result) {
      if (err) throw err;
      callback(result);
    });
  },

  devour: function(burger, callback) {
    connection.query('UPDATE burgers SET devoured=true WHERE burger_name=?', [burger], function(err, result) {
      if (err) throw err;
      callback(result);
    });
  }
}

module.exports = orm;