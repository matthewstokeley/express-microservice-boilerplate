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
const { spawn } = require('child_process')
const clc = require( 'cli-color' )


/**
 * 
 */

// if [ -f FILENAME ]
// 	then
// 		touch .babelrc
// fi

let path = ''

if ( ! fs.existsSync( PATH ) ) {

	fs.writeFile( PATH, '', ( err ) => {
		if ( err ) throw err

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


