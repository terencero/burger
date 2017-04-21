// import mysql connection
var connection = require('../config/connection.js');


function questionMarks(num) {
	var arr = [];

	for (i=0; i < num; i++) {
		arr.push('?');
	}
	return arr.toString();
}

function objToSql(obj) {
	var arr = [];

	for (var key in obj) {
		if (Object.hasOwnProperty.call(obj, key)) {
			arr.push(key + '=' + obj[key]);
		}
	}
	return arr.toString();
}

var orm = {
	selectAll: function(tableInput, cb) {
		var queryString = 'SELECT * FROM ' + tableInput + ';';
		connection.query(queryString, function(err, result) {
			if (err) {
				throw err;
			}
			cb(result);
		});
	},
	insertOne: function(table, cols, vals, cb) {
		var queryString = 'INSERT INTO ' + table;

		queryString += ' (';
		queryString += cols.toString();
		queryString += ') ';
		queryString += 'VALUES (';
		queryString += questionMarks(vals.length);
		queryString += ')';

		console.log(queryString);

		connection.query(queryString, vals, function(err, result) {
			if (err) {
				throw err;
			}
			cb(result);
		});
	},
	updateOne: function(table, objColVals, condition, cb) {
		var queryString = 'UPDATE ' + table;

		queryString += ' SET ';
		queryString += objToSql(objColVals);
		queryString += ' WHERE ';
		queryString += condition;

		console.log(queryString);
		connection.query(queryString, function (err, result) {
			if (err) {
				throw err;
			}
			cb(result);
		});
	}
};

// Export the orm object to the model (burger.js)
module.exports = orm;