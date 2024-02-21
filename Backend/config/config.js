const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '.env') });

module.exports = {
  mssqlDBConfig: {
    server: process.env.MSSQLDB_HOST,
    user: process.env.MSSQLDB_USER,
    password: process.env.MSSQLDB_PASSWORD,
    database: process.env.MSSQLDB_DATABASE,
    port: 1433, // Ensure the port is specified
    options: {
      encrypt: false, // Change to true if using Azure
      trustServerCertificate: true // Change to true if using self-signed certificate
    }
  },
  jwtSecret: process.env.JWT_SECRET
};