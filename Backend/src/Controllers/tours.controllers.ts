import { Request, Response } from "express";
import { mssqlDBConfig } from "../Config/config";
import mssql from "mssql";
import v4 from "uuid"

interface TourData {
  tourId: string;
  Destination: string;
  Tour_type: string;
  Duration: string;
  Price: string;
  Image: string;
}

export const getAllTours = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const pool = await mssql.connect(mssqlDBConfig);
    const result = await pool.request().query("SELECT * FROM tours");
    const tours = result.recordset;
    res.status(200).json({ tours });
  } catch (error) {
    console.error("Error fetching tours:", error);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};

export const getTourById = async (
  req: Request,
  res: Response
): Promise<void> => {
  const { id } = req.params;
  try {
    const pool = await mssql.connect(mssqlDBConfig);
    const result = await pool
      .request()
      .input("tour_id", mssql.VarChar(40), id)
      .query("SELECT * FROM tours WHERE tour_id = @tour_id");
    const tour = result.recordset[0];
    if (tour) {
      res.status(200).json({ tour });
    } else {
      res.status(404).json({ message: "Tour not found" });
    }
  } catch (error) {
    console.error("Error fetching tour by ID:", error);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};
export const createTour = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const tourData: TourData = req.body;

    // Generate a unique tour ID using UUID
    const tourId = v4;

    // Connect to SQL Server
    const pool = await mssql.connect(mssqlDBConfig);

    // Insert the new tour into the database
    await pool
      .request()
      .input("tour_id", mssql.VarChar(40), tourId)
      .input("destination", mssql.VarChar(255), tourData.Destination)
      .input("tour_type", mssql.VarChar(255), tourData.Tour_type)
      .input("duration", mssql.VarChar(255), tourData.Duration)
      .input("price", mssql.VarChar(255), tourData.Price)
      .input("image", mssql.VarChar(255), tourData.Image) 
      .query(
        "INSERT INTO tours (tour_Id, Destination, Tour_type, Duration, Price, Image) VALUES (@tour_id, @destination, @tour_type, @duration, @price, @image)"
      );

    // Send a success response
    res
      .status(201)
      .json({ success: true, message: "Tour created successfully", tourId });
  } catch (error) {
    console.error("Error creating tour:", error);
    // Send a failure response
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};
export const updateTour = async (
  req: Request,
  res: Response
): Promise<void> => {
  // Implement logic to update an existing tour
};

export const deleteTour = async (
  req: Request,
  res: Response
): Promise<void> => {
  // Implement logic to delete a tour
};
