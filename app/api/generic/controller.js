/*  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
 *  Type Declarations
 */

interface GetController {
    get: Function
}

/*  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
 *  Constants Declaration
 */

const Controller:GetController = {}

/*  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
 *  Module Declaration
 */

// var Query = require('../../vendor/query/src/query');

/*  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
 *  Function Declaration
 */

/**
 *
 * 
 * @param  {Object}   req        request object
 * @param  {Object}   res        response object
 * @param  {Function} next       next object
 * 
 * @return {Null}                null
 */

CONTROLLER.get: GetController = function(
    req: Object, 
    res: Object, 
    next: Object
): Object {

    // var query = new Query({
    //     databaseType: 'mongo',
    //     database: 'mongodb://localhost:27017/query',
    //     collection: 'text',
    //     response: res
    // });

    return query.find({}, "text", {
        response: res,
        errors: function() {}
    });

}

/*  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
 *  Module Exports Declaration
 */

module.exports = Controller;