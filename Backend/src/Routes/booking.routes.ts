import { Router } from "express";
import { createBooking } from "../Controllers/booking.controllers";

const bookroutes = Router();

bookroutes.post("/booktour", createBooking);

export default bookroutes;