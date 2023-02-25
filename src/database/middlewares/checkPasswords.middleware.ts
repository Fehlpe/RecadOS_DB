import { Request, Response, NextFunction } from "express";

export default function checkPasswords(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const { password, password2 } = req.body;

  if (password !== password2) {
    return res.status(401).json({
      success: false,
      message: "Passwords don't match",
    });
  }

  next();
}
