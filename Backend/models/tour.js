// tour.js
const sql = require('mssql');

const Tour = {
  async getAllTours() {
    try {
      const pool = await sql.connect();
      const result = await pool.request().query('SELECT * FROM Tours');
      return result.recordset;
    } catch (err) {
      console.error('Error fetching tours:', err);
      throw err;
    }
  },

  // Add other tour-related methods as needed
};

module.exports = Tour;
