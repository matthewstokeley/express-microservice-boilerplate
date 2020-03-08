#  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
#  Modules

config = require '.taskconfig'
task = require 'gulp'
eslint = require 'gulp-eslint'
tslint = require 'gulp-tslint'
coffeelint = require 'gulp-coffeelint'


#  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
#  Tasks

task.task 'lint' () ->
	
	linter = eslint

	switch config.syntax
		case 'typescript'
			linter = tslint
			break

		case 'coffeescript'
			linter = coffeelint
			break

		case 'javascript'
			linter = eslint
			break

	task.src config.app.src
	task.pipe linter
	task.dest config.app.dist


#  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
#  Pipes

task.series 'build' [ 'lint' ]