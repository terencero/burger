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
	selectAll:
}