#! /usr/bin/node

/*  ~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-
 *  Bootload a Transpiling Environment
 *  
 *  @version 0.0.2
 */

/*  ~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-
 *  Declare Modules
 */
const config = require( './config' )
const fs = require( 'fs' )
const { exec, nextTick } = require( 'process' )
const events = require( 'events' )
const { spawn } = require('child_process')
const clc = require( 'cli-color' )
const depenndencies = require( './package.json' ).dependencies


/*  ~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-
 *  Handle the configuration file
 */

const FILE_PATH = ''
const CONFIG_FILE = '.babelrc'
const CONFIG_PERM = fs.constants.F_OK | fs.constants.W_OK
let file_contents = ''


let file = fs.access( CONFIG_FILE, CONFIG_PERM, ( err ) => { } )

events.addEventListener( '', ( fileExists ) => {

	if ( ! fileExists )
		fs.writeSync( PATH, '', ( err ) => { if err throw err } )

	// @todo replace with the http module
	let exec = spawn( 'curl ${ RESOURCE_PATH } >> ${ PATH } ' )

	// populate from a .env file
	// process.exec( "touch output.txt && sed -e '/^$/d" "$1" >> output.txt )
	// @todo
	spawn( "sed /awk '{print $1}' secret.env/awk '{print $2}' secret.env/ $FILE_PATH " )

	exec.stdout.on( 'data', ( err, data ) => {
		if err throw err
	} )
}


/*  ~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-
 *  Spawn out our installation task 
 */

// we can add a dependency management workflow here, 
// to be able to manage dependencies modularly by domain of concern
// 
// we can also add this to our qa pipeline as part of ci/cd later

let depManagement = spawn( './dependency-management.sh' )

let deps = []

for ( let prop of dependencies ) {

	for ( let i = 0; i < dependencies[ prop ].length; i++ ) {
		let _char = dependencies[ prop ][ i ]

		if ( typeof _char === 'string') {

			if  ( _char === '^' ) {

			}

		}
	}
}


let exec = process.exec( 'npm install @babel/core babel-loader @babel/preset-env @babel/preset-modules', 
	[ '--save-dev' ] )

let err = ( status_code ) => {
	console.log( "Error: " + status_code )	
}

exec.stdout.on( 'data', () => {
	console.log( '' ) 
} )

exec.stderr.on( 'data', status_code )

exec.on( 'close', () => {} )


/*  ~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-
 *  Write a gulp task
 */

process.exec( 'touch gulpfile.js && echo "gulp.task( "transpile", () => { gulp.pipe("./app/").babel().dest() } )" >> gulpfile.json' )


