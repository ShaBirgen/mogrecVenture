// userController.ts
import { Request, Response } from "express";
import User from "../Models/user.model";
import { mssqlDBConfig } from "../Config/config";
import mssql from "mssql";
import { config } from "dotenv";

export const getUserProfile = async (
  req: Request,
  res: Response
): Promise<void> => {
  // Implement logic to fetch user profile
  const id = req.params.id; 

 try {

   // Connect to SQL Server
   const pool = await mssql.connect(mssqlDBConfig);
   const result = (await pool
     .request()
     .input("id", mssql.VarChar(40), id) // Assuming userId is an integer
     .query(`SELECT * FROM Users WHERE id = '${id}'`)).recordset;
      console.log(result);
      
   // Check if a user with the provided ID exists
   const user = result[0];
   if (id) {
     // User found, return the user's profile
     res.status(200).json({user});
   } else {
     // User not found, return an error response
     res.status(404).json({ message: "User not found" });
   }
 } catch (error) {
   console.error("Error fetching user profile:", error);
   res.status(500).json({ error: "Internal server error" });
 }

};

export const updateUserProfile = async (
  req: Request,
  res: Response
): Promise<void> => {
  // Implement logic to update user profile
};

export const getAllUsers = async (
  req: Request,
  res: Response
): Promise<void> => {
  // Implement logic to fetch all users (for admin)
try {
  // Connect to SQL Server
 const pool = await mssql.connect(mssqlDBConfig);

  // Execute stored procedure to get all users
  const result = await pool.request().execute("getAllUsers");

  // Check if users are found
  const users = result.recordset;
  if (users.length > 0) {
    res.status(200).json({ users });
  } else {
    res.status(404).json({ message: "No users found" });
  }
} catch (error) {
  console.error("Error fetching users:", error);
  res.status(500).json({ error: "Internal server error" });
}

};

export const deleteUser = async (req: Request,res: Response)=> {
  // Implement logic to delete a user (for admin)

       try {
         const id = req.params.id;
         const pool = await mssql.connect(mssqlDBConfig);

         let result = (
           await pool
             .request()
             .input("id", mssql.VarChar, id)
             .execute("deleteUser")
         ).recordset;
          
         return res.status(200).json({
           deleted: "Account has been deleted successfully",
           result,
         });
       } catch (error) {
         return res.status(500).json({
           error,
         });
       }

};
