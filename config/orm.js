// var connection = require('./connection.js');

// module.exports = {
//     newBurger: function(addBurger) {
//       connection.query('INSERT INTO burgers (burger_name) VALUES (?);', [addBurger], function(err, result) {
//         if (err) throw err;
//       });
//     },
//     devour: function(devourBurger) {
//       connection.query('UPDATE burgers devoured=false WHERE burger_name=?', [devourBurger], function(err, result) {
//         if (err) throw err;
//       });
//     }
// }