winston    = require 'winston'
path       = require 'path'
join       = require path.join
# resolve  = require path.resolve


config:
    path: './../logs'

logsDir = join( __dirname, config.path )

winston.emitErrs = true

logger = new winston.Logger
    transports: [
        new winston.transports.File
            level: 'info'
            filename: logsDir + 'info.log'
            handleExceptions: false
            json: true
            maxsize: 5242880
            maxfiles: 5

        new winston.transports.Console
            level: 'debug'
            handleExceptions: true
            colorize: true

    ]
    exitOnError: false

module.exports = logger

module.exports.stream =
    write: ( message, encoding ) ->
        logger.info message