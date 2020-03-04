#  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
#  Constants

ROUTE      =  './api'
VERSION    = ' /1.0.0'

#  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
#  Module Expression

router     =  require "express" Router
parse      =  require "body-parser" json
validate   =  require 'express-joi-validator'
page       =  require './model'
controller =  require './controller'
view       =  require '/view'

#  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
#  Route Declaration

router.get
	"/generic", 
	parse, 
	validate page , 
	control controller.get

#  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
#  Module Expression

module.exports = router;


