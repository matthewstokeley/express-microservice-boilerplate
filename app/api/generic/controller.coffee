#   ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
#   Constants

controller   =  {}
database     =  'mongodb://localhost:27017/query'

#   ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
#   Modules

#   ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
#   Function expression

#   @param  {Object}
#   @param  {Object}
#   @param  {Function}
  
#   @return {Object}

controller.get = ( req, res, next ) ->

    query = new Query(
         databaseType:  'mongo'
         database:      database
         collection:    'text'
         response:      res
    );

    query.find({}, "text", 
        response:       res
        errors:         () -> null
    )

#   @param  {Object}
#   @param  {Object}
#   @param  {Function}
  
#   @return {Object}
   
controller.post = ( req, res, next ) ->

    null

#  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
#  Exports expression

module.exports = controller;