// logger config file

const { createLogger, format, transports } = require('winston')

exports.logger = createLogger({
    level: 'info',
    format: format.json(),
    transports: [
        new transports.File({ filename: 'error.log', level: 'error' }),
        new transports.File({ filename: 'system.log' }),
        new transports.Console({
            format: format.simple()
        })
    ]
})