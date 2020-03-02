/*  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
 *  Constants Declaration
 */

const ROUTE = './api'
const VERSION = '/1.0.0'

/*  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
 *  Module Declaration
 */

var express = require( 'express' )
,   config = require( './config' )
,   app = express()


/*  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
 *  Application Lifecycle
 *  @todo encapsulate with a more robust hooks pattern
 *  
 */

config.init( app )

let routes = [
	'/generic'
]

for ( let i = 0; i < routes.length; i++) {
	app.use( ROUTE + VERSION, require('./api' + routes[ i ] ) )
}

config.handleErrors( app )

// Default Export

module.exports = app
