// tourRoutes.ts
import express, { Router } from "express";
import { Request, Response } from "express";
import {getAllTours,getTourById,createTour,updateTour,deleteTour} from "../Controllers/tours.controllers";

const tourroutes = Router();

tourroutes.get("/allTours", getAllTours);
tourroutes.get("/tourId", getTourById);
tourroutes.post("/createTour", createTour);
tourroutes.put("/updateTour", updateTour);
tourroutes.delete("/deleteTour", deleteTour);

export default tourroutes;
