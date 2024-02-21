// tourRoutes.ts
import express, { Router } from "express";
import { Request, Response } from "express";
import {getAllTours,getTourById,createTour,updateTour,deleteTour} from "../Controllers/tours.controllers";

const router = Router();

router.get("/allTours", getAllTours);
router.get("/tourId", getTourById);
router.post("/createTour", createTour);
router.put("/updateTour", updateTour);
router.delete("/deleteTour", deleteTour);

export default router;
