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
	
	linter

	switch config.syntax
		case 'typescript'
			lint = tslint
			break
		case 'coffeescript'
			lint = coffeelint
		case 'javascript'
			lint = eslint

	task.src config.app.src
	task.pipe linter
	task.dest config.app.dist


#  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
#  Pipes

task.series 'build' [ 'lint' ]