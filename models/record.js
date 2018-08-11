// Import (require) orm.js
// ==============================================================================
var orm = require('../config/orm.js');


// Model uses record specific inputs to call ORM functions
// ==============================================================================
var record = {
	selectAll: function (cb) {
		orm.selectAll('records', function (res) {
			cb(res);
		});
	},
	// cols and vals are arrays
	insertOne: function (cols, vals, cb) {
		orm.insertOne('records', cols, vals, function (res) {
			cb(res);
		});
	},
	updateOne: function (objColVals, condition, cb) {
		orm.updateOne('records', objColVals, condition, function (res) {
			cb(res);
		});
	},
	deleteOne: function (condition, cb) {
		orm.deleteOne('records', condition, function (res) {
			cb(res);
		});
	}
};


// Export ORM
// ==============================================================================
module.exports = record;