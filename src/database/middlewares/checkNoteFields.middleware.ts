import { Request, Response, NextFunction } from "express";

export default function checkUserFields(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const { title, description } = req.body;

  if (!title || !description) {
    return res.status(400).json({
      success: false,
      message: "Missing info",
    });
  }

  next();
}
