const express = require('express');
const sql = require('mssql');
const config = require('./config/config');
const authRoutes = require('./routes/authRoutes');
const tourRoutes = require('./routes/tourRoutes');
const userRoutes = require('./routes/userRoutes');
const cors = require('cors'); // Import cors middleware

const app = express();

// Middleware
app.use(express.json());
app.use(cors()); // Enable CORS for all routes

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/tours', tourRoutes);
app.use('/api/users', userRoutes);

// Connect to SQL Server
sql.connect(config.mssqlDBConfig)
  .then(() => console.log('SQL Server connected'))
  .catch(err => console.log(err));

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
