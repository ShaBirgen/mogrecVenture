import { Request, Response, request } from "express";
import { mssqlDBConfig } from "../Config/config";
import mssql from "mssql";
import { v4 } from "uuid";

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
  const tourId = req.params.id;
  // console.log(tourId);
  
  try {
    const pool = await mssql.connect(mssqlDBConfig);
    const result =( await pool
      .request()
      .input("tourId", mssql.VarChar(40), tourId)
      .query(`SELECT * FROM tours WHERE tourId = '${tourId}'`)).recordset;
      console.log(result);
      
    const tour = result[0];
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
export const createTour = async (req: Request, res: Response) => {
  try {
    const tourData: TourData = req.body;

    // Generate a unique tour ID using UUID
    const tourId = v4();

    // Connect to SQL Server
    const pool = await mssql.connect(mssqlDBConfig);

    // Verify pool connection
    if (pool.connected) {
      const query = `INSERT INTO tours (tourId, Destination, Tour_type, Duration, Price, Image)
         VALUES ('${tourId}', '${tourData.Destination}', '${tourData.Tour_type}', '${tourData.Duration}', '${tourData.Price}', '${tourData.Image}')`;

      let result = (
        await pool
          .request()
          .input("tourId", mssql.VarChar(40), tourId)
          .input("Destination", mssql.VarChar(255), tourData.Destination)
          .input("Tour_type", mssql.VarChar(255), tourData.Tour_type)
          .input("Duration", mssql.VarChar(255), tourData.Duration)
          .input("Price", mssql.VarChar(255), tourData.Price)
          .input("Image", mssql.VarChar(255), tourData.Image)
          .query(query)
      ).recordset;
      console.log("This is the result", result);

      // Send a success response
      res
        .status(201)
        .json({ success: true, message: "Tour created successfully", tourId });
    } else {
      return res.status(503).json({
        error: "Could not create pool connection",
      });
    }
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
  const tourId = req.params.id;
  try {
    const pool = await mssql.connect(mssqlDBConfig);
    const updatedTour = req.body;
    await pool.query`UPDATE tours SET column1 = ${updatedTour.column1}, column2 = ${updatedTour.column2}, ... WHERE id = ${tourId}`;
    res.status(200).json({ success: true, data: updatedTour });
  } catch (error) {
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};


export const deleteTour = async (
  req: Request,
  res: Response
): Promise<void> => {
  const tourId = req.params.id;
  try {
    const pool = await mssql.connect(mssqlDBConfig);
    const result = (await pool 
      .request()
      .input("tourId", mssql.VarChar(40), tourId)
      // Execute the DELETE query
     .query(`DELETE FROM tours WHERE tourId = '${tourId}'`)).recordset;
     console.log(result);
     
      

    // Send success response
    res.status(204).json({ success: true, data: null });
  } catch (error) {
    // Send error response
    res
      .status(500)
      .json({
        success: false,
        message: "Internal server error",
      });
  }
};
