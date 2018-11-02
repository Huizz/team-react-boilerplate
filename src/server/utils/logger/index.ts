import { createLogger, format, transports } from 'winston';

// logger.log({ level: 'info', label: 'UserController', message: 'Test logger' });

const logger = createLogger({
    level: 'info',
    format: format.combine(
        format.label({ controller: 'Unknown controller' }),
        format.timestamp(),
        format.json(),
        format.printf(info => `[${info.timestamp}] ${info.label} - ${info.level}: ${info.message}`)
    ),
    transports: [new transports.Console()]
})

export default logger;