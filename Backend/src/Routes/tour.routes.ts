// tourRoutes.ts
import express, { Router } from "express";
import { Request, Response } from "express";
import {getAllTours,getTourById,createTour,updateTour,deleteTour} from "../Controllers/tours.controllers";

const tourroutes = Router();

tourroutes.get("/allTours", getAllTours);
tourroutes.get("/tourId/:id", getTourById);
tourroutes.post("/createTour", createTour);
tourroutes.put("/updateTour/:id", updateTour);
tourroutes.delete("/deleteTour/:id", deleteTour);

export default tourroutes;
