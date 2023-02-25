import { Request, Response, NextFunction } from "express";

export default function checkUserFields(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const { username, email, password } = req.body;

  if (!username || !email || !password) {
    return res.status(400).json({
      success: false,
      message: "Required fields not filled",
    });
  }

  next();
}
