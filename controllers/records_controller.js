// Import (require) record.js
// =============================================================================
var record = require('../models/record.js');
var express = require('express');


// Create app router
// =============================================================================
var router = express.Router();


// GET - selectAll
router.get('/', function (req, res) {
	res.redirect('/records');
});

router.get('/records', function (req, res) {
	record.selectAll(function (data) {
		var hbsObject = { records: data };
		console.log(hbsObject);
		res.render('index', hbsObject);
	});
});


// POST - insertOne
router.post('/records/create', function (req, res) {
	record.insertOne(['record_name'], [req.body.name], function () {
		res.redirect('/records');
	});
});


// PUT - updateOne
router.put('/records/update/:id', function (req, res) {
	var condition = 'id = ' + req.params.id;

	console.log('condition', condition);

	record.updateOne({ spun: req.body.spun }, condition, function () {
		res.redirect('/records');
	});
});

// DELETE - deleteOne
router.delete('/records/delete/:id', function (req, res) {
	var condition = 'id = ' + req.params.id;

	record.deleteOne(condition, function () {
		res.redirect('/records');
	});
});


// Export router
// =============================================================================
module.exports = router;