import { Request, Response, NextFunction } from "express";

export default function checkUserFields(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const { username, email, password, password2 } = req.body;

  if (password !== password2) {
    return res.status(401).json({
      success: false,
      message: "Passwords don't match",
    });
  } else {
    if (!username || !email || !password) {
      return res.status(400).json({
        success: false,
        message: "Required fields not filled",
      });
    }
  }

  next();
}
