#! /usr/bin/node

/**
 * Transpiling Environment
 *
 * @version 0.0.2
 */

/**
 * Declare Modules
 */
const config = require( './config' )
const fs = require( 'fs' )
const {exec, nextTick } = require( 'process' )
const events = require( 'events' )
const { spawn } = require('child_process')
const clc = require( 'cli-color' )


/**
 * Scaffold of a config file mdoule
 */

// if [ -f FILENAME ]
// 	then
// 		touch .babelrc
// fi

const FILE_PATH = ''
const RESOURCE_PATH
let file_contents = ''

// @todo - reduce callbacks
// 		 - add listener and register the conditional and writer fn 

// @todo wrap this conditional in an event listener
// @todo remove functions to keep the script feel

fs.access( PATH, fs.constants.F_OK | fs.constants.W_OK, ( err ) => {
	events.emit( '', err )
} )

events.addEventListener( '', ( fileExists ) => {

	if ( ! fileExists )
		fs.writeSync( PATH, '', ( err ) => { if err throw err } )

	// @todo replace with the http module
	let exec = process.exec( 'curl ${ RESOURCE_PATH } >> ${ PATH } ' )

	exec.stdout.on( 'data', ( err, data ) => {
		if err throw err
	} )
}


/**
 * 
 */
let exec = spawn( 'npm install npm install @babel/core babel-loader @babel/preset-env @babel/preset-modules', 
	[ '--save-dev' ] )

let err = ( status_code ) => {
	console.log()	
}

exec.stdout.on( 'data', () => {} )
exec.stderr.on( 'data', () => {} )
exec.on( 'close', () => {} )



// Add Gulp Task
// 


