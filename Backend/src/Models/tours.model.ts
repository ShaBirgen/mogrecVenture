// tour.ts
import sql from "mssql";
import { mssqlDBConfig } from "../Config/config";

interface Tour {
  getAllTours(): Promise<any[]>;
  // Add other tour-related methods as needed
}

const Tour: Tour = {
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
