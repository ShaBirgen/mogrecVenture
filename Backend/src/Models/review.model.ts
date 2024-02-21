// review.ts
import sql from "mssql";
import { mssqlDBConfig } from "../Config/config";

interface Review {
  userId: number;
  tourId: number;
  rating: number;
  comment: string;
}

const Review = {
  async createReview(review: Review): Promise<any> {
    try {
      const pool = await sql.connect(mssqlDBConfig);
      const result = await pool
        .request()
        .input("userId", sql.Int, review.userId)
        .input("tourId", sql.Int, review.tourId)
        .input("rating", sql.Int, review.rating)
        .input("comment", sql.NVarChar, review.comment)
        .query(
          "INSERT INTO Reviews (UserId, TourId, Rating, Comment) VALUES (@userId, @tourId, @rating, @comment)"
        );
      return result;
    } catch (err) {
      console.error("Error creating review:", err);
      throw err;
    }
  },

  // Add other review-related methods as needed
};

export default Review;
