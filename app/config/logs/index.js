var winston = require('winston');
var join = require('path').join;

var config = {
    path: ''
}

var logsDir = join( __dirname, config.path );

winston.emitErrs = true;
var logger = new winston.Logger({
    transports: [
        new winston.transports.File({
            level: 'info',
            filename: logsDir + 'info.log',
            handleExceptions: false,
            json: true,
            maxsize: 5242880, //5MB
            maxFiles: 5,
        }),
        new winston.transports.Console({
            level: 'debug',
            handleExceptions: true,
            colorize: true
        })
    ],
    exitOnError: false
});

module.exports = logger;
module.exports.stream = {
    write: function(message, encoding) {
        logger.info(message);
    }
};
