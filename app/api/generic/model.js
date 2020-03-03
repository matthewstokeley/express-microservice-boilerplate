/*  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
 *  Module Expressions
 */

var Joi = require('joi');

/*  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
 *  Object Expression
 *  @todo add typescript decorators
 */

/**
 *
 * @type {Object}
 */
var page = {
    /**
     * @type {Object}
     */
    get: {
        /**
         * @type {Object}
         */
        body: {
            /**
             * @type {Int}
             */
            // token: Joi.string().required()
        }
    }
};

/*  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
 *  Module Export Expression
 */

module.exports = page;