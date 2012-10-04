/*
 * GET home page.
 */
var routes = require('../routes');

exports.index = function(req, res){
  res.render('index', {
    title: 'Home', 
    description: 'Description',
    author: 'Author'
  });
};
exports.contact = function(req, res) {
	res.render('contact', {
	    title: 'Contact', 
	    description: 'Description',
	    author: 'Author'
	});
};
exports.events = function(req, res) {
	res.render('events', {
	    title: 'Events', 
	    description: 'Description',
	    author: 'Author'
	});
};
exports.home = function(req, res) {
	res.render('index', {
	    title: 'Home', 
	    description: 'Description',
	    author: 'Author'
	});
};
exports.menu = function(req, res) {
	res.render('menu', {
	    title: 'Menu', 
	    description: 'Description',
	    author: 'Author'
	});
};
exports.press = function(req, res) {
	res.render('press', {
	    title: 'Press', 
	    description: 'Description',
	    author: 'Author'
	});
};
exports.tour = function(req, res) {
	res.render('tour', {
	    title: 'Tour', 
	    description: 'Description',
	    author: 'Author'
	});
};
exports.delegate = function(req, res){
	routes[req.params.page](req, res);
};