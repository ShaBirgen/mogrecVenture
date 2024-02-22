// booking.ts
import mssql from "mssql"
import { mssqlDBConfig } from "../Config/config";
import { Request, Response } from "express";
import { query } from "express";

interface Booking {
  Full_Name: string;
  Trip: string;
  Email: string;
}

export const createBooking = async (req:Request, res:Response): Promise<any> => {
  try {
    const booking:Booking = req.body;
    const pool = await mssql.connect(mssqlDBConfig);

    // Add error event handler to the pool
    pool.on("error", (err) => {
      console.error("SQL Pool Error:", err);
    });

    // Request object for executing queries
    const request = pool.request();

    // Input parameters for the query
    request.input("Full_Name", mssql.VarChar, booking.Full_Name);
    request.input("Trip", mssql.VarChar, booking.Trip);
    request.input("Email", mssql.VarChar, booking.Email);

    // Execute the query
    const result = (await request.query(
      `INSERT INTO Bookings (Full_Name, Trip, Email)
       VALUES ('${booking.Email}', '${booking.Trip}', '${booking.Email}')`
    )).rowsAffected;

    console.log(result); // Logging the result to check

    return result;
  } catch (err) {
    console.error("Error creating booking:", err);
    throw err;
  }
};

export default createBooking;