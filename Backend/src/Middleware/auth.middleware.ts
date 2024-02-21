// authMiddleware.ts
import { Request, Response, NextFunction } from "express";
// import jwtUtils from "../Utils/jwtUtils";

export const authenticateUser = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  // Implement middleware to authenticate user using JWT
  
};

export const authorizeAdmin = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  // Implement middleware to authorize admin
};
