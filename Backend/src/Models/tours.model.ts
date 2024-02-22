// tour.ts
import sql from "mssql";
import { mssqlDBConfig } from "../Config/config";

export interface Tour {
  
  getAllTours(): Promise<any[]>;
  // Add other tour-related methods as needed
}

export interface Tours{
  tour_id: string;
  Destination: string,
  Tour_type: string,
  Duration: string,
  Price: string,
  Image: string,
}

export const Tour: Tour = {
  async getAllTours() {
    try {
      const pool = await sql.connect(mssqlDBConfig);
      const result = await pool.request().query("SELECT * FROM Tours");
      return result.recordset;
    } catch (err) {
      console.error("Error fetching tours:", err);
      throw err;
    }
  },
};

export default Tour;
