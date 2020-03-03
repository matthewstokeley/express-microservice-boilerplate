/*  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
 *  Constants Declaration
 */

const ROUTE = './api'
const VERSION = '/1.0.0'

/*  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
 *  Module Declaration
 */

var router = require("express").Router()
,   parse = require("body-parser").json()
,   validate = require('express-joi-validator')
,   page = require('./model')
,   controller  = require('./controller')
,   view = require('/view')

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
