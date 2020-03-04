#  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
#  Module Expressions

Joi = require 'joi' ;

#  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
#  Object Expression
#  @todo add typescript decorators

# @type {Object}
request:
    # @type {Object}    
    get:
        # @type {Object}
        body:
            # @type {Int}
            token: Joi.string().required()
    
#  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
#  Export Expression

module.exports = request;