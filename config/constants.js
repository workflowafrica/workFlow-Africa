const dotenv = require('dotenv')

dotenv.config();

module.exports = { PORT, DB_URL, DOMAIN_NAME, SECRET_KEY } = process.env;
