/*  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
 *  Constants Declaration
 */

const ROUTE = './api'
const VERSION = '/1.0.0'

/*  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
 *  Module Declaration
 */

var router = require("express").Router();
var parse = require("body-parser").json();
var validate = require('express-joi-validator');
var page = require('./model');
var routerController = require('./controller');
var view = require('/view');

/*  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
 *  Route Expression
 */

router.get(
	"/generic", 
	parse, 
	validate(page), 
	control(routerController.get)
);

/*  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
 *  Module Declaration
 */

module.exports = router;