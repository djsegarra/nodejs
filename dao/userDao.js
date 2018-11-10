const logger = require('../config').getCustomLogger();

const saveUser = (username, password) => {
    logger.info("Salvo usuario");
};

module.exports = {
    saveUser
}