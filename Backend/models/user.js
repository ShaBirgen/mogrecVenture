// user.js
const sql = require('mssql');

const User = {
  async getUserById(userId) {
    try {
      const pool = await sql.connect();
      const result = await pool.request()
        .input('userId', sql.Int, userId)
        .query('SELECT * FROM Users WHERE Id = @userId');
      return result.recordset[0];
    } catch (err) {
      console.error('Error fetching user:', err);
      throw err;
    }
  },

  async createUser(user) {
    try {
      const pool = await sql.connect();
      const result = await pool.request()
        .input('username', sql.NVarChar, user.username)
        .input('email', sql.NVarChar, user.email)
        .input('password', sql.NVarChar, user.password)
        .query('INSERT INTO Users (Username, Email, Password) VALUES (@username, @email, @password)');
      return result;
    } catch (err) {
      console.error('Error creating user:', err);
      throw err;
    }
  },

  // Add other user-related methods as needed
};

module.exports = User;
