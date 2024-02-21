import mssql from "mssql";
import { Request, Response } from "express";
import { mssqlDBConfig } from "../Config/config";
import { generateToken } from "../Utils/jwtUtils";
import { v4  } from "uuid";
import bcrypt from 'bcrypt'

interface UserData {
  id: string;
  fullName: string;
  email: string;
  phoneNumber: string;
  password: string;
}

export const registerUser = async (req: Request, res: Response) => {
  // Get user data from request body
  const userData: UserData = req.body;
  const hash_pwd = await bcrypt.hash(userData.password, 5);
  // console.log(hash_pwd);
  

  try {
     const id = v4();
     console.log(
      "id", id
     );
     

     // Connect to SQL Server
     const pool = await mssql.connect(mssqlDBConfig);


    // Check if the users table exists, if not, create it
    const tableExists =
      await pool.query`SELECT * FROM INFORMATION_SCHEMA.TABLES WHERE TABLE_NAME = N'users'`;
    if (tableExists.recordset.length === 0) {
      // Create users table if it doesn't exist
      await pool.query`CREATE TABLE users (id VARCHAR(40) PRIMARY KEY, fullName VARCHAR(255), email VARCHAR(255), phoneNumber VARCHAR(255), password VARCHAR(255))`;
    }

    // Insert user data into the users table
    await pool.query`INSERT INTO users (id, fullName, email, phoneNumber, password) VALUES (${id},${userData.fullName}, ${userData.email}, ${userData.phoneNumber}, ${hash_pwd})`;

    // Send a success response
    res
      .status(201)
      .json({ success: true, message: "User registered successfully" });
  } catch (error) {
    console.error(error);
    // Send a failure response
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};

export const loginUser = async (req: any, res: any) => {
  const { email, password } = req.body;

  try {
    // Connect to SQL Server
    const pool = await mssql.connect(mssqlDBConfig);

    // Query the users table to find the user with the provided email and password
    const result =
      await pool.query`SELECT * FROM users WHERE email = ${email} AND password = ${password}`;

    // Check if a user with the provided credentials was found
    if (result.recordset.length === 1) {
      // User found, generate a JWT token
      const token = generateToken(result.recordset[0].id); // Assuming id is the user's unique identifier in the database
console.log(token);

      // Send a success response with the JWT token
      res.status(200).json({ success: true, message: "Login successful" });
    } else {
      // User not found or credentials are incorrect, send an error response
      res
        .status(401)
        .json({ success: false, message: "Invalid email or password" });
    }
  } catch (error) {
    console.error(error);
    // Send a failure response in case of any error
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};

export const resetPassword = async (req: any, res: any) => {
  // Implement password reset logic
};
function uuidv4() {
  throw new Error("Function not implemented.");
}

