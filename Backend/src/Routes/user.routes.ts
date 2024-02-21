// userRoutes.ts
import express, { Router } from "express";
import { Request, Response } from "express";
import {getAllUsers, getUserProfile, deleteUser,updateUserProfile} from "../Controllers/user.controller";

const router: Router = express.Router();

router.get("/getProfile/:id", getUserProfile);
router.put("/updateProfile", updateUserProfile);
router.get("/allUsers", getAllUsers); // Only for admin
router.delete("/deleteUser/:id", deleteUser); // Only for admin

export default router;
