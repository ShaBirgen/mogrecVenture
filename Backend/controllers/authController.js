const sql = require('mssql');
const config = require('../config/config');
//const jwtUtils = require('../utils/jwtUtils');

exports.registerUser = async (req, res) => {
  // Get user data from request body
  const userData = req.body;

  try {
    // Connect to SQL Server
    await sql.connect(config.mssqlDBConfig);

    // Check if the users table exists, if not, create it
    const tableExists = await sql.query`SELECT * FROM INFORMATION_SCHEMA.TABLES WHERE TABLE_NAME = N'users'`;
    if (tableExists.recordset.length === 0) {
      // Create users table if it doesn't exist
      await sql.query`CREATE TABLE users (id INT IDENTITY(1,1) PRIMARY KEY, fullName VARCHAR(255), email VARCHAR(255), phoneNumber VARCHAR(255), password VARCHAR(255))`;
    }

    // Insert user data into the users table
    await sql.query`INSERT INTO users (fullName, email, phoneNumber, password) VALUES (${userData.fullName}, ${userData.email}, ${userData.phoneNumber}, ${userData.password})`;

    // Send a success response
    res.status(201).json({ success: true, message: 'User registered successfully' });
  } catch (error) {
    console.error(error);
    // Send a failure response
    res.status(500).json({ success: false, message: 'Internal server error' });
  } finally {
    // Close SQL Server connection
    await sql.close();
  }
};


exports.loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    // Connect to SQL Server
    await sql.connect(config.mssqlDBConfig);

    // Query the users table to find the user with the provided email and password
    const result = await sql.query`SELECT * FROM users WHERE email = ${email} AND password = ${password}`;
    
    // Check if a user with the provided credentials was found
    if (result.recordset.length === 1) {
      // User found, generate a JWT token
      //const token = jwtUtils.generateToken(result.recordset[0].id); // Assuming id is the user's unique identifier in the database
      
      // Send a success response with the JWT token
      //res.status(200).json({ success: true, message: 'Login successful', token });
      res.status(200).json({ success: true, message: 'Login successful' });
    } else {
      // User not found or credentials are incorrect, send an error response
      res.status(401).json({ success: false, message: 'Invalid email or password' });
    }
  } catch (error) {
    console.error(error);
    // Send a failure response in case of any error
    res.status(500).json({ success: false, message: 'Internal server error' });
  } finally {
    // Close SQL Server connection
    await sql.close();
  }
};


exports.resetPassword = async (req, res) => {
  // Implement password reset logic
};


