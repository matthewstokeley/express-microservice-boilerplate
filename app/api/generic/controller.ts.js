/*  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
 *  Type Declarations
 */

type controller {
	post: Object,
	get: Object
}

/** ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
 *  Constants
 */

controller = {}
database = 'mongodb://localhost:27017/query'

/**  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
 *  Module Declaration
 */

var query = require( 'query' )
,   request = require( 'request' )
,   resolve = require( 'path' ).resolve
,   nodeTypes = require( '' )

/*  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
 *  Function Expression
 */

/**
 * 
 *  @param  {Request}
 *  @param  {Object}
 *  @param  {Function}
 *   
 *  @return {Null}
 */

controller.get : controller = function ( 
	req: Request,
	res: Res,
	next: Next
): Object {
	
    query = new Query({
         databaseType: 'mongo',
         database: database,
         collection:'text',
         response: res
    });

    return query.find({}, "text", {
        response: res,
        errors: () => {}
    })

}

/**
 * 
 *  @param  {Request}
 *  @param  {Res}
 *  @param  {Next}
 *   
 *  @return {Null}
 */

controller.post : controller = function ( 
	req: Request,
	res: Res,
	next: Next
): Object {

	return res
}

/**
 *  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
 *  Module exports expression
 */

module.exports = controller;