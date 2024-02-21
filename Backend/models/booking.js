// booking.js
const sql = require('mssql');

const Booking = {
  async createBooking(booking) {
    try {
      const pool = await sql.connect();
      const result = await pool.request()
        .input('userId', sql.Int, booking.userId)
        .input('tourId', sql.Int, booking.tourId)
        .input('bookingDate', sql.DateTime, booking.bookingDate)
        .query('INSERT INTO Bookings (UserId, TourId, BookingDate) VALUES (@userId, @tourId, @bookingDate)');
      return result;
    } catch (err) {
      console.error('Error creating booking:', err);
      throw err;
    }
  },

  // Add other booking-related methods as needed
};

module.exports = Booking;
