import { Request, Response, NextFunction } from "express";
import { UserRepository } from "../repositories/user.repository";

export default async function checkExistingIdWithQuery(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const userId = req.query.userId?.toString();
  const repository = new UserRepository();
  const userExists = await repository.checkExistingUser(userId!);

  if (!userExists) {
    return res.status(408).json({ error: "User not found" });
  }

  return next();
}
