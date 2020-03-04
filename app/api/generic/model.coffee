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
    # @type {Object}
    post:
        # @type {Object}
        body:
            # @type {String}
            formData: Joi.string()
    
#  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
#  Export Expression

module.exports = request;