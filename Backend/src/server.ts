import express from 'express'
import router from './Routes/auth.routes';
import userRoutes from './Routes/user.routes';
// import sql from "mssql";
// import config from "./config/config";
// import authRoutes from "./routes/authRoutes";
// import tourRoutes from "./routes/tourRoutes";
// import cors from "cors";

const app = express();

app.use(express.json());
// app.use(cors());
app.use("/api/auth", router )
app.use("/api/users", userRoutes);
// app.use("/api/tours", tourRoutes);

// sql
//   .connect(config.mssqlDBConfig)
//   .then(() => console.log("SQL Server connected"))
//   .catch((err: Error) => console.log(err));

const PORT: number = 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));