
const dotenv = require('dotenv');
dotenv.config({'path': '.env'});

module.exports = {
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    passwordLogin: process.env.DB_PASSWORD,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    database: process.env.DB_NAME,
    dialect: "mysql",
    operatorsAliases: false,
    migrationStorageTableName: "sequelize_meta",
    define: {
        charset: 'utf8',
        dialectOptions: {
            collate: 'utf8mb4_general_ci'
        },
    }
};