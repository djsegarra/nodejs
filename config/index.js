var express_logger = require('express-logger-unique-req-id');
const app = require ('../app');

  exports.getCustomLogger = () =>{
    //congiguracion de logger
    fileConf = {
        level: 'info',
        filename: './logs2.log',
        handleExceptions: true,
        json: true,
        maxsize: 5242880, // 5MB
        maxFiles: 5,
        colorize: false,
        timestamp: true
    };
    express_logger.initializeLogger(app, fileConf);
    let logger = express_logger.getLogger();
    return logger;
};

